// src/features/search/lib/useSearch.ts
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, clearSearchQuery } from "../model/slice";
import { RootState } from "@/app/store";
import { useCallback } from "react";

export const useSearch = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const handleSearchChange = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );

  const handleSearchClear = useCallback(() => {
    dispatch(clearSearchQuery());
  }, [dispatch]);

  return {
    searchQuery,
    handleSearchChange,
    handleSearchClear,
  };
};
