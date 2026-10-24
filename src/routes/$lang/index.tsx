import { createFileRoute } from "@tanstack/react-router";
import Home from "@/components/commercial/Home";
import { localizedHead } from "@/lib/localized-seo";
export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => localizedHead("/", params.lang === "ca" ? "ca" : "es"),
  component: Home,
});