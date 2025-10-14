import type { FAQ } from "~/components/web/service/web-app/faq/faqs"
import type { WebItems } from "~/components/web/service/web-app/web/web-item"
import { SERVICE_DATA } from "~/data/service.data"
import type { AppLocale } from "~/types/interfaces/app-locale"
import { Cta } from "~/types/interfaces/common/cta"
import type { Title } from "~/types/interfaces/common/title"
import { UseLoaderStore } from "./loader.store"

export const UseServiceStore = defineStore("service-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()
    const data = ref(SERVICE_DATA);

    const GetForItemsLit = () => {
        return data?.value.ecommerce?.for?.items ?? [];
    }

    const GetMethodItemsLit = () => {
        return data?.value.ecommerce?.method?.items ?? [];
    }

    const GetGotItemsLit = () => {
        return data?.value.ecommerce?.got?.items ?? [];
    }

    const GetServiceItIaForItems = () => {
        return data?.value.itia.for.items ?? [];
    }

    const GetServiceItIaMethodItems = () => {
        return data?.value.itia.method.items ?? [];
    }

    const GetServiceItIaExampleItems = () => {
        return data?.value.itia.example.items ?? [];
    }

    //#region Web App

    const GetWebAppHeroTitle = (): Array<Title> => {
        return data?.value?.webApp.hero.title ?? []
    }

    const GetWebAppHeroSubTitle = (): AppLocale => {
        return data?.value?.webApp.hero?.subtitle ?? []
    }

    const GetWebAppHeroBackground = (): string => {
        return data?.value?.webApp.hero?.background ?? ""
    }

    const GetWebAppWebTitle = (): Array<Title> => {
        return data?.value?.webApp.web?.title ?? []
    }

    const GetWebAppWebSubtitle = (): AppLocale => {
        return data?.value?.webApp.web?.subtitle
    }

    const GetWebAppWebUsageTitle = (): AppLocale => {
        return data?.value?.webApp.web?.items?.usage.title
    }

    const GetWebAppWebUsageItems = (): Array<WebItems> => {
        return data?.value?.webApp.web?.items?.usage.list ?? []
    }

    const GetWebAppWebAdvantageTitle = (): AppLocale => {
        return data?.value?.webApp.web?.items?.advantage.title
    }

    const GetWebAppWebAdvantageItems = (): Array<WebItems> => {
        return data?.value?.webApp.web?.items?.advantage.list ?? []
    }

    const GetWebAppMethodTitle = (): Array<Title> => {
        return data?.value?.webApp.method?.title ?? []
    }

    const GetWebAppMethodSubtitle = (): AppLocale => {
        return data?.value?.webApp.method?.subtitle
    }

    const GetWebAppMethodMethodsItems = (): Array<WebItems> => {
        return data?.value?.webApp.method?.items?.methods ?? []
    }

    const GetWebAppMethodGainItems = (): Array<WebItems> => {
        return data?.value?.webApp.method?.items?.gain ?? []
    }

    const GetWebAppMethodWhyItems = (): Array<WebItems> => {
        return data?.value?.webApp.method?.items?.why ?? []
    }

    const GetWebAppFaqtitle = (): AppLocale => {
        return data?.value?.webApp.faq?.title
    }

    const GetWebAppFaqItems = (): Array<FAQ> => {
        return data?.value?.webApp.faq?.items ?? []
    }

    const GetWebAppCta = (): Cta => {
        return data?.value?.webApp?.cta ?? new Cta();
    }

    const GetWebAppCtaText = (): AppLocale => {
        return data?.value?.webApp?.ctaText;
    }

    //#endregion

    return {
        GetForItemsLit,
        GetMethodItemsLit,
        GetGotItemsLit,
        GetServiceItIaForItems,
        GetServiceItIaMethodItems,
        GetServiceItIaExampleItems,

        //web App
        GetWebAppHeroTitle,
        GetWebAppHeroSubTitle,
        GetWebAppHeroBackground,
        GetWebAppWebTitle,
        GetWebAppWebSubtitle,
        GetWebAppWebUsageTitle,
        GetWebAppWebUsageItems,
        GetWebAppWebAdvantageTitle,
        GetWebAppWebAdvantageItems,
        GetWebAppMethodTitle,
        GetWebAppMethodSubtitle,
        GetWebAppMethodMethodsItems,
        GetWebAppMethodGainItems,
        GetWebAppMethodWhyItems,
        GetWebAppFaqtitle,
        GetWebAppFaqItems,
        GetWebAppCta,
        GetWebAppCtaText
    }
})
