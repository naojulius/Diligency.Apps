import { defineField, defineType } from "sanity";

export const typeSchema = defineType({
    name: 'contacttype',
    title: 'Type',
    type: 'object',
    fields: [
        defineField({ name: 'label', title: "Label", type: 'locale' }),
        defineField({ name: 'value', title: "Valeur", type: 'string' }),
    ],
})