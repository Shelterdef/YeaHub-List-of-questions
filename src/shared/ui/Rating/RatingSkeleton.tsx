// src/features/rating/ui/RatingSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./ratingSkeleton.module.scss";

export const RatingSkeleton: React.FC = memo(() => {
  return (
    <div className={styles.ratingSkeleton}>
      <Skeleton height="14px" width="140px" className={styles.label} />
      <div className={styles.ratings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height="42px"
            width="50px"
            borderRadius="12px"
          />
        ))}
      </div>
    </div>
  );
});
