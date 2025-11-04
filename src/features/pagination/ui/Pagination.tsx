// src/features/pagination/ui/Pagination.tsx
import { usePaginationLogic } from "../lib/usePaginationLogic";
import { ArrowLeftIcon } from "@/shared/assets/svg/ArrowLeftIcon";
import { ArrowRightIcon } from "@/shared/assets/svg/ArrowRightIcon";
import { ThreeDotsIcon } from "@/shared/assets/svg/ThreeDotsIcon";
import { memo, useMemo } from "react";
import cl from "./pagination.module.scss";

interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = memo(({ totalPages }) => {
  const {
    visiblePages,
    canGoPrev,
    canGoNext,
    setPage,
    nextPage,
    prevPage,
    currentPage,
  } = usePaginationLogic(totalPages);

  // Мемоизируем видимые страницы
  const pageButtons = useMemo(
    () =>
      visiblePages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`dots-${index}`} className={cl.threeDots}>
              <ThreeDotsIcon />
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
      }),
    [visiblePages, currentPage, setPage]
  );

  return (
    <div className={cl.pagination}>
      <button
        className={`${cl.arrow} ${!canGoPrev ? cl.arrowDisabled : ""}`}
        onClick={prevPage}
        disabled={!canGoPrev}
      >
        <ArrowLeftIcon color={canGoPrev ? "#6a0bff" : "#a3a3a3"} />
      </button>

      <div className={cl.boxPages}>{pageButtons}</div>

      <button
        className={`${cl.arrow} ${!canGoNext ? cl.arrowDisabled : ""}`}
        onClick={nextPage}
        disabled={!canGoNext}
      >
        <ArrowRightIcon color={canGoNext ? "#6a0bff" : "#a3a3a3"} />
      </button>
    </div>
  );
});
