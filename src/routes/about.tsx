import { createFileRoute } from "@tanstack/react-router";
import { commercialHead } from "@/lib/commercial";
import Offering from "@/components/commercial/Offering";
export const Route = createFileRoute("/about")({
  head: () =>
    commercialHead(
      "Nuestra consultoría de IA",
      "Conectamos estrategia y desarrollo para convertir la IA en capacidad de negocio.",
      "/about",
    ),
  component: () => <Offering kind="about" />,
});
