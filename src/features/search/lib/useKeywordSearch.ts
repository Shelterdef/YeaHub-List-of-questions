// src/features/search/lib/useKeywordSearch.ts
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../model/slice";
import { useCallback } from "react";

export const useKeywordSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeywordSearch = useCallback(
    (keyword: string) => {
      // Устанавливаем поисковый запрос
      dispatch(setSearchQuery(keyword));
      navigate("/");
    },
    [dispatch, navigate]
  );

  return {
    handleKeywordSearch,
  };
};
