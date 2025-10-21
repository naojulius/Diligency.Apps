/* ==================================================
Purpose: Provides shared getters that all stores should inherit
==================================================*/

import type { BlockType } from "../../types/commons/block.type"
import type { FaqType } from "../../types/commons/faq.type"
import type { FooterType } from "../../types/commons/footer.type"
import type { HeroType } from "../../types/hero.type"
import { useGenericStore } from "./generic-store.helper"




export function useBaseStore<T extends Record<string, any>>(initialData: T) {
    const { data, GetData } = useGenericStore(initialData)


    const GetHeroData = (key: string): HeroType => GetData(key as any, 'hero' as any, (globalThis as any).HeroType ?? (class { } as any)) as HeroType
    const GetBlockData = (key: string): BlockType[] => GetData(key as any, 'blocks' as any, [] as BlockType[]) as BlockType[]
    const GetFooterData = (key: string): FooterType => GetData(key as any, 'footer' as any, (globalThis as any).FooterType ?? (class { } as any)) as FooterType
    const GetFaqData = (key: string): FaqType => GetData(key as any, 'faq' as any, (globalThis as any).FaqType ?? (class { } as any)) as FaqType

    return {
        data,
        GetData,
        GetHeroData,
        GetBlockData,
        GetFooterData,
        GetFaqData,
    }
}