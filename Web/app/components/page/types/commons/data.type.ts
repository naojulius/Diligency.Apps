import type { HeroType } from "../hero.type"
import type { BlockType } from "./block.type"
import type { FooterType } from "./footer.type"

export type DataType = {
    [key: string]: {
        hero: HeroType
        blocks: BlockType[]
        footer: FooterType
    }
}