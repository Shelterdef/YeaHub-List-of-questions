// src/widgets/listQuestions/ui/ListQuestionsError.tsx
import { Container } from "@/shared/ui/";
import cl from "./listQuestions.module.scss";
import { memo } from "react";

export const ListQuestionsError: React.FC = memo(() => (
  <Container maxHeight>
    <h2 className={cl.header}>Ошибка загрузки</h2>
    <hr className={cl.line} />
    <div>Не удалось загрузить вопросы. Попробуйте позже.</div>
  </Container>
));

ListQuestionsError.displayName = "ListQuestionsError";
