// src/widgets/questionCard/ui/QuestionCardSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./questionCardSkeleton.module.scss";

export const QuestionCardSkeleton: React.FC = memo(() => {
  return (
    <div className={styles.skeletonCard}>
      {/* Заголовок */}
      <Skeleton height="24px" width="80%" className={styles.title} />

      {/* Описание - 2 строки */}
      <Skeleton height="16px" width="100%" className={styles.description} />
      <Skeleton height="16px" width="90%" className={styles.description} />

      {/* Теги */}
      <div className={styles.tags}>
        <Skeleton height="28px" width="60px" borderRadius="16px" />
        <Skeleton height="28px" width="80px" borderRadius="16px" />
        <Skeleton height="28px" width="70px" borderRadius="16px" />
      </div>

      {/* Футер с рейтингом и сложностью */}
      <div className={styles.footer}>
        <Skeleton height="20px" width="100px" />
        <Skeleton height="20px" width="80px" />
      </div>
    </div>
  );
});
