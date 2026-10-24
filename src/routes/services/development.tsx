import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/services/development")({
  head: () => localizedHead("/services/development", "en"),
  component: () => <Offering kind="development" />,
});
