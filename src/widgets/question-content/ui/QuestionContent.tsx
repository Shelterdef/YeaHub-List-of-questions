// src/widgets/question-content/ui/QuestionContent.tsx
import { Question } from "@/entities/question/model/types";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionCode } from "./QuestionCode";
import { QuestionAnswer } from "./QuestionAnswer";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

// Создаем тот же тип, что используется в LocationState
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
  question: QuestionContentData; // Используем урезанный тип
}

export const QuestionContent: React.FC<QuestionContentProps> = ({
  question,
}) => {
  return (
    <section className={cl.answer}>
      <QuestionHeader
        title={question.title}
        description={question.description}
        imageSrc={question.imageSrc}
      />
      <QuestionCode code={question.code} />
      <QuestionAnswer
        shortAnswer={question.shortAnswer}
        longAnswer={question.longAnswer}
      />
    </section>
  );
};
