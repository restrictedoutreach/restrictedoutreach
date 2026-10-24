import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/services/")({
  head: () => localizedHead("/services", "en"),
  component: () => <Offering kind="services" />,
});
