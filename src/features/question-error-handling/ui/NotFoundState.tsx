// src\features\question-error-handling\ui\NotFoundState.tsx
import { Link } from "react-router-dom";
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

interface NotFoundStateProps {
  id?: string;
}

export const NotFoundState: React.FC<NotFoundStateProps> = ({ id }) => {
  return (
    <main className={`container_1 ${cl.flex}`}>
      <Link to="/">Назад</Link>
      <Container>
        <h1>Вопрос не найден</h1>
        <p>Вопрос #{id} не существует или был удален</p>
        <Link to="/">Вернуться к списку вопросов</Link>
      </Container>
    </main>
  );
};
