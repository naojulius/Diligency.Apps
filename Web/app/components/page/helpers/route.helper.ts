/**
 * Extracts the individual route segments from a given path.
 * 
 * Example:
 *   getRouteSegments("/agency/about") -> ["agency", "about"]
 *
 * @param path - The full URL path (e.g., "/agency/about/")
 * @returns An array of non-empty path segments.
 */
export function getRouteSegments(path: string): string[] {
    // Remove leading and trailing slashes using regex (^\/|\/$)
    // Example: "/agency/about/" -> "agency/about"
    return path
        .replace(/^\/|\/$/g, "")
        // Split the remaining string by slashes
        .split("/")
        // Filter out any empty strings (in case of consecutive slashes)
        .filter(Boolean)
}
