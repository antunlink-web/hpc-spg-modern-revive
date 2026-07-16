import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { routerBasePath } from "./lib/paths";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Reads from `import.meta.env.BASE_URL` — "/" for the normal Lovable
    // build, "/newsite" for the Apache subfolder build.
    basepath: routerBasePath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
