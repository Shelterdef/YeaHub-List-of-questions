// src\widgets\SortingQues\ui\SortingQues.tsx
import { Complexity } from "@/features/complexity";
import { Rating } from "@/features/rating";
import { Specialization } from "@/features/specialization";
import { Skills } from "@/features/skills";

import { SideBar } from "@/shared/ui/SideBar/SideBar";
import cl from "./sortingQues.module.scss";
import { LinkTG, Search } from "@/shared/ui";

export const SortingQues: React.FC = () => {
  return (
    <SideBar>
      <Search />

      <article>
        <p className={cl.sections}>Специализация</p>
        <Specialization />
      </article>

      <div>
        <p className={cl.sections}>Выберите навыки</p>
        <Skills />
      </div>

      <div>
        <p className={cl.sections}>Сложность вопросов</p>
        <Complexity />
      </div>

      <div className={cl.sections}>
        <p>Рейтинг вопросов</p>
        <Rating />
      </div>

      <LinkTG></LinkTG>
    </SideBar>
  );
};
