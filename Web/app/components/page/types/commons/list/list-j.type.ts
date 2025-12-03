import type { AppLocaleType } from "../app-locale.type";

/**
 * Liste J — bloc spécifique avec plusieurs champs de contenu.
 */
export class LayoutJ {
    name?: string
    // image?: string
    role?: AppLocaleType
    quote?: AppLocaleType

    author?: string
    topTags?: string[]
    bottomTags?: string[]
    image?: string
    thumbnail?: string
    title?: AppLocaleType
    content?: AppLocaleType
}
