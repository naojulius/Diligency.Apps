import {
    PageSectionCommonCtaLink,
    PageSectionCommonCtaSecondary,
    PageSectionCommonCtaTertiary,
    PageSectionFooterA,
    PageSectionFooterB,
    PageSectionFooterC
} from "#components";
import { blockComponents } from "../types/commons/list";


/**
 * =====================================================
 *  MAPPING DES COMPOSANTS DE TYPE "FOOTER"
 * -----------------------------------------------------
 *  Associe les préfixes des types de pied de page
 *  avec leurs composants respectifs.
 * =====================================================
 */
const footerComponents: Record<string, any> = {
    "footer-a": PageSectionFooterA,
    "footer-b": PageSectionFooterB,
    "footer-c": PageSectionFooterC,
};

/**
 * =====================================================
 *  MAPPING DES COMPOSANTS DE TYPE "CTA" (Call-To-Action)
 * -----------------------------------------------------
 *  Cet objet associe les différents types de CTA
 *  à leurs composants respectifs.
 *  Exemples :
 *  - "cta-link"
 *  - "cta-secondary"
 *  - "cta-tertiary"
 * =====================================================
 */
const ctaComponents: Record<string, any> = {
    "cta-link": PageSectionCommonCtaLink,
    "cta-secondary": PageSectionCommonCtaSecondary,
    "cta-tertiary": PageSectionCommonCtaTertiary,
};

/**
 * =====================================================
 *  FONCTION : GetBlockListComponent()
 * -----------------------------------------------------
 *  Retourne le composant de section approprié
 *  en fonction du type fourni.
 * 
 *  Exemple :
 *    GetBlockListComponent("list-a-hero") ➜ PageSectionBlockListA
 * =====================================================
 */
export const GetBlockListComponent = (type: string) => {
    if (!type) return;
    const key = Object.keys(blockComponents).find((k) => type.startsWith(k));
    return key ? blockComponents[key] : undefined;
};

/**
 * =====================================================
 *  FONCTION : GetFooterComponent()
 * -----------------------------------------------------
 *  Retourne le composant de pied de page approprié
 *  selon le type de section passé en paramètre.
 * 
 *  Exemple :
 *    GetFooterComponent("footer-a") ➜ PageSectionFooterA
 * =====================================================
 */
export const GetFooterComponent = (type: string) => {
    if (!type) return;
    const key = Object.keys(footerComponents).find((k) => type.startsWith(k));
    return key ? footerComponents[key] : undefined;
};

/**
 * =====================================================
 *  FONCTION : GetCtaComponent()
 * -----------------------------------------------------
 *  Retourne le composant CTA (Call-To-Action) correspondant
 *  au type de section fourni.
 * 
 *  Exemple :
 *    GetCtaComponent("cta-secondary-hero") ➜ PageSectionCommonCtaSecondary
 * =====================================================
 */
export const GetCtaComponent = (type: string) => {
    if (!type) return;
    const key = Object.keys(ctaComponents).find((k) => type.startsWith(k));
    return key ? ctaComponents[key] : undefined;
};
