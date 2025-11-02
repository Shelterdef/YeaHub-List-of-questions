// src\shared\ui\QuestionInfo\ui\QuestionInfo.tsx
import cl from "./questionInfo.module.scss";

interface QuestionInfoProps {
  rate: number;
  complexity: number;
}

export const QuestionInfo: React.FC<QuestionInfoProps> = ({
  rate,
  complexity,
}) => {
  return (
    <div className={cl.ratingDifficulty}>
      <div className={cl.ratingBox}>
        <span>
          Рейтинг: <span className={cl.purpleBox}> {rate}</span>
        </span>
      </div>

      <div className={cl.ratingBox}>
        <span>
          Сложность: <span className={cl.purpleBox}>{complexity}</span>
        </span>
      </div>
    </div>
  );
};
