// src/app/App.tsx
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/widgets/layout";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { QuestionPage } from "@/pages/question-page";
import "./styles/normalize.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
