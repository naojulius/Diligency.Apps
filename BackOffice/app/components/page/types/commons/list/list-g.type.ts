import type { BaseLayout } from "./base-layout";

/**
 * Liste G — contient simplement une liste de chaînes de caractères.
 */
export class LayoutG implements BaseLayout {
    id?: string
    items?: string[];
}
