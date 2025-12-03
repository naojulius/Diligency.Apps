import type { AppLocaleType } from "./app-locale.type";
import type { CtaType } from "./cta.type";
import type { FooterType } from "./footer.type";
import type { ListLayout } from "./list";

export class BlockType {
    type?: string
    title!: AppLocaleType[]
    subtitle?: AppLocaleType | AppLocaleType[]
    items!: (ListLayout)[]
    footer?: FooterType
    image?: string
    cta?: CtaType[]
}