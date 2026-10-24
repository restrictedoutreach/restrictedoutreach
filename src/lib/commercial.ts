import { useTranslation } from "react-i18next";
import { useLocation } from "@tanstack/react-router";
import { pathLanguage } from "./localized-seo";
export type Language = "es" | "ca" | "en";
export const choose = (lang: string, es: string, ca: string, en: string) =>
  lang.startsWith("es") ? es : lang.startsWith("ca") ? ca : en;
export function useCommercial() {
  const pathname = useLocation({ select: (location) => location.pathname });
  return (es: string, ca: string, en: string) =>
    choose(pathLanguage(pathname), es, ca, en);
}
export const publicPages = [
  "/",
  "/strategy",
  "/services/development",
  "/method",
  "/diagnosis",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];
export function commercialHead(
  title: string,
  description: string,
  path: string,
  noindex = false,
) {
  return {
    meta: [
      { title: `${title} | RESTRICTED OUTREACH` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | RESTRICTED OUTREACH` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://www.restrictedoutreach.com${path}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: [
      { rel: "canonical", href: `https://www.restrictedoutreach.com${path}` },
    ],
  };
}
export const diagnosticRules = {
  workshopMinutes: 120,
  pilotDays: 30,
  methodologyWeeks: 6,
};
