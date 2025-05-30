import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <MaxWidthWrapper maxWidth="800px">
      <Header />

      <Outlet />
      <TanStackRouterDevtools />
    </MaxWidthWrapper>
  ),
});
