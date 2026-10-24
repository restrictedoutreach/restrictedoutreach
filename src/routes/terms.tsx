import { commercialHead } from '@/lib/commercial';
import { createFileRoute } from "@tanstack/react-router";
import TermsOfService from "@/pages/TermsOfService";

export const Route = createFileRoute("/terms")({
  head: () => commercialHead('Términos de servicio','Condiciones de uso de RESTRICTED OUTREACH.','/terms'),
  component: TermsOfService,
});
