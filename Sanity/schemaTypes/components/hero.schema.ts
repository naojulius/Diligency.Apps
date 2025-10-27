import { defineField, defineType } from 'sanity'
export const hero = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'array', of: [{ type: 'locale' }] }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'locale' }),
        defineField({ name: 'image', title: 'Image', type: 'string' }),
    ],
})
