import { ListType } from "./list/list"
import { LocaleType } from "./locale"

export interface Blocktype {
    type?: string
    title?: LocaleType[]
    subtitle?: LocaleType
    items?: ListType[]
    _key?: string
}