import { createFileRoute, notFound } from "@tanstack/react-router";
import Offering, { type OfferingKind } from "@/components/commercial/Offering";
import Contact from "@/components/commercial/Contact";
import { commercialPaths, localizedHead, type CommercialPath } from "@/lib/localized-seo";

function resolvePath(splat?: string): CommercialPath {
  const path = `/${splat ?? ""}`.replace(/\/$/, "") || "/";
  const match = commercialPaths.find((entry) => entry === path && entry !== "/");
  if (!match) throw notFound();
  return match;
}
export const Route = createFileRoute("/$lang/$")({
  loader: ({ params }) => ({ path: resolvePath(params._splat) }),
  head: ({ params, loaderData }) => loaderData ? localizedHead(loaderData.path, params.lang === "ca" ? "ca" : "es") : { meta: [{ title: "Page unavailable | RESTRICTED OUTREACH" }, { name: "robots", content: "noindex, follow" }] },
  component: LocalizedPage,
});
function LocalizedPage() {
  const { path } = Route.useLoaderData();
  if (path === "/contact") return <Contact />;
  const kinds: Partial<Record<CommercialPath, OfferingKind>> = { "/strategy": "strategy", "/services/development": "development", "/method": "method", "/diagnosis": "diagnosis", "/about": "about", "/services": "services" };
  const kind = kinds[path];
  if (!kind) throw notFound();
  return <Offering kind={kind} />;
}