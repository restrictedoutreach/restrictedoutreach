import { commercialHead } from "@/lib/commercial";
import { createFileRoute } from "@tanstack/react-router";
import TermsOfService from "@/pages/TermsOfService";

export const Route = createFileRoute("/terms")({
  head: () => commercialHead("Terms of service", "Terms governing the use of RESTRICTED OUTREACH and our AI consulting and development services.", "/terms"),
  component: TermsOfService,
});
