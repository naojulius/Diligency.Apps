// schemas/item.ts
import { defineField, defineType } from 'sanity'

export const listA = defineType({
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [
        defineField({ name: 'icon', type: 'string', title: 'Icon' }),
        defineField({ name: 'name', type: 'locale', title: 'Name' }),
        defineField({ name: 'text', type: 'locale', title: 'Text' }),
    ],
})
