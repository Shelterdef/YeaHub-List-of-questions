// src/shared/assets/icons/ArrowIcon.tsx
import { memo } from "react";

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = memo(({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="var(--color-purple-700)"
    className={className}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="rgba(85, 51, 255, 1)"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

ArrowIcon.displayName = "ArrowIcon";
