// src\features\complexity\ui\Сomplexity.tsx
import cl from "./complexity.module.scss";
import { COMPLEXITY_LEVELS } from "../model/constants";
import { useComplexity } from "../lib/useComplexity";

export const Complexity: React.FC = () => {
  const { toggleComplexity, isSelected } = useComplexity();

  return (
    <div className={cl.listDiff}>
      {COMPLEXITY_LEVELS.map((level) => (
        <span
          key={level.id}
          className={`${cl.complexity} ${
            isSelected(level.id) ? cl.complexitySelected : ""
          }`}
          onClick={() => toggleComplexity(level.id)}
        >
          {level.range}
        </span>
      ))}
    </div>
  );
};
