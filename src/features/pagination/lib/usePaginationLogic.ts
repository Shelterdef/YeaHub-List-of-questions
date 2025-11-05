// src/features/pagination/lib/usePaginationLogic.ts
import { usePagination } from "./usePagination";
import { useMemo } from "react";

export const usePaginationLogic = (totalPages: number) => {
  const { currentPage, setPage, nextPage, prevPage } = usePagination();

  const visiblePages = useMemo((): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (currentPage <= 4) {
      for (let i = 2; i <= 6; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push("...");
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push("...");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return {
    currentPage,
    visiblePages,
    canGoPrev,
    canGoNext,
    setPage,
    nextPage,
    prevPage,
  };
};
