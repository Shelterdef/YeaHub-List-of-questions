// src/widgets/listQuestions/ui/ListQuestionsLoading.tsx
import { Container } from "@/shared/ui/";
import cl from "./listQuestions.module.scss";
import { memo } from "react";

export const ListQuestionsLoading: React.FC = memo(() => (
  <Container maxHeight>
    <h2 className={cl.header}>Загрузка вопросов...</h2>
    <hr className={cl.line} />
    <div>Пожалуйста, подождите</div>
  </Container>
));

ListQuestionsLoading.displayName = "ListQuestionsLoading";
