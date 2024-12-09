import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import { MainLayout } from "./MainLayout";
import ListaProductos from "../Pages/ListaProductos";
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      // Add more routes here
      { path: "/ListaProductos", element: <ListaProductos /> },
    ],
  },
]);
