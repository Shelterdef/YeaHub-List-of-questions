// src/widgets/listQuestions/ui/ListQuestionsLoading.tsx
import { Container } from "@/shared/ui/";
import cl from "./listQuestions.module.scss";

export const ListQuestionsLoading: React.FC = () => (
  <Container maxHeight>
    <h2 className={cl.header}>Загрузка вопросов...</h2>
    <hr className={cl.line} />
    <div>Пожалуйста, подождите</div>
  </Container>
);
