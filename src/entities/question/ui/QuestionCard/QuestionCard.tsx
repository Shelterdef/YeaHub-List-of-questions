// src/widgets/questionCard/ui/QuestionCard.tsx
import { Link } from "react-router-dom";
import { Question } from "@/entities/question/model/types";
import { useState, useCallback, useMemo, memo } from "react";
import cl from "./questionCard.module.scss";
import { QuestionRateComplexity } from "@/shared/ui";
import { ArrowIcon } from "@/shared/assets/svg/ArrowIcon";
import { LinkArrowIcon } from "@/shared/assets/svg/LinkArrowIcon";

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = memo(
  ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Оптимизируем обработчики
    const handleHeaderClick = useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);

    // Мемоизируем объект для dangerouslySetInnerHTML
    const shortAnswerHtml = useMemo(
      () => ({ __html: question.shortAnswer }),
      [question.shortAnswer]
    );

    // Мемоизируем state для передачи в Link
    const linkState = useMemo(() => ({ question }), [question]);

    return (
      <article className={cl.question}>
        <div className={cl.card}>
          <button
            className={cl.headerButton}
            onClick={handleHeaderClick}
            aria-expanded={isOpen}
            aria-controls={`question-content-${question.id}`}
          >
            <div className={cl.headerContent}>
              <p className={cl.headerTitle}>{question.title}</p>
              <ArrowIcon
                className={`${cl.arrow} ${isOpen ? cl.arrowOpen : ""}`}
              />
            </div>
          </button>

          {/* Контент аккордеона */}
          <div
            id={`question-content-${question.id}`}
            className={`${cl.content} ${isOpen ? cl.contentOpen : ""}`}
          >
            <QuestionRateComplexity
              rate={question.rate}
              complexity={question.complexity}
            />

            <div>
              <div
                className={cl.description}
                dangerouslySetInnerHTML={shortAnswerHtml}
              />
            </div>

            <div className={cl.linkBox}>
              <Link
                to={`/questions/${question.id}`}
                state={linkState}
                className={cl.link}
              >
                Подробнее
              </Link>
              <LinkArrowIcon />
            </div>
          </div>
        </div>
      </article>
    );
  }
);

QuestionCard.displayName = "QuestionCard";
