import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Footer from "@/components/Footer";

import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
