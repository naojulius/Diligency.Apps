
import { GET_SERVICE_GROQ } from "~/utils/groq/service.groq"
import { TRANSFORM_DATA } from "../helpers/transformer"
import { UseLoaderStore } from "../loader.store"

export const useServiceStore = defineStore("service-store", () => {
    const loader = UseLoaderStore()

    const FetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_SERVICE_GROQ)
            return await TRANSFORM_DATA(result) as any
        } catch (err) {
            console.error("Error fetching agency pages:", err)
        }
        finally {
            loader.HideLoader()
        }
    }

    return {
        FetchData,
    }
})
