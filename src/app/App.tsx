// src/app/App.tsx
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalLoader } from "@/shared/ui/";
import "./styles/normalize.scss";

// Lazy imports с явным указанием named exports
const Layout = lazy(() =>
  import("@/widgets/layout").then((module) => ({ default: module.Layout }))
);
const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({ default: module.HomePage }))
);
const QuestionPage = lazy(() =>
  import("@/pages/question-page").then((module) => ({
    default: module.QuestionPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
);

function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
