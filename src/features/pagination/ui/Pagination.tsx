// src\features\pagination\ui\Pagination.tsx
import { usePaginationLogic } from "../lib/usePaginationLogic";
import cl from "./pagination.module.scss";

interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const {
    visiblePages,
    canGoPrev,
    canGoNext,
    setPage,
    nextPage,
    prevPage,
    currentPage,
  } = usePaginationLogic(totalPages);

  return (
    <div className={cl.pagination}>
      {/* Левая стрелка */}
      <button
        className={`${cl.arrow} ${!canGoPrev ? cl.arrowDisabled : ""}`}
        onClick={prevPage}
        disabled={!canGoPrev}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={canGoPrev ? "#6a0bff" : "#a3a3a3"}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.27593 4.55806C9.52 4.80214 9.52 5.19786 9.27593 5.44194L5.34287 9.375H17.1673C17.5125 9.375 17.7923 9.65482 17.7923 10C17.7923 10.3452 17.5125 10.625 17.1673 10.625H5.34287L9.27593 14.5581C9.52 14.8021 9.52 15.1979 9.27593 15.4419C9.03185 15.686 8.63612 15.686 8.39204 15.4419L3.39204 10.4419C3.14796 10.1979 3.14796 9.80214 3.39204 9.55806L8.39204 4.55806C8.63612 4.31398 9.03185 4.31398 9.27593 4.55806Z"
            fill={canGoPrev ? "#6a0bff" : "#a3a3a3"}
          ></path>
        </svg>
      </button>

      <div className={cl.boxPages}>
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className={cl.threeDots}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.4709 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1666 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM24.5 14.5C24.2033 14.5 23.9133 14.588 23.6666 14.7528C23.42 14.9176 23.2277 15.1519 23.1142 15.426C23.0007 15.7001 22.9709 16.0017 23.0288 16.2926C23.0867 16.5836 23.2296 16.8509 23.4393 17.0607C23.6491 17.2704 23.9164 17.4133 24.2074 17.4712C24.4983 17.5291 24.7999 17.4993 25.074 17.3858C25.3481 17.2723 25.5824 17.08 25.7472 16.8334C25.912 16.5867 26 16.2967 26 16C26 15.6022 25.842 15.2206 25.5607 14.9393C25.2794 14.658 24.8978 14.5 24.5 14.5ZM7.5 14.5C7.20333 14.5 6.91332 14.588 6.66665 14.7528C6.41997 14.9176 6.22771 15.1519 6.11418 15.426C6.00065 15.7001 5.97094 16.0017 6.02882 16.2926C6.0867 16.5836 6.22956 16.8509 6.43934 17.0607C6.64912 17.2704 6.91639 17.4133 7.20737 17.4712C7.49834 17.5291 7.79994 17.4993 8.07403 17.3858C8.34811 17.2723 8.58238 17.08 8.74721 16.8334C8.91203 16.5867 9 16.2967 9 16C9 15.6022 8.84197 15.2206 8.56066 14.9393C8.27936 14.658 7.89783 14.5 7.5 14.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            );
          }

          return (
            <button
              key={`page-${page}`}
              className={`${cl.listPages} ${
                currentPage === page ? cl.listPagesActiv : ""
              }`}
              onClick={() => setPage(page as number)}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Правая стрелка */}
      <button
        className={`${cl.arrow} ${!canGoNext ? cl.arrowDisabled : ""}`}
        onClick={nextPage}
        disabled={!canGoNext}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={canGoNext ? "#6a0bff" : "#a3a3a3"}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
            fill={canGoNext ? "#6a0bff" : "#a3a3a3"}
          ></path>
        </svg>
      </button>
    </div>
  );
};
