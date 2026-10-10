import { useEffect } from "react";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/CookieConsent";
import Chatbot from "@/components/Chatbot";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

// ported from main.tsx
import i18n, { getDefaultLanguage } from "@/i18n";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RESTRICTED OUTREACH",
  description:
    "Spain's first certified Plane partner. Expert implementation, migration, and custom solutions.",
  url: "https://www.restrictedoutreach.com",
  logo: "https://www.restrictedoutreach.com/favicon.png",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
    addressLocality: "Spain",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RESTRICTED OUTREACH",
  url: "https://www.restrictedoutreach.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.restrictedoutreach.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RESTRICTED OUTREACH",
  description: "Expert Plane implementation, migration, and consulting services",
  url: "https://www.restrictedoutreach.com",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Spain" },
  serviceType: [
    "Software Implementation",
    "Migration Services",
    "Technical Consulting",
    "Custom Development",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "author", content: "RESTRICTED OUTREACH" },
      {
        name: "keywords",
        content:
          "Plane partner, Plane implementation, project management, Spain, Jira alternative, workflow automation, agile tools, enterprise software",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "RESTRICTED OUTREACH" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-Q72PNJ66Y0", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Q72PNJ66Y0');",
      },
      { type: "application/ld+json", children: JSON.stringify(organizationJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(professionalServiceJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const detected = getDefaultLanguage();
    if (detected !== i18n.language) i18n.changeLanguage(detected);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
        <CookieConsent />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6 text-center text-foreground">
      <h1 className="text-2xl font-semibold">This page didn't load</h1>
      <p className="text-muted-foreground">
        Something went wrong on our end. Try again or head back home.
      </p>
      <div className="flex gap-3">
        <button
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </button>
        <a className="rounded-md border border-border px-4 py-2" href="/">
          Go home
        </a>
      </div>
    </div>
  );
}
