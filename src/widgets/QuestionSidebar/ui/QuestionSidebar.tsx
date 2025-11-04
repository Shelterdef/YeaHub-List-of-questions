// src/widgets/QuestionSidebar/ui/QuestionSidebar.tsx
import { SkillBadge } from "@/shared/ui/SkillBadge/SkillBadge";
import cl from "./questionSidebar.module.scss";
import { LinkTG, QuestionInfo, SideBar } from "@/shared/ui";
import { useKeywordSearch } from "@/features/search/lib/useKeywordSearch";

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
  const { handleKeywordSearch } = useKeywordSearch();

  return (
    <SideBar className={cl.maxSideBarHeight}>
      <div>
        <p className={cl.sections}>Уровень</p>
        <QuestionInfo rate={rate} complexity={complexity} />

        <p className={cl.sections}>Навыки</p>
        <div className={cl.skillsList}>
          {questionSkills.map((skill) => (
            <SkillBadge
              key={skill.id}
              skill={skill}
              isSelected={true}
              showImage={false}
              size="small"
            />
          ))}
        </div>

        <p className={cl.sections}>Ключевые слова</p>
        <div className={cl.keywordsList}>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className={cl.keyword}
              onClick={() => handleKeywordSearch(keyword)}
            >
              #{keyword}
            </button>
          ))}
        </div>

        <LinkTG />
      </div>
    </SideBar>
  );
};
