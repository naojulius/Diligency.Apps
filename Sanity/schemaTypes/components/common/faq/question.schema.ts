import { defineField, defineType } from "sanity";

export const question = defineType({
    name: 'question',
    title: 'Question',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: "Title", type: 'locale' }),
    ],
})