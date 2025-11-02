// src/widgets/questionPanel/ui/PanelQuestions.tsx
import { useGetPublicQuestionsQuery } from "@/features/questions/";
import { useQuestionsFilter } from "@/features/questions/lib/useQuestionsFilter";
import { QuestionCard } from "@/widgets/questionCard/ui/QuestionCard";
import { Pagination } from "@/features/pagination";
import { useSelector, useDispatch } from "react-redux"; // ← добавил useDispatch
import { RootState } from "@/app/store";
import { useGetSpecializationsQuery } from "@/features/specialization/api/specialization-api";
import { usePagination } from "@/features/pagination/lib/usePagination";
import { useEffect } from "react";
import cl from "./panelQuestions.module.scss";
import { Container } from "@/shared/ui/";

export const PanelQuestions: React.FC = () => {
  const dispatch = useDispatch(); // ← добавил диспетчер
  const filter = useQuestionsFilter();
  const {
    data: response,
    isLoading,
    error,
    refetch,
  } = useGetPublicQuestionsQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  const selectedSpecializationId = useSelector(
    (state: RootState) => state.specialization.selectedSpecialization
  );

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const { data: specializationsResponse } = useGetSpecializationsQuery();
  const { resetPagination } = usePagination();

  useEffect(() => {
    resetPagination();
  }, [selectedSpecializationId, resetPagination]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const selectedSpecialization = specializationsResponse?.data?.find(
    (spec) => spec.id === selectedSpecializationId
  );

  // Функция сброса всех фильтров
  const handleResetFilters = () => {
    dispatch({ type: "search/setSearchQuery", payload: "" });
    dispatch({ type: "skills/setSkills", payload: [] });
    dispatch({ type: "complexity/setComplexities", payload: [] });
    dispatch({ type: "rating/setRatings", payload: [] });
    dispatch({ type: "specialization/setSpecialization", payload: null });
    dispatch({ type: "pagination/resetPagination" });
  };

  if (isLoading) {
    return (
      <Container maxHeight>
        <h2 className={cl.header}>Загрузка вопросов...</h2>
        <hr className={cl.line} />
        <div>Пожалуйста, подождите</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxHeight>
        <h2 className={cl.header}>Ошибка загрузки</h2>
        <hr className={cl.line} />
        <div>Не удалось загрузить вопросы. Попробуйте позже.</div>
      </Container>
    );
  }

  const questions = response?.data || [];
  const totalItems = response?.total || 0;
  const totalPages = Math.ceil(totalItems / 10);

  const headerText = selectedSpecialization
    ? `Вопросы по ${selectedSpecialization.title}`
    : `Вопросы`;

  return (
    <Container maxHeight={questions.length === 0}>
      <h2 className={cl.header}>{headerText}</h2>
      <hr className={cl.line} />

      {questions.length === 0 ? (
        <>
          <div>Вопросы не найдены. Попробуйте изменить фильтры.</div>
          <button className={cl.PurpleBtn} onClick={handleResetFilters}>
            Сбросить фильтр
          </button>
        </>
      ) : (
        <>
          <div className={cl.list}>
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </>
      )}
    </Container>
  );
};
