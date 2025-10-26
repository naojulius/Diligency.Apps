import { ref } from 'vue'

/**
 * Generic store for any data object.
 * If `key` is not provided, it directly accesses `data[field]`.
 */
export function useGenericStore<T extends Record<string, any>>(initialData: T) {
    const data = ref<T>(initialData)

    const GetData = <K extends keyof T, F extends keyof T[K]>(
        key?: K,
        field?: F,
        defaultValueOrCtor?: any
    ): any => {
        let value: any

        if (!key || key === "") {
            // No key provided: use data[field] directly
            value = data.value?.[field as keyof T]
        } else {
            // Key provided: use data[key][field]
            value = data.value?.[key]?.[field as keyof T[K]]
        }

        if (value !== undefined) return value

        // if a constructor is passed (class / function), instantiate
        if (typeof defaultValueOrCtor === 'function') {
            try {
                return new defaultValueOrCtor()
            } catch (e) {
                // not a constructor, fallthrough
            }
        }

        // if default is an array example provided as []
        if (Array.isArray(defaultValueOrCtor)) {
            return [] as any
        }

        return defaultValueOrCtor ?? null
    }

    return {
        data,
        GetData,
    }
}
