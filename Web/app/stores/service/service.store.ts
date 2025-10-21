
import { useBaseStore } from "~/components/page/helpers/store/base-store.helper"
import { SERVICE_DATA } from "~/components/page/locale-datas/service.data"
import { UseLoaderStore } from "../loader.store"

export const useServiceStore = defineStore("service-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    const base = useBaseStore(SERVICE_DATA)

    return {
        ...base,
    }
})

export type ServiceStore = ReturnType<typeof useServiceStore>
