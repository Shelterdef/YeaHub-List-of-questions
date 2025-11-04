// src/widgets/question-content/ui/QuestionCode.tsx
import { Container } from "@/shared/ui";
import cl from "./questionContent.module.scss"; // ← Локальные стили
import { memo } from "react";

interface QuestionCodeProps {
  code?: string;
}

export const QuestionCode: React.FC<QuestionCodeProps> = memo(({ code }) => {
  if (!code) return null;

  return (
    <Container>
      <pre className={cl.codeBlock}>
        <code>{code}</code>
      </pre>
    </Container>
  );
});

QuestionCode.displayName = "QuestionCode";
