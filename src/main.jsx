import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./pages/404";
import HomePage from "./pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
