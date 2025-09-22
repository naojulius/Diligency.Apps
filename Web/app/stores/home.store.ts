import { GET_HERO_DATA } from "~/types/queries/GET_HERO_DATA";
import { getSanityClient } from "~/types/utils/sanity.client";


export const UseHomeStore = defineStore('home-store', () => {
    const client = getSanityClient()
    const GetData = async (key: string, section: string) => {
        try {
            const data = await client.request(GET_HERO_DATA) as any
            return data.allHome.find((item: { _id: string; }) => item._id === key)[section];
        } catch (error) {
            console.error('Error fetching hero data:', error)
            return null
        }
    }

    return {
        GetData,
        client
    }
});