// src/widgets/question-content/ui/QuestionHeader.tsx
import { Container } from "@/shared/ui";
import cl from "./questionContent.module.scss";
import { memo } from "react";

interface QuestionHeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = memo(
  ({ title, description, imageSrc }) => {
    return (
      <Container>
        <div>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className={cl.image}
              loading="lazy" // ← Ленивая загрузка изображений
            />
          )}
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    );
  }
);
