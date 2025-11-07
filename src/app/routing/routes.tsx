import { RouteObject } from "react-router-dom";
import { Layout, HomePage, QuestionPage, NotFoundPage } from "../lazy-imports";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/questions/:id",
        element: <QuestionPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
