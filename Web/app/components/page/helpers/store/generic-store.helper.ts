
// Project: Nuxt 3 - Generic Base Store + Remote Fetching (full step-by-step)
// This file bundles multiple small TypeScript files used in the project.
// Each section begins with a comment showing the target file path.


/* ==================================================
Purpose: Very small generic getter for any data object
==================================================*/


import { ref } from 'vue'

export function useGenericStore<T extends Record<string, any>>(initialData: T) {
    const data = ref<T>(initialData)


    const GetData = <K extends keyof T, F extends keyof T[K]>(
        key: K,
        field: F,
        defaultValueOrCtor?: any
    ): T[K][F] | null => {
        const value = data.value?.[key]?.[field]
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