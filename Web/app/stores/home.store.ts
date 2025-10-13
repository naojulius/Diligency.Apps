import type { Expertise } from "~/components/web/home/expertise/expertise.type"
import type { Plan } from "~/components/web/home/offer/interface"
import { HOME_DATA } from "~/data/home.data"
import type { AppLocale } from "~/types/interfaces/app-locale"
import { Cta } from "~/types/interfaces/common/cta"
import { Title } from "~/types/interfaces/common/title"
import { UseLoaderStore } from "./loader.store"

const data = ref()
/*
    Définition du store "home-store" avec Pinia.
    Contient la logique pour récupérer les données du Hero depuis l'API GraphQL.
*/
export const UseHomeStore = defineStore("home-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    //#region Hero

    const GetHeroTitle = (): Array<Title> | string => {
        return data?.value?.hero?.title ?? []
    }

    const GetHeroSubTitle = (): AppLocale => {
        return data?.value?.hero?.subtitle ?? []
    }

    const GetHeroBackground = (): string => {
        return data?.value?.hero?.link ?? ""
    }

    const GetHeroCta = (key: string): Cta => {
        switch (key.toLowerCase()) {
            case "a":
                return data?.value?.hero?.ctaA;
            case "b":
                return data?.value?.hero?.ctaB;
        }
        return new Cta();
    }

    //#endregion

    //#region Strategy

    const GetStrategyTitle = (): Array<Title> => {
        return data?.value?.strategy?.title ?? []
    }

    const GetStrategySubTitle = (): AppLocale => {
        return data?.value?.strategy?.subtitle ?? []
    }

    const GetStrategyImages = (): Array<string> => {
        return data?.value?.strategy?.images ?? []
    }

    //#endregion

    //#region Expertise

    const GetExpertiseTitle = (): Array<Title> => {
        return data?.value?.expertise?.title ?? []
    }

    const GetExpertiseSubTitle = (): AppLocale => {
        return data?.value?.expertise?.subtitle ?? []
    }

    const GetExpertiseItems = (): Array<Expertise> => {
        return data?.value?.expertise?.items ?? []
    }

    const GetExpertiseCta = (): Cta => {
        return data?.value?.expertise?.cta
    }

    //#endregion

    //#region Offer

    const GetOfferTitle = (): Array<Title> => {
        return data?.value?.offer?.title ?? []
    }

    const GetOfferSubTitle = (): AppLocale => {
        return data?.value?.offer?.subtitle ?? []
    }

    const GetOfferPlanEssentialItems = (): Plan => {
        return data?.value?.offer?.plans?.essential
    }

    const GetOfferPlanPremiumItems = (): Plan => {
        return data?.value?.offer.plans.premium
    }

    //#endregion

    //#region Hub

    const GetHubTitle = (): Array<Title> => {
        return data?.value?.hub?.title ?? []
    }

    const GetHubSubTitle = (): AppLocale => {
        return data?.value?.hub?.subtitle ?? []
    }

    const GetHubTestimonialItems = (): any => {
        return data?.value?.hub?.testimonials ?? []
    }

    const GetHubCta = (): Cta => {
        return data?.value?.hub?.cta ?? new Cta()
    }

    //#endregion

    //#region Conversion

    const GetConversionTitle = (): Array<Title> => {
        return data?.value?.conversion?.title ?? []
    }

    const GetConversionSubTitle = (): AppLocale => {
        return data?.value?.conversion?.subtitle ?? []
    }

    const GetConversionBacground = (): string => {
        return data?.value?.conversion?.background
    }

    const GetConversionCta = (key: string): Cta => {
        switch (key.toLocaleLowerCase()) {
            case "a":
                return data?.value?.conversion?.ctaA
        }

        return new Cta();
    }

    const GetConversionFooterText = (): AppLocale => {
        return data?.value?.conversion?.footer.text
    }

    const GetConversionFooterCta = (): Cta => {
        return data?.value?.conversion?.footer.cta ?? new Cta()
    }

    //#endregion

    //#region GetMainData

    const GetData = async () => {
        loader.ShowLoader()
        data.value = HOME_DATA;
        loader.HideLoader()
        // loader.ShowLoader()

        // try {
        //     const { data } = await apollo.query<GetHomeHeroQuery>({
        //         query: GetHeroDataQuery,
        //     })

        //     // const item = throwIfNull(
        //     //     data.allHome.find((i) => i._id === "home-hero"), "Hero not found"
        //     // )
        //     // return throwIfNull(item.hero, "Hero not found")
        //     return []

        // } finally {
        //     loader.HideLoader()
        // }
    }

    GetData()

    //#endregion

    return {
        //Hero
        GetHeroTitle,
        GetHeroSubTitle,
        GetHeroBackground,
        GetHeroCta,
        //Strategy
        GetStrategyTitle,
        GetStrategySubTitle,
        GetStrategyImages,
        //Exprtise
        GetExpertiseTitle,
        GetExpertiseSubTitle,
        GetExpertiseItems,
        GetExpertiseCta,
        //Offer
        GetOfferTitle,
        GetOfferSubTitle,
        GetOfferPlanEssentialItems,
        GetOfferPlanPremiumItems,
        //Hub
        GetHubTitle,
        GetHubSubTitle,
        GetHubTestimonialItems,
        GetHubCta,
        //Conversion
        GetConversionTitle,
        GetConversionSubTitle,
        GetConversionCta,
        GetConversionBacground,
        GetConversionFooterText,
        GetConversionFooterCta
    }
})
