import { createFileRoute, redirect } from "@tanstack/react-router";

/** Removed request form — redirected to the general offer request. */
export const Route = createFileRoute("/zahtjev-za-izradu-stranica")({
  beforeLoad: () => {
    throw redirect({ to: "/zahtjev", replace: true });
  },
  component: () => null,
});
