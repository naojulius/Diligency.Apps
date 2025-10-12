import { AGENCY_DATA } from "~/data/agency.data"
import { UseLoaderStore } from "./loader.store"
import type { Title } from "~/types/interfaces/common/title"

export const UseAgencyStore = defineStore("agency-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()
    const data = ref(AGENCY_DATA);

    //#region Hero

    // const GetHeroTitle = (): Array<Title> | string => {
    //     return data?.value?.hero?.title ?? []
    // }

    // const GetHeroSubTitle = (): AppLocale => {
    //     return data?.value?.hero?.subtitle ?? []
    // }

    // const GetHeroBackground = (): string => {
    //     return data?.value?.hero?.link ?? ""
    // }

    // const GetHeroCta = (key: string): Cta => {
    //     switch (key.toLowerCase()) {
    //         case "a":
    //             return data?.value?.hero?.ctaA;
    //         case "b":
    //             return data?.value?.hero?.ctaB;
    //     }
    //     return new Cta();
    // }

    //#endregion



    const GetAgencyAboutEngagementItems = () => {
        return data?.value.about.engagement.items ?? [];
    }

    const GetAgencyJobCarrierProfileItems = () => {
        return data?.value.jobcarrier.profile ?? [];
    }

    const GetAgencyJobCarrierCollaborationItems = () => {
        return data?.value.jobcarrier.collaboration ?? [];
    }
    const GetAgencyHubItems = () => {
        return data?.value.hub.items ?? [];
    }

    return {
        GetAgencyAboutEngagementItems,
        GetAgencyJobCarrierProfileItems,
        GetAgencyJobCarrierCollaborationItems,
        GetAgencyHubItems
    }
})
