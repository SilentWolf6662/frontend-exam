import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function getRandomString(length: number) {
    return Math.random().toString(36).substring(2, 2 + length);
}

export function getRandomBoolean() {
    return Math.random() < 0.5;
}

export function getRandomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function getRandomArrayElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}
