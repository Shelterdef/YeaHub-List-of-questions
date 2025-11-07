// src/shared/ui/Specialization/SpecializationSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./specializationSkeleton.module.scss";

export const SpecializationsSkeleton: React.FC = memo(() => {
  return (
    <div className={styles.specializationSkeleton}>
      <Skeleton height="14px" width="120px" className={styles.label} />
      <div className={styles.tags}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height="42px"
            width="80px"
            borderRadius="12px"
          />
        ))}
      </div>
    </div>
  );
});
