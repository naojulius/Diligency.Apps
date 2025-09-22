import type { GetHomeHeroQuery } from "~/types/gql/builds/graphql";
import GetHeroDataQuery from "~/types/gql/queries/get-hero.gql?raw";
import { getSanityClient } from "~/types/utils/sanity.client";
import { UseLoaderStore } from "./loader.store";

export const UseHomeStore = defineStore('home-store', () => {
    const client = getSanityClient()
    const loader = UseLoaderStore()

    const GetHeroData = async (): Promise<NonNullable<GetHomeHeroQuery['allHome'][number]['hero']>> => {
        loader.ShowLoader()

        try {
            const data = await client.request<GetHomeHeroQuery>(GetHeroDataQuery)
            const item = data.allHome.find(i => i._id === "home-hero")
            return item?.hero || (() => { throw new Error() })()

        } catch (error) {

            console.error('Error fetching hero data:', error)
            throw error

        } finally {
            loader.HideLoader()
        }
    }

    return {
        GetHeroData,
        client
    }
})
