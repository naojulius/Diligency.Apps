import {
    PageSectionBlockListA,
    PageSectionBlockListB,
    PageSectionBlockListC,
    PageSectionBlockListD,
    PageSectionBlockListE,
    PageSectionBlockListF,
    PageSectionBlockListG,
    PageSectionBlockListH,
    PageSectionBlockListI,
    PageSectionBlockListJ,
} from "#components";

import { LayoutA } from "./list-a.type";
import { LayoutB } from "./list-b.type";
import { LayoutC } from "./list-c.type";
import { LayoutD } from "./list-d.type";
import { LayoutE } from "./list-e.type";
import { LayoutF } from "./list-f.type";
import { LayoutG } from "./list-g.type";
import { LayoutH } from "./list-h.type";
import { LayoutI } from "./list-i.type";
import { LayoutJ } from "./list-j.type";

export type Layouts =
    | LayoutA
    | LayoutB
    | LayoutC
    | LayoutD
    | LayoutE
    | LayoutF
    | LayoutG
    | LayoutH
    | LayoutI
    | LayoutJ;

/**
 * =====================================================
 *  MAPPING DES COMPOSANTS DE TYPE "BLOCK"
 * -----------------------------------------------------
 *  Cet objet associe chaque préfixe de type de section
 *  (ex : "list-a", "list-b") à son composant correspondant.
 * 
 *  Il permet à GetBlockListComponent() de retourner
 *  dynamiquement le bon composant sans multiplier
 *  les conditions "if".
 * =====================================================
 */
export const blockComponents: Record<string, any> = {
    "list-a": PageSectionBlockListA,
    "list-b": PageSectionBlockListB,
    "list-c": PageSectionBlockListC,
    "list-d": PageSectionBlockListD,
    "list-e": PageSectionBlockListE,
    "list-f": PageSectionBlockListF,
    "list-g": PageSectionBlockListG,
    "list-h": PageSectionBlockListH,
    "list-i": PageSectionBlockListI,
    "list-j": PageSectionBlockListJ,
};