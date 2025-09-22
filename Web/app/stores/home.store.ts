import type { GetHomeHeroQuery } from "~/types/gql/builds/graphql"
import { GetHeroDataQuery } from "~/types/gql/queries/get-hero.gql"
import { throwIfNull } from "~/types/utils/error"
import { UseLoaderStore } from "./loader.store"

export const UseHomeStore = defineStore("home-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    const GetHeroData = async (): Promise<NonNullable<GetHomeHeroQuery["allHome"][number]["hero"]>> => {
        loader.ShowLoader()

        try {
            const { data } = await apollo.query<GetHomeHeroQuery>({
                query: GetHeroDataQuery,
            })

            const item = throwIfNull(
                data.allHome.find((i) => i._id === "home-hero"),
                "Hero not found"
            )
            return throwIfNull(item.hero, "Hero not found")

        } finally {
            loader.HideLoader()
        }
    }

    return {
        GetHeroData,
    }
})
