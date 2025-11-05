// src/widgets/question-content/ui/QuestionAnswerSkeleton.tsx
import { Container } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "../questionContent.module.scss";
import { memo } from "react";

export const QuestionAnswerSkeleton: React.FC = memo(() => {
  return (
    <>
      {/* Краткий ответ */}
      <Container>
        <article>
          <Skeleton height="24px" width="140px" className={cl.sectionTitle} />
          <div className={cl.shortAnswer}>
            <Skeleton
              height="16px"
              width="100%"
              style={{ marginBottom: "8px" }}
            />
            <Skeleton
              height="16px"
              width="95%"
              style={{ marginBottom: "8px" }}
            />
            <Skeleton
              height="16px"
              width="90%"
              style={{ marginBottom: "8px" }}
            />
            <Skeleton height="16px" width="85%" />
          </div>
        </article>
      </Container>

      {/* Подробный ответ */}
      <Container>
        <Skeleton height="24px" width="160px" className={cl.sectionTitle} />
        <div className={cl.longAnswer}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              height="16px"
              width={index % 3 === 0 ? "100%" : index % 3 === 1 ? "95%" : "90%"}
              style={{ marginBottom: "8px" }}
            />
          ))}
        </div>
      </Container>
    </>
  );
});
