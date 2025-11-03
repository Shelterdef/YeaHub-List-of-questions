// src/widgets/listQuestions/ui/ListQuestions.tsx
import { useListQuestions } from "../lib/useListQuestions";
import { ListQuestionsLoading } from "./ListQuestionsLoading";
import { ListQuestionsError } from "./ListQuestionsError";
import { ListQuestionsEmpty } from "./ListQuestionsEmpty";
import { ListQuestionsContent } from "./ListQuestionsContent";

export const ListQuestions: React.FC = () => {
  const {
    response,
    isLoading,
    error,
    selectedSpecialization,
    handleResetFilters,
  } = useListQuestions();

  // Состояние загрузки
  if (isLoading) {
    return <ListQuestionsLoading />;
  }

  // Ошибка загрузки
  if (error) {
    return <ListQuestionsError />;
  }

  const questions = response?.data || [];
  const totalItems = response?.total || 0;
  const totalPages = Math.ceil(totalItems / 10);

  const headerText = selectedSpecialization
    ? `Вопросы по ${selectedSpecialization.title}`
    : `Вопросы`;

  // Пустой список
  if (questions.length === 0) {
    return <ListQuestionsEmpty onResetFilters={handleResetFilters} />;
  }

  // Успешная загрузка
  return (
    <ListQuestionsContent
      questions={questions}
      totalPages={totalPages}
      headerText={headerText}
    />
  );
};
