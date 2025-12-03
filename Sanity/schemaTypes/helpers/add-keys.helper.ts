import { randomUUID } from "crypto";

/**
 * Recursively adds `_key` properties to any object or array structure.
 * Useful for Sanity seeding, where arrays/objects need stable unique keys.
 */
export function addKeysMainRecursively(data: any): any {
    if (Array.isArray(data)) {
        return data.map((item) => addKeysMainRecursively({
            ...item,
            _key: item._key || randomUUID(),
        }))
    }

    if (typeof data === "object" && data !== null) {
        const newObj: Record<string, any> = {}
        for (const [key, value] of Object.entries(data)) {
            // Recursively process nested structures
            newObj[key] = addKeysMainRecursively(value)
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
export function addKeysRecursively(data: any, parentType: string | null = null): any {
    // 1. Primitive values → return as-is
    if (
        typeof data === "string" ||
        typeof data === "number" ||
        typeof data === "boolean" ||
        data === null
    ) {
        return data;
    }

    // 2. Arrays
    if (Array.isArray(data)) {
        // A. If parent is list-i and array contains only primitive strings → keep intact
        if (parentType === "list-i" && data.every(item => typeof item === "string")) {
            return data;
        }

        // B. Standard array-of-primitives → keep intact
        if (data.every(item =>
            typeof item === "string" ||
            typeof item === "number" ||
            typeof item === "boolean" ||
            item === null
        )) {
            return data;
        }

        // C. Array of objects → add keys
        return data.map((item) =>
            addKeysRecursively(
                {
                    ...item,
                    _key: item?._key || randomUUID(),
                },
                // Pass type downward if it exists
                item?.type ?? parentType
            )
        );
    }

    // 3. Objects
    if (typeof data === "object") {
        const newObj: Record<string, any> = {};
        const thisType = data?.type || parentType;

        for (const [key, value] of Object.entries(data)) {

            // Special case: list-i → features MUST remain string[]
            if (thisType === "list-i" && key === "features" && typeof value === "object") {
                newObj[key] = value; // keep locale object untouched
                continue;
            }

            newObj[key] = addKeysRecursively(value, thisType);
        }

        // Add _key unless exists
        if (!("_key" in newObj)) {
            newObj._key = randomUUID();
        }

        return newObj;
    }

    return data;
}

