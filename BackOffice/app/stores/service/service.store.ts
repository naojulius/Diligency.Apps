
import { useBaseStore } from "~/components/page/helpers/store/base-store.helper"
import { GET_SERVICE_GROQ } from "~/utils/groq/service.groq"
import { TRANSFORM_DATA } from "../helpers/transformer"
import { UseLoaderStore } from "../loader.store"

export const useServiceStore = defineStore("service-store", () => {
    const data = ref([])
    const loader = UseLoaderStore()

    const fetchData = async () => {
        loader.ShowLoader()
        try {
            const result = await SANITY_CLIENT.fetch(GET_SERVICE_GROQ)
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

export type ServiceStore = ReturnType<typeof useServiceStore>
