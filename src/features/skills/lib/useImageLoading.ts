// src/shared/lib/hooks/useImageLoading.ts
import { useState } from "react";

export const useImageLoading = () => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (id: number) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  const isImageFailed = (id: number) => {
    return failedImages.has(id);
  };

  const resetFailedImages = () => {
    setFailedImages(new Set());
  };

  return {
    failedImages,
    handleImageError,
    isImageFailed,
    resetFailedImages,
  };
};
