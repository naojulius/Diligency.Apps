import { CtaSchema } from "./common/cta";
import { IconSchema } from "./common/icon";
import { LinkSchema } from "./common/link";
import { LocaleSchema } from "./common/locale";
import { HomeSchema } from "./home";
import { HeroSchemaField } from "./home/hero";
import { HomeHeroType } from "./home/hero/hero.type";
import { StrategySchemaField } from "./home/strategy";
import { HomeStrategyType } from "./home/strategy/strategy.type";
import { MailSchema } from "./mails";
import { OptionSchema } from "./options";

export const schemaTypes = [
  CtaSchema,
  IconSchema,
  LinkSchema,
  LocaleSchema,
  HomeStrategyType,
  HomeHeroType,
  StrategySchemaField,
  HeroSchemaField,

  OptionSchema,
  HomeSchema,
  MailSchema
]
