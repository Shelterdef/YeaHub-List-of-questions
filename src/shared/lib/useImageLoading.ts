// src/shared/lib/hooks/useImageLoading.ts
import { useState, useCallback } from "react";

export const useImageLoading = () => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = useCallback((id: number) => {
    setFailedImages((prev) => new Set(prev).add(id));
  }, []);

  const isImageFailed = useCallback(
    (id: number) => {
      return failedImages.has(id);
    },
    [failedImages]
  );

  const resetFailedImages = useCallback(() => {
    setFailedImages(new Set());
  }, []);

  return {
    failedImages,
    handleImageError,
    isImageFailed,
    resetFailedImages,
  };
};
