type LocalizedValue = Record<string, string>

function createTextSchema(name: string, defaultValues: LocalizedValue) {
    return {
        name,
        type: 'object',
        title: name.charAt(0).toUpperCase() + name.slice(1),
        fields: Object.keys(defaultValues).map(lang => ({
            name: lang,
            type: 'string',
            title: lang.toUpperCase(),
            initialValue: defaultValues[lang],
            validation: (Rule: any) => Rule.required(),
        })),
        initialValue: defaultValues,
    }
}

export const generateSchema = (name: string, obj: any): any => {
    // primitive string
    if (typeof obj === 'string') {
        return {
            name,
            type: 'string',
            title: name,
            initialValue: obj,
        }
    }

    // primitive number
    if (typeof obj === 'number') {
        return {
            name,
            type: 'number',
            title: name,
            initialValue: obj,
        }
    }

    // primitive boolean
    if (typeof obj === 'boolean') {
        return {
            name,
            type: 'boolean',
            title: name,
            initialValue: obj,
        }
    }

    // array handling
    if (Array.isArray(obj)) {
        return {
            name,
            type: 'array',
            title: name,
            of: obj.length > 0
                ? [generateSchema(name + 'Item', obj[0])]
                : [{ type: 'string' }], // fallback
            initialValue: obj,
        }
    }

    // object handling
    if (typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj)
        const isLocalized = keys.every(k => typeof obj[k] === 'string')

        if (isLocalized) {
            return createTextSchema(name, obj as LocalizedValue)
        }

        return {
            name,
            type: 'object',
            title: name,
            fields: keys.map(k => generateSchema(k, obj[k])),
            initialValue: obj,
        }
    }

    // fallback
    return {
        name,
        type: 'string',
        title: name,
    }
}
