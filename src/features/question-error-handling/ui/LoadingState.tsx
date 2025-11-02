// src\features\question-error-handling\ui\LoadingState.tsx
import { Link } from "react-router-dom";
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

export const LoadingState: React.FC = () => {
  return (
    <>
      <Link to="/">Назад</Link>
      <main className={`container_1 ${cl.flex}`}>
        <Container>
          <h1>Загрузка вопроса...</h1>
          <p>Пожалуйста, подождите</p>
        </Container>
      </main>
    </>
  );
};
