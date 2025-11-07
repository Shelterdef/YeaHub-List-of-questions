// src/widgets/question-content/ui/QuestionHeaderSkeleton.tsx
import { Container } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/";
import cl from "../questionContent.module.scss";
import { memo } from "react";

export const QuestionHeaderSkeleton: React.FC = memo(() => {
  return (
    <Container>
      <div>
        {/* Изображение (если есть) */}
        <Skeleton
          height="200px"
          width="100%"
          borderRadius="8px"
          className={cl.image}
        />

        <div>
          {/* Заголовок */}
          <Skeleton height="32px" width="80%" className={cl.sectionTitle} />
          {/* Описание */}
          <Skeleton height="20px" width="100%" style={{ marginTop: "12px" }} />
          <Skeleton height="20px" width="90%" style={{ marginTop: "8px" }} />
          <Skeleton height="20px" width="70%" style={{ marginTop: "8px" }} />
        </div>
      </div>
    </Container>
  );
});
