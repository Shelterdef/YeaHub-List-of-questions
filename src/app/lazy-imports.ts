// src/app/lazy-imports.ts
import { lazy } from "react";

export const Layout = lazy(() =>
  import("@/widgets/layout").then((module) => ({ default: module.Layout }))
);

export const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({ default: module.HomePage }))
);

export const QuestionPage = lazy(() =>
  import("@/pages/question-page").then((module) => ({
    default: module.QuestionPage,
  }))
);

export const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
);
