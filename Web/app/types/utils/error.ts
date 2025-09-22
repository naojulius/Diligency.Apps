// utils/error.ts
export function throwIfNull<T>(value: T | null | undefined, message = "Value not found"): T {
    if (value === null || value === undefined) {
        throw new Error(message)
    }
    return value
}