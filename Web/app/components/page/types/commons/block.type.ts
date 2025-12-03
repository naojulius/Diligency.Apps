import type { AppLocaleType } from "./app-locale.type";
import type { CtaType } from "./cta.type";
import type { FooterType } from "./footer.type";
import type { Layouts } from "./list";

export class BlockType {
    type?: string
    title!: AppLocaleType[]
    subtitle?: AppLocaleType | AppLocaleType[]
    items!: (Layouts)[]
    footer?: FooterType
    image?: string
    cta?: CtaType[]
    action?: string
}