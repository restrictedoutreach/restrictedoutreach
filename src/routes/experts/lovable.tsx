import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/experts/lovable")({
  beforeLoad: () => {
    throw redirect({ to: "/services/development", statusCode: 301 });
  },
});
