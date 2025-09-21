import { defineField } from "sanity";

// Detect if the object is a locale object (en/fr)
function isLocaleObject(obj: any): boolean {
    return obj && typeof obj === "object" && "en" in obj && "fr" in obj;
}

// Recursive function to convert JSON to Sanity fields
export function jsonToFields(name: string, obj: any): any[] {
    if (typeof obj === "string") {
        return [
            defineField({
                name,
                title: capitalize(name),
                type: "string",
            }),
        ];
    }

    if (isLocaleObject(obj)) {
        // Wrap locale in object
        return [
            defineField({
                name,
                title: capitalize(name),
                type: "object",
                fields: Object.keys(obj).map((key) =>
                    defineField({
                        name: key,
                        title: key.toUpperCase(),
                        type: "string",
                    })
                ),
            }),
        ];
    }

    if (Array.isArray(obj)) {
        return [
            defineField({
                name,
                title: capitalize(name),
                type: "array",
                of: obj.length > 0 ? jsonToFields(name, obj[0]) : [{ type: "string" }],
            }),
        ];
    }

    if (typeof obj === "object") {
        return [
            defineField({
                name,
                title: capitalize(name),
                type: "object",
                fields: Object.keys(obj)
                    .map((key) => jsonToFields(key, obj[key]))
                    .flat(),
            }),
        ];
    }

    return [];
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
