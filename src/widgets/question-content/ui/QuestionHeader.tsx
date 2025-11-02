// src\widgets\question-content\ui\QuestionHeader.tsx
import { Container } from "@/shared/ui";
import cl from "@/pages/question-page/ui/questionPage.module.scss";

interface QuestionHeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <Container>
      <div>
        {imageSrc && <img src={imageSrc} alt={title} className={cl.image} />}
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};
