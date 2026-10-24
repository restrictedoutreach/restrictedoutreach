import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Page from "@/components/commercial/Home";
export const Route = createFileRoute("/")({
  head: () => localizedHead("/", "en"),
  component: Page,
});
