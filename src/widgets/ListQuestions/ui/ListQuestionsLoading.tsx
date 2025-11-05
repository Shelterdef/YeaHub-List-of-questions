// src/widgets/listQuestions/ui/ListQuestionsLoading.tsx
import { Container } from "@/shared/ui/";
import { QuestionCardSkeleton } from "@/widgets/questionCard/ui/QuestionCardSkeleton";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "./listQuestions.module.scss";
import { memo } from "react";

export const ListQuestionsLoading: React.FC = memo(() => {
  // Создаем 6 скелетонов для загрузки
  const skeletonItems = Array.from({ length: 6 }, (_, index) => (
    <QuestionCardSkeleton key={index} />
  ));

  return (
    <Container maxHeight className={cl.container}>
      <div className={cl.content}>
        {/* Скелетон для заголовка */}
        <Skeleton height="32px" width="200px" className={cl.header} />

        {/* Линия */}
        <div className={cl.line}></div>

        {/* Список скелетонов карточек */}
        <div className={cl.list}>{skeletonItems}</div>
      </div>

      {/* Скелетон для пагинации */}
      <div className={cl.paginationWrapper}>
        <Skeleton height="40px" width="300px" />
      </div>
    </Container>
  );
});
