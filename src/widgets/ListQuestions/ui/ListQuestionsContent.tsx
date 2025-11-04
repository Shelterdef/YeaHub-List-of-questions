// src/widgets/listQuestions/ui/ListQuestionsContent.tsx
import { QuestionCard } from "@/widgets/questionCard/ui/QuestionCard";
import { Pagination } from "@/features/pagination";
import { Container } from "@/shared/ui/";
import cl from "./listQuestions.module.scss";
import { Question } from "@/entities/question/model/types";

interface ListQuestionsContentProps {
  questions: Question[];
  totalPages: number;
  headerText: string;
}

export const ListQuestionsContent: React.FC<ListQuestionsContentProps> = ({
  questions,
  totalPages,
  headerText,
}) => (
  <Container maxHeight={questions.length === 0} className={cl.container}>
    <div className={cl.content}>
      <h2 className={cl.header}>{headerText}</h2>
      <hr className={cl.line} />

      <div className={cl.list}>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>

    {totalPages > 1 && (
      <div className={cl.paginationWrapper}>
        <Pagination totalPages={totalPages} />
      </div>
    )}
  </Container>
);
