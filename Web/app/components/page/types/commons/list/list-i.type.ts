import type { AppLocaleType } from "../app-locale.type";
import type { BaseLayout } from "./base-layout";

/**
 * Liste I — bloc spécifique avec plusieurs champs de contenu.
 */
export class LayoutI implements BaseLayout {
    id?: string;
    icon?: string;
    title?: AppLocaleType | AppLocaleType[];
    features?: AppLocaleType;
    description?: AppLocaleType;
}
