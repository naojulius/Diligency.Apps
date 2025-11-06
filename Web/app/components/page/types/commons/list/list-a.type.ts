import type { AppLocaleType } from "../app-locale.type";
import type { BaseLayout } from "./base-layout";

/**
 * Liste de base contenant une icône, un nom et un texte.
 */
export class LayoutA implements BaseLayout {
    type?: string;
    icon?: string;
    name?: AppLocaleType;
    text?: AppLocaleType;
}
