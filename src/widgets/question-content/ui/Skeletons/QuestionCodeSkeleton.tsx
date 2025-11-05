// src/widgets/question-content/ui/QuestionCodeSkeleton.tsx
import { Container } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "../questionContent.module.scss";
import { memo } from "react";

export const QuestionCodeSkeleton: React.FC = memo(() => {
  return (
    <Container>
      <Skeleton
        height="200px"
        width="100%"
        borderRadius="8px"
        className={cl.codeBlock}
      />
    </Container>
  );
});
