// src/features/rating/lib/useRating.ts
import { useDispatch, useSelector } from "react-redux";
import { toggleRating, setRatings, resetRatings } from "../model/slice";
import { RatingLevel } from "../model/constants";
import { RootState } from "@/app/store";

export const useRating = () => {
  const dispatch = useDispatch();
  const selectedRatings = useSelector(
    (state: RootState) => state.rating.selectedRatings
  );

  const handleRatingToggle = (rating: RatingLevel) => {
    dispatch(toggleRating(rating));
  };

  const handleSetRatings = (ratings: RatingLevel[]) => {
    dispatch(setRatings(ratings));
  };

  const handleResetRatings = () => {
    dispatch(resetRatings());
  };

  const isRatingSelected = (rating: RatingLevel) => {
    return selectedRatings.includes(rating);
  };

  return {
    selectedRatings,
    handleRatingToggle,
    handleSetRatings,
    handleResetRatings,
    isRatingSelected,
  };
};
