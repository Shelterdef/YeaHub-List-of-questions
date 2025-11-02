// src\widgets\question-content\ui\QuestionAnswer.tsx
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

interface QuestionAnswerProps {
  shortAnswer: string;
  longAnswer: string;
}

export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
  shortAnswer,
  longAnswer,
}) => {
  return (
    <>
      <Container>
        <article>
          <h2 className={cl.sectionTitle}>Краткий ответ</h2>
          <div
            className={cl.shortAnswer}
            dangerouslySetInnerHTML={{ __html: shortAnswer }}
          />
        </article>
      </Container>

      <Container>
        <h2 className={cl.sectionTitle}>Подробный ответ</h2>
        <div
          className={cl.longAnswer}
          dangerouslySetInnerHTML={{ __html: longAnswer }}
        />
      </Container>
    </>
  );
};
