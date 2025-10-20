import type { AppLocaleType } from "./app-locale.type";
import type { CtaType } from "./cta.type";
import type { FooterType } from "./footer.type";
import type { ListA } from "./list-a.type";
import type { ListB } from "./list-b.type";
import type { ListC } from "./list-c.type";
import type { ListD } from "./list-d.type";

export type BlockTypeItemsReturnType = ListA | ListB | ListC | ListD;

export class BlockType {
    type?: string
    title!: AppLocaleType[]
    subtitle?: AppLocaleType | AppLocaleType[]
    items!: (BlockTypeItemsReturnType)[]
    footer?: FooterType
    image?: string
    cta?: CtaType[]
}