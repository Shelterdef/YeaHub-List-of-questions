// src\pages\home\ui\HomePage.tsx
import { ListQuestions, SortingQues } from "@/widgets";
import cl from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <main className={`container_1 ${cl.flex}`}>
      <ListQuestions />
      <SortingQues />
    </main>
  );
};
