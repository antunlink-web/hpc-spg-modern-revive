import { createFileRoute, redirect } from "@tanstack/react-router";

/** Removed section — redirected to the homepage offer hub. */
export const Route = createFileRoute("/digitalne-usluge")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: () => null,
});
