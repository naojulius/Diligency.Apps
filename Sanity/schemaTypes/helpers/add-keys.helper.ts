import { randomUUID } from "crypto"

/**
 * Recursively adds `_key` properties to any object or array structure.
 * Useful for Sanity seeding, where arrays/objects need stable unique keys.
 */
export function addKeysRecursively(data: any): any {
    if (Array.isArray(data)) {
        return data.map((item) => addKeysRecursively({
            ...item,
            _key: item._key || randomUUID(),
        }))
    }

    if (typeof data === "object" && data !== null) {
        const newObj: Record<string, any> = {}
        for (const [key, value] of Object.entries(data)) {
            // Recursively process nested structures
            newObj[key] = addKeysRecursively(value)
        }

        // Add key only to objects that are not top-level arrays
        if (!("_key" in newObj)) {
            newObj._key = randomUUID()
        }

        return newObj
    }

    // For primitives (string, number, etc.)
    return data
}
