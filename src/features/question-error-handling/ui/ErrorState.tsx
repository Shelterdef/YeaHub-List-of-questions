// src\features\question-error-handling\ui\ErrorState.tsx
import { Link } from "react-router-dom";
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

interface ErrorStateProps {
  id?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ id }) => {
  return (
    <main className={`container_1 ${cl.flex} ${cl.margin}`}>
      <Link to="/">Назад</Link>
      <Container>
        <h1>Ошибка загрузки</h1>
        <p>Не удалось загрузить вопрос #{id}</p>
        <Link to="/">Вернуться к списку вопросов</Link>
      </Container>
    </main>
  );
};
