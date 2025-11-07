// src/features/question-error-handling/ui/LoadingState.tsx
import { LinkToBack } from "@/shared/ui";
import { QuestionContentSkeleton } from "@/widgets/question-content";
import { QuestionSidebarSkeleton } from "@/widgets/QuestionSidebar/";
import cl from "@/pages/question-page/ui/questionPage.module.scss";
import { memo } from "react";

export const LoadingState: React.FC = memo(() => {
  return (
    <main className={`container_1 ${cl.flex}`}>
      <div className={cl.contentColumn}>
        <LinkToBack />
        <QuestionContentSkeleton />
      </div>
      <QuestionSidebarSkeleton />
    </main>
  );
});
