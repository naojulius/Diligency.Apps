import type { AppLocale } from "~/types/interfaces/app-locale";
import type { AppLocaleType } from "../app-locale.type";

/**
 * =====================================================
 *  BASE TYPE POUR TOUS LES "LIST"
 * -----------------------------------------------------
 *  Définit les propriétés communes à la plupart des
 *  listes de blocs de sections.
 * =====================================================
 */
export interface BaseLayout {
    id?: string;
    type?: string;
    icon?: string;
    name?: AppLocaleType;
    text?: AppLocaleType;
    title?: AppLocale | AppLocaleType;
    description?: AppLocaleType;
    features?: AppLocaleType;
}
