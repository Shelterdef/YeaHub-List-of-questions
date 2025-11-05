// src/shared/ui/Search/SearchSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./SearchSkeleton.module.scss";

export const SearchSkeleton: React.FC = memo(() => {
  return (
    <div className={styles.searchSkeleton}>
      <Skeleton height="20px" width="20px" borderRadius="4px" />
      <Skeleton height="20px" width="100%" borderRadius="8px" />
    </div>
  );
});
