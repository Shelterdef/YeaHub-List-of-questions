// src/widgets/listQuestions/ui/ListQuestions.tsx
import { useListQuestions } from "../lib/useListQuestions";
import { ListQuestionsLoading } from "./ListQuestionsLoading";
import { ListQuestionsError } from "./ListQuestionsError";
import { ListQuestionsEmpty } from "./ListQuestionsEmpty";
import { ListQuestionsContent } from "./ListQuestionsContent";
import { memo, useMemo } from "react";

export const ListQuestions: React.FC = memo(() => {
  const {
    response,
    isLoading,
    error,
    selectedSpecialization,
    handleResetFilters,
  } = useListQuestions();

  // Мемоизируем вычисления
  const questions = useMemo(() => response?.data || [], [response?.data]);
  const totalPages = useMemo(
    () => Math.ceil((response?.total || 0) / 10),
    [response?.total]
  );

  const headerText = useMemo(
    () =>
      selectedSpecialization
        ? `Вопросы по ${selectedSpecialization.title}`
        : `Вопросы`,
    [selectedSpecialization]
  );

  // Мемоизируем колбэк для Empty состояния
  const handleResetFiltersMemoized = useMemo(
    () => handleResetFilters,
    [handleResetFilters]
  );

  // Состояние загрузки
  if (isLoading) {
    return <ListQuestionsLoading />;
  }

  // Ошибка загрузки
  if (error) {
    return <ListQuestionsError />;
  }

  // Пустой список
  if (questions.length === 0) {
    return <ListQuestionsEmpty onResetFilters={handleResetFiltersMemoized} />;
  }

  // Успешная загрузка
  return (
    <ListQuestionsContent
      questions={questions}
      totalPages={totalPages}
      headerText={headerText}
    />
  );
});

ListQuestions.displayName = "ListQuestions";
