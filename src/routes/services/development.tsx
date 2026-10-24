import { createFileRoute } from "@tanstack/react-router";
import { commercialHead } from "@/lib/commercial";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/services/development")({
  head: () =>
    commercialHead(
      "Desarrollo con Lovable y Claude",
      "Aplicaciones y agentes, integraciones, validación y acompañamiento.",
      "/services/development",
    ),
  component: () => <Offering kind="development" />,
});
