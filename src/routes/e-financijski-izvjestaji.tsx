import { createFileRoute, redirect } from "@tanstack/react-router";

/** Removed digital-services page — redirected to the owner services on the homepage. */
export const Route = createFileRoute("/e-financijski-izvjestaji")({
  beforeLoad: () => {
    throw redirect({ to: "/korisnicki-podaci", replace: true });
  },
  component: () => null,
});
