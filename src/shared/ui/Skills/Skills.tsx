// src\shared\ui\Skills\Skills.tsx
import { useGetSkillsQuery } from "@/features/skills";
import type { Skill } from "@/entities/skill";
import { useImageLoading } from "@/shared/lib/useImageLoading";
import { useSkills } from "@/features/skills/lib/useSkills";
import { useSpecialization } from "@/features/specialization/lib/useSpecialization";
import { useEffect, useState, useCallback } from "react";
import cl from "./skills.module.scss";

export const Skills: React.FC = () => {
  const { selectedSpecialization } = useSpecialization();
  const {
    data: response,
    isLoading,
    error,
  } = useGetSkillsQuery(selectedSpecialization || undefined);
  const { handleImageError, isImageFailed } = useImageLoading();
  const { handleSkillToggle, isSkillSelected, handleResetSkills } = useSkills();
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Сбрасываем выбранные навыки при смене специализации
  useEffect(() => {
    if (selectedSpecialization) {
      handleResetSkills();
    }
  }, [selectedSpecialization, handleResetSkills]); // Добавили handleResetSkills

  const toggleShowAllSkills = useCallback(() => {
    setShowAllSkills((prev) => !prev);
  }, []);

  if (!selectedSpecialization) {
    return <div>Выберите специализацию для отображения навыков</div>;
  }

  if (isLoading) return <div>Загрузка навыков...</div>;
  if (error) {
    console.error("Ошибка загрузки:", error);
    return <div>Ошибка загрузки навыков</div>;
  }

  const skills: Skill[] = response?.data || [];

  // Показываем только первые 5 или все навыки
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 5);

  // Проверяем, есть ли еще навыки для показа
  const hasMoreSkills = skills.length > 5;

  return (
    <>
      <div className={cl.listSkills}>
        {displayedSkills.map((skill) => (
          <div key={skill.id} className={cl.card}>
            <span
              className={`${cl.skill} ${
                isSkillSelected(skill.id) ? cl.skillSelected : ""
              }`}
              onClick={() => handleSkillToggle(skill.id)}
            >
              {skill.imageSrc && !isImageFailed(skill.id) && (
                <img
                  className={cl.img}
                  src={skill.imageSrc}
                  alt={skill.title}
                  onError={() => handleImageError(skill.id)}
                />
              )}
              {skill.title}
            </span>
          </div>
        ))}
      </div>

      {/* Ссылка "Посмотреть все"/"Скрыть" для навыков */}
      {hasMoreSkills && (
        <a onClick={toggleShowAllSkills} className={cl.toggleLink}>
          {showAllSkills ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </>
  );
};
