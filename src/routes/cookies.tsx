import { commercialHead } from "@/lib/commercial";
import { createFileRoute } from "@tanstack/react-router";
import CookiesPolicy from "@/pages/CookiesPolicy";

export const Route = createFileRoute("/cookies")({
  head: () =>
    commercialHead(
      "Política de cookies",
      "Información sobre cookies y preferencias de navegación.",
      "/cookies",
    ),
  component: CookiesPolicy,
});
