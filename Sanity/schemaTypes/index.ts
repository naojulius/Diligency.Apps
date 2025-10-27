import { block } from "./components/block.schema";
import { hero } from "./components/hero.schema";
import { listA } from "./components/lists/list-a.schema";
import { locale } from "./components/locale.scema";
import { agencyPage } from "./pages/agency.page";

export const schemaTypes = [
    //#region Components
    locale,
    hero,
    block,
    listA,
    //#endregion

    //#region Schema

    agencyPage

    //#endregion
]
