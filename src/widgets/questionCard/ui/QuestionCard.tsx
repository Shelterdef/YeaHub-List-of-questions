// src/entities/questions/ui/QuestionCard.tsx
import { Link } from "react-router-dom";
import { Question } from "@/entities/question/model/types";
import { useState } from "react";
import cl from "./questionCard.module.scss";
import { QuestionInfo } from "@/shared/ui";

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={cl.question}>
      <div className={cl.card}>
        <button className={cl.headerButton} onClick={handleHeaderClick}>
          <div className={cl.headerContent}>
            <p className={cl.headerTitle}>{question.title}</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--color-purple-700)"
              className={`${cl.arrow} ${isOpen ? cl.arrowOpen : ""}`}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="rgba(85, 51, 255, 1)"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </button>

        {/* Контент аккордеона */}
        <div className={`${cl.content} ${isOpen ? cl.contentOpen : ""}`}>
          <QuestionInfo
            rate={question.rate}
            complexity={question.complexity}
          ></QuestionInfo>

          <div>
            <div
              className={cl.description}
              dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
            />
          </div>

          <div className={cl.linkBox}>
            <Link
              to={`/questions/${question.id}`}
              state={{ question }} // ← Добавьте эту строку
              className={cl.link}
            >
              Подробнее
            </Link>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#6a0bff"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};
