// src\shared\ui\QuestionInfo\ui\QuestionInfo.tsx
import cl from "./LinkTG.module.scss";

export const LinkTG: React.FC = () => {
  return (
    <div className={cl.linkTG}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#6A0BFF"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14ZM11.4333 20.4167L11.6715 16.848L11.6713 16.8478L18.1632 10.9894C18.4481 10.7366 18.101 10.6132 17.7228 10.8426L9.71091 15.8972L6.25023 14.8171C5.50288 14.5882 5.49751 14.0747 6.41802 13.7055L19.9035 8.5055C20.5194 8.22587 21.1139 8.65343 20.8788 9.59612L18.5822 20.4185C18.4218 21.1875 17.9572 21.3715 17.3133 21.0162L13.8149 18.4315L12.1333 20.0667C12.128 20.0718 12.1228 20.077 12.1175 20.0821C11.9294 20.2652 11.7738 20.4167 11.4333 20.4167Z"
          fill="currentColor"
        ></path>
      </svg>
      <p>
        Подпишись на{" "}
        <a href="https://t.me/reactify_IT" target="_blank" rel="noreferrer">
          React Developer
        </a>{" "}
        в телеграм
      </p>
    </div>
  );
};
