import { defineType } from "sanity";
import { StrategySchemaField } from ".";

export const HomeStrategyType = defineType({
    name: 'strategyType',
    title: 'Strategy Object',
    type: 'object',
    fields: StrategySchemaField.fields,
});