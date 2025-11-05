// src/shared/ui/SkillBadge/SkillBadge.tsx
import cl from "./skillBadge.module.scss";
import { memo, useCallback, useMemo } from "react";

interface SkillBadgeProps {
  skill: { id: number; title: string; imageSrc?: string };
  isSelected?: boolean;
  onClick?: (skillId: number) => void;
  showImage?: boolean;
  size?: "small" | "medium" | "large";
}

export const SkillBadge: React.FC<SkillBadgeProps> = memo(
  ({
    skill,
    isSelected = false,
    onClick,
    showImage = true,
    size = "medium",
  }) => {
    const handleClick = useCallback(() => {
      onClick?.(skill.id);
    }, [onClick, skill.id]);

    const badgeClass = useMemo(() => {
      const classes = [cl.skillBadge, cl[size]];
      if (isSelected) classes.push(cl.selected);
      return classes.join(" ");
    }, [isSelected, size]);

    return (
      <div
        className={badgeClass}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={`Навык: ${skill.title}${isSelected ? ", выбран" : ""}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {showImage && skill.imageSrc && (
          <img
            className={cl.image}
            src={skill.imageSrc}
            alt=""
            loading="lazy"
          />
        )}
        <span className={cl.title}>{skill.title}</span>
      </div>
    );
  }
);
