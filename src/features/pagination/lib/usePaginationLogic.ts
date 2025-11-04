// src/features/pagination/lib/usePaginationLogic.ts
import { usePagination } from "./usePagination";
import { useMemo } from "react";

export const usePaginationLogic = (totalPages: number) => {
  const { currentPage, setPage, nextPage, prevPage } = usePagination();

  const visiblePages = useMemo((): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Если страниц мало - показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Всегда показываем первую страницу
    pages.push(1);

    if (currentPage <= 4) {
      // Для страниц 1-4: показываем 2,3,4,5,6
      for (let i = 2; i <= 6; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      // Для последних страниц: показываем ... и последние 5 страниц
      pages.push("...");
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Для средних страниц: показываем ... текущую и по 2 страницы вокруг
      pages.push("...");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]); // ← Ключевая оптимизация!

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
