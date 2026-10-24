import { useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { ArrowUpRight, CheckCircle2, Mail, Loader2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCommercial } from "@/lib/commercial";
import { COMPANY } from "@/lib/constants";
import HeroMatrix from "@/components/animations/HeroMatrix";
export default function CommercialContact() {
  const c = useCommercial();
  const [interest, setInterest] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!interest) return;
    setState("sending");
    try {
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        subject: `${interest} — ${c("Solicitud comercial", "Sol·licitud comercial", "Business enquiry")}`,
        message: `${data.get("message")}\n\nSource: ${document.referrer || "direct"}\nPrivacy consent: accepted`,
      };
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("Send failed");
      setState("success");
      window.dispatchEvent(
        new CustomEvent("commercial-enquiry", { detail: { interest } }),
      );
    } catch {
      setState("error");
    }
  }
  return (
    <Layout>
      <section className="relative overflow-hidden py-12 lg:py-16">
        <HeroMatrix />
        <div className="commercial-container relative z-10">
          <p className="eyebrow text-primary">
            {c("HABLEMOS", "PARLEM", "LET’S TALK")}
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-medium max-w-3xl">
            {c(
              "¿Qué quieres hacer posible?",
              "Què vols fer possible?",
              "What do you want to make possible?",
            )}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            {c(
              "Cuéntanos tu reto. Te responderemos para entender el contexto y acordar el siguiente paso.",
              "Explica’ns el teu repte. Et respondrem per entendre el context i acordar el següent pas.",
              "Tell us about your challenge. We’ll reply to understand the context and agree on a next step.",
            )}
          </p>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 mt-12">
            {state === "success" ? (
              <div role="status" className="border-t border-accent pt-8">
                <CheckCircle2 className="h-10 w-10 text-accent" />
                <h2 className="mt-5 text-2xl">
                  {c(
                    "Hemos recibido tu consulta.",
                    "Hem rebut la teva consulta.",
                    "We’ve received your enquiry.",
                  )}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {c(
                    "Te contactaremos en el email indicado. Esta solicitud no reserva una cita.",
                    "Et contactarem a l’email indicat. Aquesta sol·licitud no reserva una cita.",
                    "We’ll contact you at the email provided. This request does not reserve an appointment.",
                  )}
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => {
                    setState("idle");
                    setInterest("");
                  }}
                >
                  {c(
                    "Enviar otra consulta",
                    "Enviar una altra consulta",
                    "Send another enquiry",
                  )}
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">{c("Nombre", "Nom", "Name")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={200}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {c(
                        "Email profesional",
                        "Email professional",
                        "Work email",
                      )}{" "}
                      *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">
                    {c("Empresa", "Empresa", "Company")} *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    maxLength={200}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">
                    {c(
                      "¿En qué podemos ayudarte?",
                      "En què et podem ajudar?",
                      "How can we help?",
                    )}{" "}
                    *
                  </Label>
                  <Select required value={interest} onValueChange={setInterest}>
                    <SelectTrigger id="interest">
                      <SelectValue
                        placeholder={c(
                          "Selecciona un interés",
                          "Selecciona un interès",
                          "Select an interest",
                        )}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Strategy">
                        {c("Estrategia IA", "Estratègia IA", "AI strategy")}
                      </SelectItem>
                      <SelectItem value="Development">
                        {c(
                          "Desarrollo — Lovable / Claude",
                          "Desenvolupament — Lovable / Claude",
                          "Development — Lovable / Claude",
                        )}
                      </SelectItem>
                      <SelectItem value="Both">
                        {c("Ambos", "Tots dos", "Both")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {c(
                      "Tu reto o proyecto",
                      "El teu repte o projecte",
                      "Your challenge or project",
                    )}{" "}
                    *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={4500}
                    placeholder={c(
                      "¿Qué proceso quieres mejorar o qué necesitas construir?",
                      "Quin procés vols millorar o què necessites construir?",
                      "Which process would you like to improve, or what do you need to build?",
                    )}
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 accent-primary"
                  />
                  <span>
                    {c("He leído la", "He llegit la", "I have read the")}{" "}
                    <Link to="/privacy" className="text-foreground underline">
                      {c(
                        "política de privacidad",
                        "política de privacitat",
                        "privacy policy",
                      )}
                    </Link>{" "}
                    {c(
                      "y acepto el tratamiento de mis datos para responder a esta consulta.",
                      "i accepto el tractament de les meves dades per respondre aquesta consulta.",
                      "and agree to the processing of my data to respond to this enquiry.",
                    )}
                  </span>
                </label>
                {state === "error" && (
                  <p role="alert" className="text-destructive">
                    {c(
                      "No se ha podido enviar. Inténtalo de nuevo o escríbenos por email.",
                      "No s’ha pogut enviar. Torna-ho a provar o escriu-nos per email.",
                      "Unable to send. Try again or contact us by email.",
                    )}
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={state === "sending" || !interest}
                  size="lg"
                >
                  {state === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                  )}
                  {state === "sending"
                    ? c("Enviando…", "Enviant…", "Sending…")
                    : c("Enviar consulta", "Enviar consulta", "Send enquiry")}
                </Button>
              </form>
            )}
            <aside className="lg:pl-10 lg:border-l border-border">
              <p className="eyebrow text-accent">
                {c("SIN RODEOS", "SENSE EMBUTS", "STRAIGHT TO THE POINT")}
              </p>
              <h2 className="mt-5 text-2xl font-medium">
                {c(
                  "Un buen punto de partida.",
                  "Un bon punt de partida.",
                  "A good starting point.",
                )}
              </h2>
              <ol className="mt-6 space-y-5 text-muted-foreground">
                <li>
                  01 /{" "}
                  {c(
                    "Entendemos tu contexto.",
                    "Entenem el teu context.",
                    "Understand your context.",
                  )}
                </li>
                <li>
                  02 /{" "}
                  {c(
                    "Valoramos el encaje.",
                    "Valorem l’encaix.",
                    "Assess the fit.",
                  )}
                </li>
                <li>
                  03 /{" "}
                  {c(
                    "Acordamos el siguiente paso.",
                    "Acordem el següent pas.",
                    "Agree the next step.",
                  )}
                </li>
              </ol>
              <div className="mt-10 border-t border-border pt-6">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex gap-2 items-center text-sm break-all"
                >
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  {COMPANY.email}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  {COMPANY.address}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
