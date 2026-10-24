import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "es" && params.lang !== "ca") throw notFound();
  },
  component: Outlet,
});