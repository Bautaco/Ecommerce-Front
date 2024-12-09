import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import { MainLayout } from "./MainLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      // Add more routes here
    ],
  },
]);
