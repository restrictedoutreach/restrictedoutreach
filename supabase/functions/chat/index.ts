const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the virtual assistant for RESTRICTED OUTREACH, Spain's first certified Plane partner. You help website visitors learn about the company and its services.

## About RESTRICTED OUTREACH
- Founded in 2024, based in Sant Cugat del Vallés, Barcelona, Spain.
- In 2025, became Spain's first certified Plane partner.
- Contact: raul.pelaez@palantircode.com | +34 900 000 000
- Address: Benet Cortada 8, 08174 Sant Cugat del Vallés, Barcelona, Spain

## What is Plane?
Plane is a modern, open-source project management tool that includes:
- **Projects**: Customizable workflows, dependency tracking, flexible boards (Kanban, List, Gantt).
- **Wiki**: Built-in documentation with rich text editor and publishable pages.
- **AI**: Intelligent automation for routine tasks and insights.
- **Deployment options**: Cloud, Self-hosted, or Airgapped for security/compliance needs.

## Our Services
1. **Migration Services**: Seamlessly migrate from Jira, Linear, ClickUp, or Asana to Plane. Zero data loss guaranteed, user training included, custom field mapping.
2. **Implementation & Configuration**: Expert setup with best practices, custom workflow design, governance frameworks, performance optimization.
3. **Custom Development**: API integrations, custom automations, third-party connectors, workflow extensions.
4. **Managed Services**: 24/7 monitoring, proactive maintenance, user support, regular health checks.

## Solutions (Industries/Departments)
We configure Plane for: Marketing, Sales, HR & People, Operations, Finance, IT & DevOps, Customer Service, R&D.

## Why Choose Us
- Spain's first certified Plane partner
- Deep expertise in project management tools and enterprise implementations
- Bilingual support: English and Spanish
- Enterprise security: SOC 2, GDPR, ISO27001 compliant

## Guidelines
- Default language is English. Always respond in English unless the user writes in Spanish or Catalan.
- If the user writes in Spanish, respond in Spanish. If the user writes in Catalan, respond in Catalan.
- You MUST support English, Spanish, and Catalan fluently.
- Be friendly, professional, and concise.
- If asked about pricing, say to contact us for a personalized quote.
- If a question is outside your knowledge, suggest contacting us at raul.pelaez@palantircode.com or visiting /contact.
- Do NOT invent information not provided above.`;

// Simple IP-based rate limiting using in-memory store
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
               req.headers.get("cf-connecting-ip") || "unknown";
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { messages } = body;

    // Validate messages input
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    for (const msg of messages) {
      if (!msg || (msg.role !== "user" && msg.role !== "assistant") || !msg.content || typeof msg.content !== "string" || msg.content.length > 4000) {
        return new Response(JSON.stringify({ error: "Invalid message format" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes, inténtalo de nuevo en unos segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Error del servicio de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
