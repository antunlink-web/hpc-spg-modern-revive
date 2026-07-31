import { createFileRoute, redirect } from "@tanstack/react-router";

/** Removed gallery — redirected to the homepage. */
export const Route = createFileRoute("/galerija")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: () => null,
});
