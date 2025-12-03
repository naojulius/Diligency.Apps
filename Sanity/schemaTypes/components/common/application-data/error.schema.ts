import { defineField, defineType } from "sanity";

export const applicationErrorSchema = defineType({
    name: 'applicationError',
    title: 'Error',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'array', of: [{ type: "locale" }] }),
        defineField({ name: 'description', type: 'locale' }),
    ],
})