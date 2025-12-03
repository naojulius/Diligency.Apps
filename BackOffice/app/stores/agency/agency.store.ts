import { defineStore } from "pinia"
import { ref } from "vue"
import { useBaseStore } from "~/components/page/helpers/store/base-store.helper"
import { GET_AGENCY_GROQ } from "~/utils/groq/agency.groq"
import { TRANSFORM_DATA } from "../helpers/transformer"
import { UseLoaderStore } from "../loader.store"

export const useAgencyStore = defineStore("agency-store", () => {
    const data = ref([])
    const loader = UseLoaderStore()

    const fetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_AGENCY_GROQ)
            data.value = await TRANSFORM_DATA(result) as any
            loader.HideLoader()
        } catch (err) {
            console.error("Error fetching agency pages:", err)
        }
    }

    fetchData();

    const base = useBaseStore(data)

    return {
        ...base,
    }

})

export type AgencyStore = ReturnType<typeof useAgencyStore>
