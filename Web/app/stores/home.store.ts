import { HOME_DATA } from "~/data/home.data"
import type { AppLocale } from "~/types/interfaces/app-locale"
import { Cta } from "~/types/interfaces/common/cta"
import { Title } from "~/types/interfaces/common/title"
import { UseLoaderStore } from "./loader.store"

const data = ref(HOME_DATA)
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

    //#endregion

    //#region GetMainData

    const GetData = async () => {
        data.value = HOME_DATA;
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
        GetHeroTitle,
        GetHeroSubTitle,
        GetHeroBackground,
        GetHeroCta,
        GetStrategyTitle,
    }
})
