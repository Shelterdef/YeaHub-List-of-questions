// src/widgets/question-content/ui/QuestionContentSkeleton.tsx
import { LinkToBackSkeleton } from "@/shared/ui/LinkToBack/LinkToBackSkeleton";
import { QuestionHeaderSkeleton } from "./QuestionHeaderSkeleton";
import { QuestionCodeSkeleton } from "./QuestionCodeSkeleton";
import { QuestionAnswerSkeleton } from "./QuestionAnswerSkeleton";
import cl from "../questionContent.module.scss";
import { memo } from "react";

export const QuestionContentSkeleton: React.FC = memo(() => {
  return (
    <section className={cl.answer}>
      <LinkToBackSkeleton />
      <QuestionHeaderSkeleton />
      <QuestionCodeSkeleton />
      <QuestionAnswerSkeleton />
    </section>
  );
});
