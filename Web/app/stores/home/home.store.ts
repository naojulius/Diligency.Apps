
import { GET_HOME_GROQ } from "~/utils/groq/home.groq"
import { TRANSFORM_DATA } from "../helpers/transformer"
import { UseLoaderStore } from "../loader.store"

// export const useHomeStore = defineStore("home-store", () => {
//     const nuxtApp = useNuxtApp()
//     const apollo = nuxtApp.$apollo
//     const loader = UseLoaderStore()

//     const base = useBaseStore(HOME_DATA)

//     return {
//         ...base,
//     }
// })


export const useHomeStore = defineStore("homes-store", () => {
    const data = ref([])
    const loader = UseLoaderStore()

    const FetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_HOME_GROQ)
            data.value = await TRANSFORM_DATA(result) as any
            loader.HideLoader()
        } catch (err) {
            console.error("Error fetching agency pages:", err)
        }
    }

    return {
        FetchData
    }

})
