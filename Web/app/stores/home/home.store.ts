
import { useBaseStore } from "~/components/page/helpers/store/base-store.helper"
import { HOME_DATA } from "~/components/page/locale-datas/home.data"
import { UseLoaderStore } from "../loader.store"

export const useHomeStore = defineStore("home-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    const base = useBaseStore(HOME_DATA)

    return {
        ...base,
    }
})

export type HomeStore = ReturnType<typeof useHomeStore>
