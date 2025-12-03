import { useAgencyStore } from "~/stores/agency/agency.store";
import { useHomeStore } from "~/stores/home/home.store";
import { useServiceStore } from "~/stores/service/service.store";

/**
 * Dynamically returns a Pinia store instance based on a name.
 */
export function getStore(name?: string) {

    switch (name) {
        case '':
        case null:
        case undefined:
            return useHomeStore();

        case 'agency':
            return useAgencyStore();
        case 'service':
            return useServiceStore()
        default:
            throw new Error(`No store found for name: ${name}`)
    }
}
