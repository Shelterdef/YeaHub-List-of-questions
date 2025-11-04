// src/features/rating/lib/useRating.ts
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react"; // <-- Добавляем хуки
import { toggleRating, setRatings, resetRatings } from "../model/slice";
import { RatingLevel } from "../model/constants";
import { RootState } from "@/app/store";

export const useRating = () => {
  const dispatch = useDispatch();
  const selectedRatings = useSelector(
    (state: RootState) => state.rating.selectedRatings
  );

  const handleRatingToggle = useCallback(
    (rating: RatingLevel) => {
      dispatch(toggleRating(rating));
    },
    [dispatch]
  );

  const handleSetRatings = useCallback(
    (ratings: RatingLevel[]) => {
      dispatch(setRatings(ratings));
    },
    [dispatch]
  );

  const handleResetRatings = useCallback(() => {
    dispatch(resetRatings());
  }, [dispatch]);

  const isRatingSelected = useCallback(
    (rating: RatingLevel) => {
      return selectedRatings.includes(rating);
    },
    [selectedRatings]
  );

  return useMemo(
    () => ({
      selectedRatings,
      handleRatingToggle,
      handleSetRatings,
      handleResetRatings,
      isRatingSelected,
    }),
    [
      selectedRatings,
      handleRatingToggle,
      handleSetRatings,
      handleResetRatings,
      isRatingSelected,
    ]
  );
};
