import type { AppLocaleType } from "./app-locale.type";
import type { CtaType } from "./cta.type";

export class FooterType {
    type?: string
    title?: AppLocaleType
    text?: AppLocaleType
    cta?: CtaType[]
}