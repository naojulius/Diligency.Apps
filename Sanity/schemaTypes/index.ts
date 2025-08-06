import { FaqSchemas } from "./Faq/faq";
import { EngagementSchema } from "./Home/About/engagment";
import { ArticleType } from "./Hub/articles";
import { BrandSchema } from "./Icons/brand";
import { IconSchemas } from "./Icons/icon";
import { MenuSchema } from "./Menus/menu";
import { SubMenuSchema } from "./Menus/sub-menu";

export const schemaTypes = [
    ArticleType,
    IconSchemas,
    BrandSchema,
    FaqSchemas,
    EngagementSchema,
    SubMenuSchema,
    MenuSchema
]
