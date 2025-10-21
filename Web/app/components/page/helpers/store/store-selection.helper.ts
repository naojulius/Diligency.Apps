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
    if (!name) {
        throw new Error(`Argument "name" cannot be null or undefined.`)
    }

    const normalized = name.toLowerCase().trim()

    switch (true) {
        case normalized.endsWith("agency"):
            return useAgencyStore()

        case normalized.endsWith("service"):
            return useServiceStore()

        case normalized.endsWith("home"):
            return useHomeStore()

        // You can add more stores easily here:
        // case normalized.endsWith("user"):
        //   return useUserStore()

        default:
            throw new Error(`No store found for name: ${name}`)
    }
}
