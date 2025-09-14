import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import PageDetails from "./pages/PageDetails";
import PageTasks from "./pages/PageTasks";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: <PageTasks />,
  },
  {
    path: "/datail/:id",
    element: <PageDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
