import { CtaType } from "./cta"
import { ListType } from "./list/list"
import { LocaleType } from "./locale"

export interface BlockType {
    type?: string
    title?: LocaleType[]
    subtitle?: LocaleType
    items?: ListType[]
    image?: string
    _key?: string
    cta?: CtaType[]
}