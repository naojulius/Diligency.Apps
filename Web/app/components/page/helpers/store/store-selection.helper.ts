import { useAgencyStore } from "~/stores/agency/agency.store"
import { useHomeStore } from "~/stores/home/home.store"
import { useServiceStore } from "~/stores/service/service.store"

/**
 * Dynamically returns a Pinia store instance based on a given name.
 *
 * Example:
 * ```ts
 * const store = getStore('agency')
 * const hero = store.GetHeroData('agency')
 * ```
 *
 * @param name - The store identifier (e.g., "agency", "service", "home").
 * @returns The corresponding store instance.
 * @throws {Error} If no matching store is found.
 */
export function getStore(name?: string) {
    // If name is null, undefined, or empty, return HomeStore
    if (!name || name.trim() === "") {
        return useHomeStore()
    }

    const normalized = name.toLowerCase().trim()

    if (normalized.endsWith("agency")) {
        return useAgencyStore()
    }

    if (normalized.endsWith("service")) {
        return useServiceStore()
    }

    // If no match, throw an error
    throw new Error(`No store found for name: ${name}`)
}
