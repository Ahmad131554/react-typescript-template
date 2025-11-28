// src/routes/routes.tsx
import type { RouteObject } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../features/home/pages/index";
import NotFound from "../shared/pages/NotFound";

// This is your single source of truth for routes
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    // errorElement (optional but recommended)
    errorElement: <NotFound />, // you can create a dedicated ErrorPage too
    children: [
      {
        index: true, // "/" as default child
        element: <HomePage />,
      },

      // add more children here: dashboard, profile, etc.
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
