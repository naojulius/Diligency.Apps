import { useAgencyStore } from "~/stores/agency/agency.store"
import { useServiceStore } from "~/stores/service/service.store"

/**
 * Returns a Pinia store based on a given name.
 * @param name - The store identifier (e.g., "agency")
 * @returns The corresponding store instance
 * @throws ArgumentsNullError if `name` is null or undefined
 */
export function getStore(name: string | undefined) {
    if (!name || undefined) {
        throw new Error(`argument is null: ${name}`)
    }

    // Chek then return if Agency Store 
    if (name.toLowerCase().endsWith('agency')) {
        return useAgencyStore()
    }

    // Chek then return if Agency Store 
    if (name.toLowerCase().endsWith('service')) {
        return useServiceStore()
    }

    // Add more stores here if needed
    // if (name.toLowerCase().endsWith('user')) return useUserStore()

    throw new Error(`No store found for name: ${name}`)
}
