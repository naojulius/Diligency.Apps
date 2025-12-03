import type { AppLocaleType } from "../app-locale.type";
import type { BaseLayout } from "./base-layout";

/**
 * Liste D — contient une image et un texte.
 */
export class LayoutD implements BaseLayout {
    image?: string;
    text?: AppLocaleType;
}
