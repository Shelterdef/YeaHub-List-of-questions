// src/shared/ui/Skeleton/Skeleton.tsx
import { memo } from "react";
import styles from "./skeleton.module.scss"; // ← модуль!

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = memo(
  ({
    width = "100%",
    height = "20px",
    borderRadius = "4px",
    className = "",
  }) => {
    return (
      <div
        className={`${styles.skeleton} ${className}`} // ← используем модуль
        style={{
          width,
          height,
          borderRadius,
        }}
      />
    );
  }
);
