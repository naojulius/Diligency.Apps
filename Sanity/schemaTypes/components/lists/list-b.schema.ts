import { defineField, defineType } from 'sanity'

export const listB = defineType({
    name: 'list',
    title: 'List',
    type: 'object',
    fields: [
        defineField({ name: 'icon', type: 'string', title: 'Icon' }),
        defineField({ name: 'name', type: 'locale', title: 'Name' }),
        defineField({ name: 'text', type: 'locale', title: 'Text' }),
        defineField({ name: 'image', type: 'string', title: 'Image', hidden: ({ parent }) => !parent?.image }),
    ],
})