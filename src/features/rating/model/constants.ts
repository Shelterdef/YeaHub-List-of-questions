// src/features/rating/model/constants.ts
export const RATING_LEVELS = [1, 2, 3, 4, 5] as const;
export type RatingLevel = (typeof RATING_LEVELS)[number];
