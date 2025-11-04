// src/shared/ui/SkillBadge/SkillBadge.tsx
import cl from "./skillBadge.module.scss";

interface SkillBadgeProps {
  skill: { id: number; title: string; imageSrc?: string };
  isSelected?: boolean;
  onClick?: (skillId: number) => void;
  showImage?: boolean;
  size?: "small" | "medium" | "large";
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  isSelected = false,
  onClick,
  showImage = true,
  size = "medium",
}) => {
  const handleClick = () => {
    onClick?.(skill.id);
  };

  return (
    <div
      className={`${cl.skillBadge} ${isSelected ? cl.selected : ""} ${
        cl[size]
      }`}
      onClick={handleClick}
    >
      {showImage && skill.imageSrc && (
        <img className={cl.image} src={skill.imageSrc} alt={skill.title} />
      )}
      <span className={cl.title}>{skill.title}</span>
    </div>
  );
};
