import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <div className="mx-auto max-w-[800px] p-6">
      <Header />

      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
