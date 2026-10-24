import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/strategy")({
  head: () => localizedHead("/strategy", "en"),
  component: () => <Offering kind="strategy" />,
});
