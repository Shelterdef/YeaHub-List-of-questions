// src/widgets/SortingQues/ui/SortingQues.tsx
import { Complexity } from "@/features/complexity";
import { Rating } from "@/shared/ui";
import { Specialization } from "@/shared/ui";
import { Skills } from "@/shared/ui";
import { SideBar } from "@/shared/ui/SideBar/SideBar";
import cl from "./sortingQues.module.scss";
import { LinkTG, Search } from "@/shared/ui";
import { memo, useMemo } from "react";
import { useGetSpecializationsQuery } from "@/features/specialization/api";
import { SortingQuesSkeleton } from "./SortingQuesSkeleton";

export const SortingQues: React.FC = memo(() => {
  const { isLoading: isSpecializationsLoading } = useGetSpecializationsQuery();

  const searchSection = useMemo(() => <Search />, []);

  const specializationSection = useMemo(
    () => (
      <article>
        <p className={cl.sections}>Специализация</p>
        <Specialization />
      </article>
    ),
    []
  );

  const skillsSection = useMemo(
    () => (
      <div>
        <p className={cl.sections}>Выберите навыки</p>
        <Skills />
      </div>
    ),
    []
  );

  const complexitySection = useMemo(
    () => (
      <div>
        <p className={cl.sections}>Сложность вопросов</p>
        <Complexity />
      </div>
    ),
    []
  );

  const ratingSection = useMemo(
    () => (
      <div className={cl.sections}>
        <p>Рейтинг вопросов</p>
        <Rating />
      </div>
    ),
    []
  );

  const linkSection = useMemo(() => <LinkTG />, []);

  if (isSpecializationsLoading) {
    return <SortingQuesSkeleton />;
  }

  return (
    <SideBar>
      {searchSection}
      {specializationSection}
      {skillsSection}
      {complexitySection}
      {ratingSection}
      {linkSection}
    </SideBar>
  );
});
