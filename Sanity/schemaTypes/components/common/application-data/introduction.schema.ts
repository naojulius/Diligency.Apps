import { defineField, defineType } from "sanity";

export const applicationIntroductionSchema = defineType({
    name: 'applicationIntroduction',
    title: 'Introduction',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'array', of: [{ type: "locale" }] }),
        defineField({ name: 'description', type: 'locale' }),
    ],
})