import type { AppLocale } from "~/types/interfaces/app-locale";
import type { BaseLayout } from "./base-layout";
import type { LayoutA } from "./list-a.type";

/**
 * Liste E — contient un titre et une sous-liste d’éléments (ListA).
 */
export class LayoutE implements BaseLayout {
    title?: AppLocale;
    list?: LayoutA[];
}
