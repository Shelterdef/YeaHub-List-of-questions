// src/widgets/question-content/ui/QuestionContent.tsx
import { Question } from "@/entities/question/model/types";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionCode } from "./QuestionCode";
import { QuestionAnswer } from "./QuestionAnswer";
import cl from "./questionContent.module.scss"; // ← Локальные стили
import { memo, useMemo } from "react";

export type QuestionContentData = Omit<
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

interface QuestionContentProps {
  question: QuestionContentData;
}

export const QuestionContent: React.FC<QuestionContentProps> = memo(
  ({ question }) => {
    // Мемоизируем пропсы для дочерних компонентов
    const questionHeaderProps = useMemo(
      () => ({
        title: question.title,
        description: question.description,
        imageSrc: question.imageSrc,
      }),
      [question.title, question.description, question.imageSrc]
    );

    const questionCodeProps = useMemo(
      () => ({
        code: question.code,
      }),
      [question.code]
    );

    const questionAnswerProps = useMemo(
      () => ({
        shortAnswer: question.shortAnswer,
        longAnswer: question.longAnswer,
      }),
      [question.shortAnswer, question.longAnswer]
    );

    return (
      <section className={cl.answer}>
        <QuestionHeader {...questionHeaderProps} />
        <QuestionCode {...questionCodeProps} />
        <QuestionAnswer {...questionAnswerProps} />
      </section>
    );
  }
);

QuestionContent.displayName = "QuestionContent";
