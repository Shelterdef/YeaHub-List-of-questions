// src/shared/ui/QuestionRateComplexity/QuestionRateComplexity.tsx
import cl from "./questionRateComplexity.module.scss"; // ← Правильный импорт
import { memo, useMemo } from "react";

interface QuestionRateComplexityProps {
  rate: number;
  complexity: number;
  className?: string;
}

export const QuestionRateComplexity: React.FC<QuestionRateComplexityProps> =
  memo(({ rate, complexity, className }) => {
    const containerClass = className
      ? `${cl.ratingDifficulty} ${className}`
      : cl.ratingDifficulty;

    // Мемоизируем вычисления для стабильности
    const rateInfo = useMemo(
      () => (
        <div className={cl.ratingBox}>
          <span>
            Рейтинг: <span className={cl.purpleBox}>{rate}</span>
          </span>
        </div>
      ),
      [rate]
    );

    const complexityInfo = useMemo(
      () => (
        <div className={cl.ratingBox}>
          <span>
            Сложность: <span className={cl.purpleBox}>{complexity}</span>
          </span>
        </div>
      ),
      [complexity]
    );

    return (
      <div className={containerClass}>
        {rateInfo}
        {complexityInfo}
      </div>
    );
  });
