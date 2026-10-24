import { commercialHead } from "@/lib/commercial";
import { createFileRoute } from "@tanstack/react-router";
import CookiesPolicy from "@/pages/CookiesPolicy";

export const Route = createFileRoute("/cookies")({
  head: () => commercialHead("Cookies policy", "Information about cookies and browsing preferences on the RESTRICTED OUTREACH website.", "/cookies"),
  component: CookiesPolicy,
});
