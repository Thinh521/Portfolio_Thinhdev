import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Gộp className + xử lý conflict Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
