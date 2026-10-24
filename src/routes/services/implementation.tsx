import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/services/implementation")({
  beforeLoad: () => {
    throw redirect({ to: "/strategy", statusCode: 301 });
  },
});
