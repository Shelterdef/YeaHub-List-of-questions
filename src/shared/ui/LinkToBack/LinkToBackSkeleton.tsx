// src/shared/ui/LinkToBack/LinkToBackSkeleton.tsx
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "./linkToBack.module.scss";
import { memo } from "react";

export const LinkToBackSkeleton: React.FC = memo(() => {
  return (
    <div className={cl.aligning}>
      <Skeleton height="20px" width="20px" borderRadius="4px" />
      <Skeleton height="20px" width="60px" borderRadius="4px" />
    </div>
  );
});
