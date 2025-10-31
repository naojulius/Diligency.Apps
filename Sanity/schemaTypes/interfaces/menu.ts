import { LocaleType } from "./locale";

export class MenuType {
    name!: LocaleType
    link?: string
    icon!: string
    visible!: boolean
    children?: SubMenuType[]
}

export class SubMenuType {
    name!: LocaleType
    link?: string
    icon!: string
    visible!: boolean
    text!: LocaleType
}