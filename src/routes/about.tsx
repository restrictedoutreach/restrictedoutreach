import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/localized-seo";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/about")({
  head: () => localizedHead("/about", "en"),
  component: () => <Offering kind="about" />,
});
