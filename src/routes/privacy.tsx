import { commercialHead } from '@/lib/commercial';
import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy")({
  head: () => commercialHead('Política de privacidad','Tratamiento de datos personales y derechos de privacidad.','/privacy'),
  component: PrivacyPolicy,
});
