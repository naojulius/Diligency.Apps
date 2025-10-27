import { ref } from "vue"

/**
 * Generic reactive store for any object.
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
            value = data.value?.[field as keyof T]
        } else {
            value = data.value?.[key]?.[field as keyof T[K]]
        }
        if (value !== undefined) return value

        if (typeof defaultValueOrCtor === "function") {
            try {
                return new defaultValueOrCtor()
            } catch {
                // fallback
            }
        }

        if (Array.isArray(defaultValueOrCtor)) return [] as any
        return defaultValueOrCtor ?? null
    }

    return {
        data,
        GetData,
    }
}
