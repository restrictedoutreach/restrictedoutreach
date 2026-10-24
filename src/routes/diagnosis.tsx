import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/diagnosis")({
  head: () => localizedHead("/diagnosis", "en"),
  component: () => <Offering kind="diagnosis" />,
});
