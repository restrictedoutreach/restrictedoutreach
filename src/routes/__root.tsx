import { useEffect, useMemo } from "react";
import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
  useLocation,
  useNavigate,
  type ErrorComponentProps,
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
import { getDefaultLanguage, resources } from "@/i18n";
import { basePath, pathLanguage, commercialPaths } from "@/lib/localized-seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RESTRICTED OUTREACH",
  description:
    "AI strategy at scale and development with Lovable and agentic Claude.",
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
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RESTRICTED OUTREACH",
  description: "AI strategy, adoption and application development",
  url: "https://www.restrictedoutreach.com",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Spain" },
  serviceType: [
    "AI Strategy",
    "AI Adoption",
    "Technical Consulting",
    "Custom Development",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "author", content: "RESTRICTED OUTREACH" },
        {
          name: "keywords",
          content:
            "AI strategy, Lovable development, Claude agents, AI adoption, Barcelona",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "RESTRICTED OUTREACH" },
        { property: "og:locale", content: "en_US" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon.png",
        },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png" },
      ],
      scripts: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-Q72PNJ66Y0",
          async: true,
        },
        {
          children:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Q72PNJ66Y0');",
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationJsonLd),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteJsonLd),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(professionalServiceJsonLd),
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFound,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  return (
    <html lang={pathLanguage(pathname)} suppressHydrationWarning>
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
  const pathname = useLocation({ select: (location) => location.pathname });
  const language = pathLanguage(pathname);
  const navigate = useNavigate();
  const translation = useMemo(() => {
    const instance = createInstance();
    instance.init({ resources, lng: language, fallbackLng: "en", initImmediate: false, interpolation: { escapeValue: false } });
    return instance;
  }, [language]);

  useEffect(() => {
    // Detection chooses a URL, never mutates a shared SSR translation instance.
    const detected = getDefaultLanguage();
    const path = commercialPaths.find((entry) => entry === basePath(pathname));
    if (language === "en" && path && (detected === "es" || detected === "ca")) {
      if (path === "/") void navigate({ to: "/$lang", params: { lang: detected }, replace: true });
      else void navigate({ to: "/$lang/$", params: { lang: detected, _splat: path.slice(1) }, replace: true });
    }
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={translation}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
        <CookieConsent />
        <Chatbot />
      </TooltipProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
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
