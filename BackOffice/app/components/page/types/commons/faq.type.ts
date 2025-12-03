import type { AppLocaleType } from "./app-locale.type";

export class FaqType {
    title?: AppLocaleType[]
    items?: FaqItemType[]
}

export class FaqItemType {
    question?: AppLocaleType
    response?: AppLocaleType
}