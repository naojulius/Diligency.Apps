import { defineField, defineType } from "sanity";

export const applicationSuccessSchema = defineType({
    name: 'applicationSuccess',
    title: 'Introduction',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'array', of: [{ type: "locale" }] }),
        defineField({ name: 'description', type: 'locale' }),
    ],
})