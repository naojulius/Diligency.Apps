import { applicationData } from "./common/application-data";
import { block } from "./common/block.schema";
import { form } from "./common/contact";
import { cta } from "./common/cta.schema";
import { faq } from "./common/faq";
import { footer } from "./common/footer.schema";
import { hero } from "./common/hero.schema";
import { localeOrArray } from "./common/locale-or-array.schema";
import { locale } from "./common/locale.scema";
import { menu } from "./common/menu";
import { blocksListSchema } from "./lists";

export const components = [
    locale,
    hero,
    block,
    cta,
    footer,
    localeOrArray,
    ...applicationData,
    ...faq,
    ...blocksListSchema,
    ...menu,
    ...form
]