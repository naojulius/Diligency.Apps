import { defineStore } from "pinia"
import { GET_APPPLICATION_GROQ } from "~/utils/groq/application.groq"
import { UseLoaderStore } from "../loader.store"
import { useApplicationStore } from "./application.store"

export const useApplicationDataStore = defineStore("apdata-store", () => {
    const loader = UseLoaderStore()

    const fetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_APPPLICATION_GROQ)
            useApplicationStore().SetMainData(result)
            loader.HideLoader()
            return result

        } catch (err) {
            console.error("Error fetching agency pages:", err)
            loader.HideLoader()
        }
    }

    return {
        fetchData
    }

})