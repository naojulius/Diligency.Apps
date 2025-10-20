import { SERVICE_DATA } from "~/components/page/locale-datas/service.data"
import type { BlockType } from "~/components/page/types/commons/block.type"
import type { DataType } from "~/components/page/types/commons/data.type"
import { FooterType } from "~/components/page/types/commons/footer.type"
import { HeroType } from "~/components/page/types/hero.type"
import { UseLoaderStore } from "../loader.store"

export const useServiceStore = defineStore("service-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    const data = ref<DataType>(SERVICE_DATA as any)

    const GetHeroData = (key: string): HeroType => {
        return data.value[key]?.hero ?? new HeroType()
    }

    const GetBlockData = (key: string): BlockType[] => {
        return data.value[key]?.blocks ?? []
    }

    const GetFooterData = (key: string): FooterType => {
        return data.value[key]?.footer ?? new FooterType()
    }

    return {
        GetHeroData,
        GetBlockData,
        GetFooterData
    }
})
