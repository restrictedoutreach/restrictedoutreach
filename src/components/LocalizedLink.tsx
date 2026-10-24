import { Link as RouterLink, useLocation } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";
import { basePath, commercialPaths, pathLanguage, type CommercialPath } from "@/lib/localized-seo";

type Destination = CommercialPath | "/privacy" | "/terms" | "/cookies";
export function Link({ to, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: Destination }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const lang = pathLanguage(pathname);
  if (lang === "en" || !commercialPaths.some((path) => path === to)) return <RouterLink to={to} {...props} />;
  if (to === "/") return <RouterLink to="/$lang/" params={{ lang }} {...props} />;
  return <RouterLink to="/$lang/$" params={{ lang, _splat: basePath(to).slice(1) }} {...props} />;
}