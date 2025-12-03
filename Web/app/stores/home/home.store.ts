
import { GET_HOME_GROQ } from "~/utils/groq/home.groq"
import { UseLoaderStore } from "../loader.store"

export const useHomeStore = defineStore("home-store", () => {
    const loader = UseLoaderStore()

    const FetchData = async () => {
        loader.ShowLoader()
        try {
            var result = await SANITY_CLIENT.fetch(GET_HOME_GROQ) as Array<any>
            return result[0]
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
