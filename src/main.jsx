import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login.jsx";
import RegisterPage from "./Pages/register.jsx";
import NotFoundPage from "./Pages/404.jsx";
import ProductsPages from "./Pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
