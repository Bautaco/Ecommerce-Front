import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        lazy: async () => {
          let { Home } = await import("../Pages/Home");
          return { Component: Home };
        },
      },
      {
        path: "/login",
        lazy: async () => {
          let { Login } = await import("../Pages/user/Login");
          return { Component: Login };
        },
      },
      {
        path: "/sigin",
        lazy: async () => {
          let { Sigin } = await import("../Pages/user/Sigin");
          return { Component: Sigin };
        },
      },
      {
        path: "/ListaProductos",
        lazy: async () => {
          let { ListaProductos } = await import("../Pages/ListaProductos");
          return { Component: ListaProductos };
        },
      },
    ],
  },
]);
