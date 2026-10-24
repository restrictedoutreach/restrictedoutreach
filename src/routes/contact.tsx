import { createFileRoute } from "@tanstack/react-router";
import { commercialHead } from "@/lib/commercial";
import Contact from "@/components/commercial/Contact";
export const Route = createFileRoute("/contact")({
  head: () =>
    commercialHead(
      "Contacto",
      "Cuéntanos tu reto de estrategia IA o desarrollo.",
      "/contact",
    ),
  component: Contact,
});
