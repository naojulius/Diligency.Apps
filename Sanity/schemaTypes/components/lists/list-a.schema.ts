// schemas/item.ts
import { defineField, defineType } from 'sanity'

export const listA = defineType({
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [
        defineField({ name: 'id', type: 'string', title: 'ID' }),
        defineField({ name: 'price', type: 'string', title: 'Prix' }),
        defineField({ name: 'title', type: 'array', title: 'Title', of: [{ type: 'locale' }] }),
        defineField({ name: 'icon', type: 'string', title: 'Icon' }),
        defineField({ name: 'name', type: 'locale', title: 'Name' }),
        defineField({ name: 'text', type: 'locale', title: 'Text' }),
        defineField({ name: 'image', type: 'string', title: 'Image', hidden: ({ parent }) => !parent?.image }),
        defineField({ name: 'list', type: 'array', title: 'List', of: [{ type: "list" }] }),
        defineField({ name: 'description', type: 'locale', title: 'Description' }),
        defineField({ name: 'features', type: 'array', title: 'Offer Features', of: [{ type: "locale" }] }),
    ],
})
