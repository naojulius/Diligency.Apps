import { AGENCY_DATA } from "~/data/agency.data"
import { UseLoaderStore } from "./loader.store"

export const UseAgencyStore = defineStore("agency-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()
    const data = AGENCY_DATA;

    const GetAgencyAboutEngagementItems = () => {
        return data?.about.engagement.items ?? [];
    }

    const GetAgencyJobCarrierProfileItems = () => {
        return data?.jobcarrier.profile ?? [];
    }

    const GetAgencyJobCarrierCollaborationItems = () => {
        return data?.jobcarrier.collaboration ?? [];
    }
    const GetAgencyHubItems = () => {
        return data?.hub.items ?? [];
    }

    return {
        GetAgencyAboutEngagementItems,
        GetAgencyJobCarrierProfileItems,
        GetAgencyJobCarrierCollaborationItems,
        GetAgencyHubItems
    }
})
