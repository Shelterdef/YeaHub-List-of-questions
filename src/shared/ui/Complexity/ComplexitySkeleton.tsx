// src/features/complexity/ui/ComplexitySkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./complexitySkeleton.module.scss";

export const ComplexitySkeleton: React.FC = memo(() => {
  return (
    <div className={styles.complexitySkeleton}>
      <Skeleton height="14px" width="160px" className={styles.label} />
      <div className={styles.levels}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            height="42px"
            width="60px"
            borderRadius="12px"
          />
        ))}
      </div>
    </div>
  );
});
