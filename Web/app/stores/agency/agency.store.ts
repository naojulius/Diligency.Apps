import { defineStore } from "pinia"
import { GET_AGENCY_GROQ } from "~/utils/groq/agency.groq"
import { TRANSFORM_DATA } from "../helpers/transformer"
import { UseLoaderStore } from "../loader.store"

export const useAgencyStore = defineStore("agency-store", () => {
    const loader = UseLoaderStore()

    const FetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_AGENCY_GROQ)
            return await TRANSFORM_DATA(result) as any
        } catch (err) {
            console.error("Error fetching agency pages:", err)
        }
        finally {
            loader.HideLoader()
        }
    }

    return {
        FetchData
    }
})