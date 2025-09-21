import { LocaleSchema } from "./common/locale";
import { HomeSchema } from "./home";
import { HeroSchemaField } from "./home/hero";
import { HomeHeroType } from "./home/hero/hero.type";
import { StrategySchemaField } from "./home/strategy";
import { HomeStrategyType } from "./home/strategy/strategy.type";
import { OptionSchema } from "./options";

export const schemaTypes = [
  LocaleSchema,
  HomeStrategyType,
  HomeHeroType,
  StrategySchemaField,
  HeroSchemaField,

  OptionSchema,
  HomeSchema
]
