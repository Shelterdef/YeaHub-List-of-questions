// src\widgets\question-content\ui\QuestionCode.tsx
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

interface QuestionCodeProps {
  code?: string;
}

export const QuestionCode: React.FC<QuestionCodeProps> = ({ code }) => {
  if (!code) return null;

  return (
    <Container>
      <pre className={cl.codeBlock}>
        <code>{code}</code>
      </pre>
    </Container>
  );
};
