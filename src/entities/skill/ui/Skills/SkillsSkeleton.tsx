// src/shared/ui/Skills/SkillsSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./skillsSkeleton.module.scss";

export const SkillsSkeleton: React.FC = memo(() => {
  return (
    <div className={styles.skillsSkeleton}>
      <Skeleton height="14px" width="140px" className={styles.label} />
      <div className={styles.skills}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height="42px"
            width="70px"
            borderRadius="12px"
          />
        ))}
      </div>
      <Skeleton height="14px" width="100px" className={styles.toggle} />
    </div>
  );
});
