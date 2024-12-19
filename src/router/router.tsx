import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    lazy: async () => {
      let { MainLayout } = await import("./MainLayout");
      return { Component: MainLayout };
    },
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
        path: "/miperfil",
        lazy: async () => {
          let { Profile } = await import("../Pages/user/Profile");
          return { Component: Profile };
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
