import { useAgencyStore } from "~/stores/agency/agency.store"
import { useHomeStore } from "~/stores/home/home.store"
import { useServiceStore } from "~/stores/service/service.store"

/**
 * Dynamically returns a Pinia store instance based on a name.
 */
export function getStore(name?: string) {
    if (!name || name.trim() === "") {
        return useHomeStore()
    }

    const normalized = name.toLowerCase().trim()

    if (normalized.endsWith("agency")) return useAgencyStore()
    if (normalized.endsWith("service")) return useServiceStore()

    throw new Error(`No store found for name: ${name}`)
}
