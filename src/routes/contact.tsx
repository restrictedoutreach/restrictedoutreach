import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Contact from "@/components/commercial/Contact";
export const Route = createFileRoute("/contact")({
  head: () => localizedHead("/contact", "en"),
  component: Contact,
});
