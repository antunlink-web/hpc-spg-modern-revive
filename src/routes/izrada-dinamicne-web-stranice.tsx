import { createFileRoute, redirect } from "@tanstack/react-router";

/** Removed page — redirected to the offer page. */
export const Route = createFileRoute("/izrada-dinamicne-web-stranice")({
  beforeLoad: () => {
    throw redirect({ to: "/ponuda", replace: true });
  },
  component: () => null,
});
