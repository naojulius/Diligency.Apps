import type { AppLocaleType } from "./commons/app-locale.type";
import type { CtaType } from "./commons/cta.type";

export class HeroType {
    title?: AppLocaleType[]
    subtitle?: AppLocaleType
    image?: string
    video?: string
    cta?: CtaType[]
}