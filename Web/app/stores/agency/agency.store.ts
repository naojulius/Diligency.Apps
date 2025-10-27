import { defineStore } from "pinia"
import { ref } from "vue"
import { useBaseStore } from "~/components/page/helpers/store/base-store.helper"
import { UseLoaderStore } from "../loader.store"

// export const useAgencyStore = defineStore("agency-store", () => {
//     const data = ref([]) // reactive ref to hold fetched data
//     const loader = UseLoaderStore()


//     const fetchData = async () => {
//         loader.ShowLoader()
//         try {
//             const result = await SANITY_CLIENT.fetch(GET_AGENCY_GROQ)
//             data.value = await TRANSFORM_DATA(result) as any
//             loader.HideLoader()
//         } catch (err) {
//             console.error("Error fetching agency pages:", err)
//         }
//     }

//     fetchData()

//     const base = useBaseStore(data)

//     return {
//         ...base,
//     }

// })

export const useAgencyStore = defineStore("agency-store", () => {
    const data = ref([]) // reactive ref to hold transformed data
    const loader = UseLoaderStore()

    const fetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await $fetch('/api/agency') // call server endpoint
            data.value = result as any
            loader.HideLoader()
        } catch (err) {
            console.error("Error fetching agency pages:", err)
            loader.HideLoader()
        }
    }

    fetchData()

    const base = useBaseStore(data)

    return {
        ...base,
    }
})

export type AgencyStore = ReturnType<typeof useAgencyStore>
