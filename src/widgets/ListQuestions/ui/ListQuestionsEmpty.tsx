// src/widgets/listQuestions/ui/ListQuestionsEmpty.tsx
import { Container } from "@/shared/ui/";
import cl from "./listQuestions.module.scss";
import { memo } from "react";

interface ListQuestionsEmptyProps {
  onResetFilters: () => void;
}

export const ListQuestionsEmpty: React.FC<ListQuestionsEmptyProps> = memo(
  ({ onResetFilters }) => (
    <Container maxHeight>
      <h2 className={cl.header}>Вопросы не найдены</h2>
      <hr className={cl.line} />
      <div>Вопросы не найдены. Попробуйте изменить фильтры.</div>
      <button className={cl.PurpleBtn} onClick={onResetFilters}>
        Сбросить фильтр
      </button>
    </Container>
  )
);

ListQuestionsEmpty.displayName = "ListQuestionsEmpty";
