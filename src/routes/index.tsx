import { createFileRoute } from "@tanstack/react-router";
import { commercialHead } from "@/lib/commercial";
import Page from "@/components/commercial/Home";
export const Route = createFileRoute("/")({
  head: () =>
    commercialHead(
      "Estrategia y desarrollo de IA",
      "Consultoría de IA a escala, aplicaciones con Lovable y agentes con Claude.",
      "/",
    ),
  component: Page,
});
