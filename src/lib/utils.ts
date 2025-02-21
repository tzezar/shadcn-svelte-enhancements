import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const sleep = async (durationMs: number): Promise<void> =>
	new Promise((res) => setTimeout(res, durationMs));

export function formatFileSize(bytes: number): string {
	const units = ['B', 'KB', 'MB', 'GB'];
	let size = bytes;
	let unitIndex = 0;
  
	while (size >= 1024 && unitIndex < units.length - 1) {
	  size /= 1024;
	  unitIndex++;
	}
  
	return `${size.toFixed(1)} ${units[unitIndex]}`;
  }