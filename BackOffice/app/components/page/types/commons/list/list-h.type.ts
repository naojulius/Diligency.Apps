import { LayoutA } from "./list-a.type";

/**
 * Liste H — basée sur ListA, avec des technos et un lien optionnel.
 */
export class LayoutH extends LayoutA {
    technos?: string[];
    link?: string;
}
