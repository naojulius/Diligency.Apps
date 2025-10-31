import { defineField, defineType } from "sanity";

export const response = defineType({
    name: 'response',
    title: 'Reponse',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: "Title", type: 'locale' }),
    ],
})