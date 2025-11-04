// src/app/App.tsx
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalLoader } from "@/shared/ui/";
import { Layout, HomePage, QuestionPage, NotFoundPage } from "./lazy-imports";
import "@/shared/assets/styles/normalize.scss";

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
