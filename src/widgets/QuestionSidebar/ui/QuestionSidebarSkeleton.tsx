// src/widgets/QuestionSidebar/ui/QuestionSidebarSkeleton.tsx
import { memo } from "react";
import { SideBar } from "@/shared/ui/SideBar/SideBar";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "./questionSidebar.module.scss";

export const QuestionSidebarSkeleton: React.FC = memo(() => {
  return (
    <SideBar className={cl.maxSideBarHeight}>
      <Skeleton height="14px" width="80px" className={cl.sections} />
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Skeleton height="40px" width="100px" borderRadius="8px" />
        <Skeleton height="40px" width="120px" borderRadius="8px" />
      </div>

      <Skeleton height="14px" width="60px" className={cl.sections} />
      <div className={cl.skillsList}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            height="42px"
            width="70px"
            borderRadius="12px"
          />
        ))}
      </div>

      <Skeleton height="14px" width="120px" className={cl.sections} />
      <div className={cl.keywordsList}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} height="20px" width="60px" borderRadius="4px" />
        ))}
      </div>

      <div className={cl.linkContainer}>
        <Skeleton height="40px" width="100%" borderRadius="8px" />
      </div>
    </SideBar>
  );
});
