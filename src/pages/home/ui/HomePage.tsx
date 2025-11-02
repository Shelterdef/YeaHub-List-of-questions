// src\pages\home\ui\HomePage.tsx
import { PanelQuestions, SortingQues } from "@/widgets";
import cl from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <main className={`container_1 ${cl.flex}`}>
      <PanelQuestions />
      <SortingQues />
    </main>
  );
};
