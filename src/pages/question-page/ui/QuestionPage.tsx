// src/pages/question-page/ui/QuestionPage.tsx
import { useParams, useLocation, Link } from "react-router-dom";
import { Question } from "@/entities/question";
import { useGetQuestionByIdQuery } from "@/features/questions/api/questions-api";
import cl from "./questionPage.module.scss";
import { Container } from "@/shared/ui";
import { QuestionSidebar } from "@/widgets/QuestionSidebar";

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

  // Используем запрос только если данных нет в state и есть id
  const {
    data: questionFromApi,
    isLoading,
    error,
    isFetching,
  } = useGetQuestionByIdQuery(Number(id), {
    skip: !id || !!questionFromState, // Пропускаем если есть данные в state или нет id
  });

  const question = questionFromState || questionFromApi;

  // Состояние загрузки (только при запросе к API)
  if ((!questionFromState && isLoading) || isFetching) {
    return (
      <>
        <Link to="/">Назад</Link>
        <main className={`container_1 ${cl.flex}`}>
          <Container>
            <h1>Загрузка вопроса...</h1>
            <p>Пожалуйста, подождите</p>
          </Container>
        </main>
      </>
    );
  }

  // Ошибка загрузки из API
  if (!questionFromState && error) {
    return (
      <>
        <main className={`container_1 ${cl.flex} ${cl.margin}`}>
          <Link to="/">Назад</Link>
          <Container>
            <h1>Ошибка загрузки</h1>
            <p>Не удалось загрузить вопрос #{id}</p>
            <Link to="/">Вернуться к списку вопросов</Link>
          </Container>
        </main>
      </>
    );
  }

  // Вопрос не найден (ни в state, ни в API)
  if (!question) {
    return (
      <>
        <main className={`container_1 ${cl.flex}`}>
          <Link to="/">Назад</Link>
          <Container>
            <h1>Вопрос не найден</h1>
            <p>Вопрос #{id} не существует или был удален</p>
            <Link to="/">Вернуться к списку вопросов</Link>
          </Container>
        </main>
      </>
    );
  }

  // Проверяем, что ID из URL совпадает с ID вопроса (дополнительная валидация)
  if (id && question.id !== Number(id)) {
    return (
      <>
        <main className={`container_1 ${cl.flex}`}>
          <Link to="/">Назад</Link>
          <Container>
            <h1>Несоответствие ID</h1>
            <p>ID в URL не совпадает с ID вопроса</p>
            <Link to="/">Вернуться к списку вопросов</Link>
          </Container>
        </main>
      </>
    );
  }

  return (
    <>
      <main className={`container_1 ${cl.flex}`}>
        <Link to="/">Назад</Link>
        <section className={cl.answer}>
          <Container>
            <div>
              {question.imageSrc && (
                <img
                  src={question.imageSrc}
                  alt={question.title}
                  className={cl.image}
                />
              )}
              <div>
                <h1>{question.title}</h1>
                <p>{question.description}</p>
              </div>
            </div>
          </Container>

          {question.code && (
            <Container>
              <pre className={cl.codeBlock}>
                <code>{question.code}</code>
              </pre>
            </Container>
          )}

          <Container>
            <article>
              <h2 className={cl.sectionTitle}>Краткий ответ</h2>
              <div
                className={cl.shortAnswer}
                dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
              />
            </article>
          </Container>

          <Container>
            <h2 className={cl.sectionTitle}>Подробный ответ</h2>
            <div
              className={cl.longAnswer}
              dangerouslySetInnerHTML={{ __html: question.longAnswer }}
            />
          </Container>
        </section>

        <QuestionSidebar
          rate={question.rate}
          complexity={question.complexity}
          questionSkills={question.questionSkills}
          keywords={question.keywords}
        />
      </main>
    </>
  );
};
