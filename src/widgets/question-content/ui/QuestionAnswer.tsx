// src/widgets/question-content/ui/QuestionAnswer.tsx
import { Container } from "@/shared/ui";
import cl from "./questionContent.module.scss"; // ← Локальные стили
import { memo, useMemo } from "react";

interface QuestionAnswerProps {
  shortAnswer: string;
  longAnswer: string;
}

export const QuestionAnswer: React.FC<QuestionAnswerProps> = memo(
  ({ shortAnswer, longAnswer }) => {
    // Мемоизируем объекты для dangerouslySetInnerHTML
    const shortAnswerHtml = useMemo(
      () => ({ __html: shortAnswer }),
      [shortAnswer]
    );

    const longAnswerHtml = useMemo(
      () => ({ __html: longAnswer }),
      [longAnswer]
    );

    return (
      <>
        <Container>
          <article>
            <h2 className={cl.sectionTitle}>Краткий ответ</h2>
            <div
              className={cl.shortAnswer}
              dangerouslySetInnerHTML={shortAnswerHtml}
            />
          </article>
        </Container>

        <Container>
          <h2 className={cl.sectionTitle}>Подробный ответ</h2>
          <div
            className={cl.longAnswer}
            dangerouslySetInnerHTML={longAnswerHtml}
          />
        </Container>
      </>
    );
  }
);
