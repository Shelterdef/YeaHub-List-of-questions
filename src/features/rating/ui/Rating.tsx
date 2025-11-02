// src/features/rating/ui/Rating.tsx
import React from "react";
import { useRating } from "../lib/useRating";
import { RATING_LEVELS } from "../model/constants";
import cl from "./rating.module.scss";

export const Rating: React.FC = () => {
  const { handleRatingToggle, isRatingSelected } = useRating();

  return (
    <div className={cl.listRating}>
      {RATING_LEVELS.map((rating) => (
        <span
          key={rating}
          className={`${cl.rating} ${
            isRatingSelected(rating) ? cl.ratingSelected : ""
          }`}
          onClick={() => handleRatingToggle(rating)}
        >
          {rating}
        </span>
      ))}
    </div>
  );
};
