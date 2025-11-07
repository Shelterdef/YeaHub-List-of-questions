// src/widgets/QuestionSidebar/ui/QuestionSidebar.tsx
import { SkillBadge } from "@/shared/ui";
import cl from "./questionSidebar.module.scss";
import { LinkTG, QuestionRateComplexity, SideBar } from "@/shared/ui";
import { useKeywordSearch } from "@/features/search";
import { memo, useCallback, useMemo } from "react";

interface QuestionSidebarProps {
  rate: number;
  complexity: number;
  questionSkills: Array<{ id: number; title: string }>;
  keywords: string[];
}

export const QuestionSidebar: React.FC<QuestionSidebarProps> = memo(
  ({ rate, complexity, questionSkills, keywords }) => {
    const { handleKeywordSearch } = useKeywordSearch();

    const handleKeywordClick = useCallback(
      (keyword: string) => {
        handleKeywordSearch(keyword);
      },
      [handleKeywordSearch]
    );

    const questionInfoProps = useMemo(
      () => ({
        rate,
        complexity,
      }),
      [rate, complexity]
    );

    const skillsList = useMemo(
      () =>
        questionSkills.map((skill) => (
          <SkillBadge
            key={skill.id}
            skill={skill}
            isSelected={true}
            showImage={false}
            size="small"
          />
        )),
      [questionSkills]
    );

    const keywordsList = useMemo(
      () =>
        keywords.map((keyword, index) => (
          <button
            key={index}
            className={cl.keyword}
            onClick={() => handleKeywordClick(keyword)}
            aria-label={`Поиск по ключевому слову: ${keyword}`}
          >
            #{keyword}
          </button>
        )),
      [keywords, handleKeywordClick]
    );

    return (
      <SideBar className={cl.maxSideBarHeight}>
        <div>
          <p className={cl.sections}>Уровень</p>
          <QuestionRateComplexity {...questionInfoProps} />

          <p className={cl.sections}>Навыки</p>
          <div className={cl.skillsList}>{skillsList}</div>

          <p className={cl.sections}>Ключевые слова</p>
          <div className={cl.keywordsList}>{keywordsList}</div>

          <LinkTG />
        </div>
      </SideBar>
    );
  }
);
