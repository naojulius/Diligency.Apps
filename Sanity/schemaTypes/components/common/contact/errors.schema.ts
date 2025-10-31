import { defineField, defineType } from "sanity";

export const errorsSchema = defineType({
    name: 'errors',
    title: 'Erreurs',
    type: 'object',
    fields: [
        defineField({ name: 'key', title: "Clé", type: 'string' }),
        defineField({ name: 'text', title: "Texte", type: 'locale' }),
    ],
})