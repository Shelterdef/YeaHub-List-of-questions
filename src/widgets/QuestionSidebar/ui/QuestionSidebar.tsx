// src\widgets\QuestionSidebar\ui\QuestionSidebar.tsx
import cl from "./questionSidebar.module.scss";
import { Link } from "react-router-dom";
import { LinkTG, QuestionInfo, SideBar } from "@/shared/ui";

interface QuestionSidebarProps {
  rate: number;
  complexity: number;
  questionSkills: Array<{ id: number; title: string }>;
  keywords: string[];
}

export const QuestionSidebar: React.FC<QuestionSidebarProps> = ({
  rate,
  complexity,
  questionSkills,
  keywords,
}) => {
  return (
    <SideBar className={cl.maxSideBarHeight}>
      <div>
        <p className={cl.sections}>Уровень</p>
        <QuestionInfo rate={rate} complexity={complexity} />

        <p className={cl.sections}>Навыки</p>
        <div className={cl.skillsList}>
          {questionSkills.map((skill) => (
            <div
              key={skill.id}
              className={`${cl.skillItem} ${cl.skillSelected}`}
            >
              {skill.title}
            </div>
          ))}
        </div>

        <p className={cl.sections}>Ключевые слова</p>
        <div className={cl.keywordsList}>
          {keywords.map((keyword, index) => (
            <Link to="/" key={index} className={cl.keyword}>
              #{keyword}
            </Link>
          ))}
        </div>

        <LinkTG></LinkTG>
      </div>
    </SideBar>
  );
};
