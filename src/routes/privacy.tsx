import { commercialHead } from "@/lib/commercial";
import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy")({
  head: () => commercialHead("Privacy policy", "How RESTRICTED OUTREACH processes personal data and protects your privacy rights.", "/privacy"),
  component: PrivacyPolicy,
});
