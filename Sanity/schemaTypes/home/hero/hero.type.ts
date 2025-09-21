import { defineType } from "sanity";
import { HeroSchemaField } from ".";

export const HomeHeroType = defineType({
    name: 'heroType',
    title: 'Hero Object',
    type: 'object',
    fields: HeroSchemaField.fields,
});