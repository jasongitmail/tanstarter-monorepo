import { createFileRoute } from "@tanstack/react-router";
import { response } from "super-sitemap/tanstack-start";

import { getRouter } from "../router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      /** Returns the generated public sitemap. */
      GET: ({ request }) =>
        response({
          origin: new URL(request.url).origin,
          router: getRouter,
          excludeRoutePatterns: [/^\/app(?:$|\/)/, /^\/login$/, /^\/signup$/],
        }),
    },
  },
});
