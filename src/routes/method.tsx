import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/method")({
  head: () => localizedHead("/method", "en"),
  component: () => <Offering kind="method" />,
});
