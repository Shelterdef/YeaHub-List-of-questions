// src/pages/question-page/ui/QuestionPage.tsx
import { useParams, useLocation, Link } from "react-router-dom";
import { Question } from "@/entities/question/model/types";
import { useGetQuestionByIdQuery } from "@/features/questions/api/questions-api";
import { Container, LinkToBack } from "@/shared/ui";
import { QuestionContent } from "@/widgets/question-content";
import { LoadingState } from "@/features/question-error-handling";
import { ErrorState } from "@/features/question-error-handling";
import { NotFoundState } from "@/features/question-error-handling";
import { QuestionSidebar } from "@/widgets/QuestionSidebar";
import cl from "./questionPage.module.scss";

interface LocationState {
  question: Omit<
    Question,
    | "status"
    | "createdById"
    | "updatedById"
    | "questionSpecializations"
    | "createdAt"
    | "updatedAt"
    | "createdBy"
    | "updatedBy"
  >;
}

export const QuestionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as LocationState;

  const questionFromState = state?.question;
  const {
    data: questionFromApi,
    isLoading,
    error,
    isFetching,
  } = useGetQuestionByIdQuery(Number(id), {
    skip: !id || !!questionFromState,
  });

  const question = questionFromState || questionFromApi;

  // Состояние загрузки
  if ((!questionFromState && isLoading) || isFetching) {
    return <LoadingState />;
  }

  // Ошибка загрузки
  if (!questionFromState && error) {
    return <ErrorState id={id} />;
  }

  // Вопрос не найден
  if (!question) {
    return <NotFoundState id={id} />;
  }

  // Несоответствие ID
  if (id && question.id !== Number(id)) {
    return (
      <main className={`container_1 ${cl.flex}`}>
        <Link to="/">Назад</Link>
        <Container>
          <h1>Несоответствие ID</h1>
          <p>ID в URL не совпадает с ID вопроса</p>
          <Link to="/">Вернуться к списку вопросов</Link>
        </Container>
      </main>
    );
  }

  // Успешная загрузка
  // Минимальные изменения в return части
  return (
    <main className={`container_1 ${cl.flex}`}>
      <div className={cl.contentColumn}>
        <LinkToBack />
        <QuestionContent question={question} />
      </div>
      <QuestionSidebar
        rate={question.rate}
        complexity={question.complexity}
        questionSkills={question.questionSkills}
        keywords={question.keywords}
      />
    </main>
  );
};
