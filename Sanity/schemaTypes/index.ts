import { block } from "./components/common/block.schema";
import { cta } from "./components/common/cta.schema";
import { footer } from "./components/common/footer.schema";
import { hero } from "./components/common/hero.schema";
import { locale } from "./components/common/locale.scema";
import { blocksListSchema } from "./components/lists";
import { agencyPage } from "./pages/agency.page";

export const schemaTypes = [
    //#region Components
    locale,
    hero,
    block,
    cta,
    footer,
    ...blocksListSchema,
    //#endregion

    //#region Schema

    agencyPage

    //#endregion
]
