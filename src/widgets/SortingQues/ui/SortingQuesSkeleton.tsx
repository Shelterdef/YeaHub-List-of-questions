// src/widgets/SortingQues/ui/SortingQuesSkeleton.tsx
import { memo } from "react";
import { SideBar } from "@/shared/ui/SideBar/SideBar";
import { SearchSkeleton } from "@/shared/ui/Search/SearchSkeleton";
import { SpecializationSkeleton } from "@/shared/ui/Specialization/SpecializationSkeleton";
import { SkillsSkeleton } from "@/shared/ui/Skills/SkillsSkeleton";
import { ComplexitySkeleton } from "@/shared/ui/Complexity/ComplexitySkeleton";
import { RatingSkeleton } from "@/shared/ui/Rating/RatingSkeleton";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import cl from "./sortingQues.module.scss";

export const SortingQuesSkeleton: React.FC = memo(() => {
  return (
    <SideBar>
      <SearchSkeleton />

      <article>
        <Skeleton height="14px" width="120px" className={cl.sections} />
        <SpecializationSkeleton />
      </article>

      <div>
        <Skeleton height="14px" width="140px" className={cl.sections} />
        <SkillsSkeleton />
      </div>

      <div>
        <Skeleton height="14px" width="160px" className={cl.sections} />
        <ComplexitySkeleton />
      </div>

      <div className={cl.sections}>
        <Skeleton height="14px" width="140px" />
        <RatingSkeleton />
      </div>

      <Skeleton height="40px" width="100%" borderRadius="8px" />
    </SideBar>
  );
});
