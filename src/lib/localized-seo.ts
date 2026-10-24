export type SiteLanguage = "en" | "es" | "ca";
export const commercialPaths = ["/", "/strategy", "/services/development", "/method", "/diagnosis", "/about", "/contact", "/services"] as const;
export type CommercialPath = typeof commercialPaths[number];
export const origin = "https://www.restrictedoutreach.com";
export function pathLanguage(path: string): SiteLanguage {
  const first = path.split("/")[1];
  return first === "es" || first === "ca" ? first : "en";
}
export function basePath(path: string): string {
  return pathLanguage(path) === "en" ? path : path.replace(/^\/(es|ca)(?=\/|$)/, "") || "/";
}
export function localizedPath(path: string, lang: SiteLanguage): string {
  const base = basePath(path).replace(/\/$/, "") || "/";
  if (!commercialPaths.some((p) => p === base) || lang === "en") return base;
  return `/${lang}${base === "/" ? "" : base}`;
}
type Translation = [string, string, string];
const copy: Record<CommercialPath, { title: Translation; description: Translation }> = {
  "/": {
    title: ["AI strategy & Lovable development", "Estrategia IA y desarrollo con Lovable", "Estratègia IA i desenvolupament amb Lovable"],
    description: ["AI consulting in Barcelona: scale AI adoption, build Lovable applications and Claude agents with human oversight and measurable business impact.", "Consultoría de IA en Barcelona: estrategia, adopción a escala, aplicaciones con Lovable y agentes Claude con control humano e impacto medible.", "Consultoria d’IA a Barcelona: estratègia, adopció a escala, aplicacions amb Lovable i agents Claude amb control humà i impacte mesurable."],
  },
  "/strategy": {
    title: ["AI strategy & adoption consulting", "Consultoría de estrategia y adopción IA", "Consultoria d’estratègia i adopció IA"],
    description: ["Scale AI across your business with process diagnosis, a prioritized roadmap, governance and team adoption. Human-first consulting in Barcelona.", "Implanta IA a escala con diagnóstico de procesos, hoja de ruta priorizada, gobierno y adopción del equipo. Consultoría centrada en las personas.", "Implanta IA a escala amb diagnòstic de processos, full de ruta prioritzat, govern i adopció de l’equip. Consultoria centrada en les persones."],
  },
  "/services/development": {
    title: ["Lovable development & Claude AI agents", "Desarrollo Lovable y agentes IA con Claude", "Desenvolupament Lovable i agents IA Claude"],
    description: ["Build business applications with Lovable and agentic workflows with Claude. Integrations, scoped permissions, testing and launch support.", "Creamos aplicaciones empresariales con Lovable y flujos agénticos con Claude: integraciones, permisos, pruebas y acompañamiento en el lanzamiento.", "Creem aplicacions empresarials amb Lovable i fluxos agèntics amb Claude: integracions, permisos, proves i acompanyament en el llançament."],
  },
  "/method": {
    title: ["3A method for human-first AI adoption", "Método 3A para la adopción de IA", "Mètode 3A per a l’adopció d’IA"],
    description: ["Discover our 3A method: friction audit, invisible architecture and supported adoption. Connect people, business systems and measurable AI impact.", "Conoce el método 3A: Auditoría de Fricción, Arquitectura Invisible y Adopción Acompañada. Personas, sistemas e impacto medible de la IA.", "Coneix el mètode 3A: Auditoria de Fricció, Arquitectura Invisible i Adopció Acompanyada. Persones, sistemes i impacte mesurable de la IA."],
  },
  "/diagnosis": {
    title: ["AI opportunity diagnosis workshop", "Taller de diagnóstico de oportunidades IA", "Taller de diagnòstic d’oportunitats IA"],
    description: ["A two-hour AI diagnosis workshop to map workflows, identify friction and prioritize a first use case. Start with a conversation to confirm fit.", "Taller de diagnóstico IA de dos horas para mapear procesos, identificar fricción y priorizar un primer caso de uso. Empezamos valorando el encaje.", "Taller de diagnòstic IA de dues hores per mapar processos, identificar fricció i prioritzar un primer cas d’ús. Comencem valorant l’encaix."],
  },
  "/about": {
    title: ["AI consultancy in Barcelona", "Consultoría de IA en Barcelona", "Consultoria d’IA a Barcelona"],
    description: ["Meet RESTRICTED OUTREACH, a technology consultancy in Sant Cugat, Barcelona. We connect AI strategy, application development and human-first adoption.", "RESTRICTED OUTREACH, consultoría tecnológica en Sant Cugat, Barcelona. Conectamos estrategia IA, desarrollo y adopción centrada en las personas.", "RESTRICTED OUTREACH, consultoria tecnològica a Sant Cugat, Barcelona. Connectem estratègia IA, desenvolupament i adopció centrada en les persones."],
  },
  "/contact": {
    title: ["Contact our AI consulting team", "Contacta con nuestro equipo de IA", "Contacta amb el nostre equip d’IA"],
    description: ["Tell us about your AI strategy, Lovable application or Claude agent project. Contact RESTRICTED OUTREACH in Barcelona to discuss the next step.", "Cuéntanos tu proyecto de estrategia IA, aplicación Lovable o agente Claude. Contacta con RESTRICTED OUTREACH y acordemos el siguiente paso.", "Explica’ns el teu projecte d’estratègia IA, aplicació Lovable o agent Claude. Contacta amb RESTRICTED OUTREACH i acordem el següent pas."],
  },
  "/services": {
    title: ["AI consulting & development services", "Servicios de consultoría y desarrollo IA", "Serveis de consultoria i desenvolupament IA"],
    description: ["Two connected services: AI strategy at scale and application and agent development with Lovable and Claude. From diagnosis to integrated delivery.", "Dos servicios conectados: estrategia IA a escala y desarrollo de aplicaciones y agentes con Lovable y Claude. Del diagnóstico a la integración.", "Dos serveis connectats: estratègia IA a escala i desenvolupament d’aplicacions i agents amb Lovable i Claude. Del diagnòstic a la integració."],
  },
};
export function localizedHead(path: CommercialPath, lang: SiteLanguage = "en") {
  const index = lang === "en" ? 0 : lang === "es" ? 1 : 2;
  const title = `${copy[path].title[index]} | RESTRICTED OUTREACH`;
  const description = copy[path].description[index];
  const url = origin + localizedPath(path, lang);
  return {
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { property: "og:type", content: "website" }, { property: "og:locale", content: lang === "en" ? "en_GB" : lang === "es" ? "es_ES" : "ca_ES" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: title }, { name: "twitter:description", content: description }],
    links: [{ rel: "canonical", href: url }, ...(["en", "es", "ca"] as const).map((language) => ({ rel: "alternate", hrefLang: language, href: origin + localizedPath(path, language) })), { rel: "alternate", hrefLang: "x-default", href: origin + path }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: title, description, url, inLanguage: lang, isPartOf: { "@type": "WebSite", name: "RESTRICTED OUTREACH", url: origin } }) }],
  };
}