import type { LastArticle } from "~/components/web/agency/hub/why/last-articles"
import type { WebItems } from "~/components/web/service/web-app/web/web-item"
import { AGENCY_DATA } from "~/data/agency.data"
import type { AppLocale } from "~/types/interfaces/app-locale"
import { Cta } from "~/types/interfaces/common/cta"
import type { Title } from "~/types/interfaces/common/title"
import { UseLoaderStore } from "./loader.store"

export const UseAgencyStore = defineStore("agency-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()
    const data = ref(AGENCY_DATA)

    //#region Hero

    const GetAgencyAboutHeroTitle = (): Array<Title> => {
        return data?.value?.about.hero?.title ?? []
    }

    const GetAgencyAboutHeroSubtitle = (): AppLocale => {
        return data?.value?.about.hero?.subtitle
    }

    const GetAgencyAboutHeroBackground = (): string => {
        return data?.value?.about?.hero?.background ?? ""
    }

    //#endregion

    //#region About

    const GetAgencyAboutTitle = (): Array<Title> => {
        return data?.value.about.engagement.title ?? []
    }

    const GetAgencyAboutSubtitle = (): AppLocale => {
        return data?.value.about.engagement.subtitle
    }

    const GetAgencyAboutEngagementItems = () => {
        return data?.value.about.engagement.items ?? [];
    }

    //#endregion

    //#region Team

    const GetAgencyAboutTeamTitle = (): Array<Title> => {
        return data?.value.about.team.title ?? [];
    }

    const GetAgencyAboutTeamSubtitle = (): AppLocale => {
        return data?.value.about.team.subtitle;
    }

    const GetAgencyAboutTeamCta = (key: string): Cta => {
        switch (key.toLowerCase()) {
            case "a":
                return data?.value?.about.team?.ctaA;
            case "b":
                return data?.value?.about.team?.ctaB;

        }
        return new Cta();
    }

    //#endregion

    //#region Job Carrier

    const GetAgencyJobCarrierHeroTitle = (): Array<Title> => {
        return data?.value.jobcarrier.hero.title ?? []
    }

    const GetAgencyJobCarrierHeroSubtitle = (): AppLocale => {
        return data?.value.jobcarrier.hero.subtitle
    }

    const GetAgencyJobCarrierHeroBackground = (): string => {
        return data?.value.jobcarrier.hero.background ?? ""
    }

    const GetAgencyJobCarrierProfileTitle = (): AppLocale => {
        return data?.value.jobcarrier.profile.title
    }

    const GetAgencyJobCarrierProfileItems = () => {
        return data?.value.jobcarrier.profile.items ?? []
    }

    const GetAgencyJobCarrierCollaborationTitle = (): AppLocale => {
        return data?.value.jobcarrier.collaboration.title
    }

    const GetAgencyJobCarrierCollaborationItems = () => {
        return data?.value.jobcarrier.collaboration.items ?? []
    }

    const GetAgencyJobCarrierApplyTitle = (): AppLocale => {
        return data?.value.jobcarrier.apply.title
    }

    const GetAgencyJobCarrierApplyText = (): AppLocale => {
        return data?.value.jobcarrier.apply.text
    }

    const GetAgencyJobCarrierApplyCta = (): Cta => {
        return data?.value.jobcarrier.apply.cta ?? new Cta()
    }

    //#endregion

    const GetAgencyHubFoundItems = (): Array<WebItems> => {
        return data?.value?.hub?.items.list ?? []
    }

    const GetAgencyHubFoundItemTitle = (): AppLocale => {
        return data?.value?.hub?.items.title
    }

    const GetAgencyHubFoundItemSubtitle = (): AppLocale => {
        return data?.value?.hub?.items.subtitle
    }

    const GetAgencyHubFoundImage = (): string => {
        return data?.value?.hub?.items.image
    }

    const GetAgencyHubHeroTitle = (): Array<Title> => {
        return data?.value?.hub?.hero?.title ?? []
    }

    const GetAgencyHubHeroSubtitle = (): AppLocale => {
        return data?.value?.hub?.hero?.subtitle
    }

    const GetAgencyHubHeroBackground = (): string => {
        return data?.value?.hub?.hero?.background
    }

    const GetAgencyHubWhyTitle = (): Array<Title> => {
        return data?.value?.hub.why.title ?? []
    }

    const GetAgencyHubWhySubtitle = (): AppLocale => {
        return data?.value?.hub.why.subtitle
    }

    const GetAgencyHubWhyCta = (): Cta => {
        return data?.value?.hub.why.cta ?? new Cta()
    }

    const GetAgencyHubWhyLastArticleItems = (): Array<LastArticle> => {
        return data?.value?.hub.why.lastArticles ?? []
    }

    return {
        //hero
        GetAgencyAboutHeroTitle,
        GetAgencyAboutHeroSubtitle,
        GetAgencyAboutHeroBackground,

        //about
        GetAgencyAboutEngagementItems,
        GetAgencyAboutTitle,
        GetAgencyAboutSubtitle,

        //JOb Carrier
        GetAgencyJobCarrierProfileItems,
        GetAgencyJobCarrierProfileTitle,
        GetAgencyJobCarrierCollaborationItems,
        GetAgencyJobCarrierHeroTitle,
        GetAgencyJobCarrierHeroSubtitle,
        GetAgencyJobCarrierHeroBackground,
        GetAgencyJobCarrierCollaborationTitle,
        GetAgencyJobCarrierApplyTitle,
        GetAgencyJobCarrierApplyText,
        GetAgencyJobCarrierApplyCta,

        //Hub 
        GetAgencyHubFoundItems,
        GetAgencyHubHeroTitle,
        GetAgencyHubHeroSubtitle,
        GetAgencyHubHeroBackground,
        GetAgencyHubFoundItemTitle,
        GetAgencyHubFoundItemSubtitle,
        GetAgencyHubFoundImage,
        GetAgencyHubWhyTitle,
        GetAgencyHubWhySubtitle,
        GetAgencyHubWhyCta,
        GetAgencyHubWhyLastArticleItems,

        //Team
        GetAgencyAboutTeamTitle,
        GetAgencyAboutTeamSubtitle,
        GetAgencyAboutTeamCta
    }
})
