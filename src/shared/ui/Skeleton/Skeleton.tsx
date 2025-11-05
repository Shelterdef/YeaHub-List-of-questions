// src/shared/ui/Skeleton/Skeleton.tsx
import { memo, CSSProperties } from "react"; // ← ДОБАВИЛИ CSSProperties
import styles from "./skeleton.module.scss";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = memo(
  ({
    width = "100%",
    height = "20px",
    borderRadius = "4px",
    className = "",
    style = {},
  }) => {
    return (
      <div
        className={`${styles.skeleton} ${className}`}
        style={{
          width,
          height,
          borderRadius,
          ...style,
        }}
      />
    );
  }
);
