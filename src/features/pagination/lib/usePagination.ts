// src/features/pagination/lib/usePagination.ts
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  nextPage,
  prevPage,
  resetPagination,
} from "../model/slice";
import { RootState } from "@/app/store";
import { useCallback } from "react";

export const usePagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const handleSetPage = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const handleNextPage = useCallback(() => {
    dispatch(nextPage());
  }, [dispatch]);

  const handlePrevPage = useCallback(() => {
    dispatch(prevPage());
  }, [dispatch]);

  const handleResetPagination = useCallback(() => {
    dispatch(resetPagination());
  }, [dispatch]);

  return {
    currentPage,
    setPage: handleSetPage,
    nextPage: handleNextPage,
    prevPage: handlePrevPage,
    resetPagination: handleResetPagination,
  };
};
