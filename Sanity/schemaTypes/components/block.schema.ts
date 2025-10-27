import { defineField, defineType } from 'sanity'
import { blockList } from '../default-list/list-type'
export const block = defineType({
    name: 'blockType',
    title: 'Blocks',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: blockList,
                layout: 'dropdown'
            }
        }),
        defineField({ name: 'title', title: 'Title', type: 'array', of: [{ type: 'locale' }] }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'locale' }),

        //List A block
        defineField({
            name: 'items',
            title: 'List A Block',
            type: 'array',
            of: [{ type: 'item' }],
            // hidden: ({ parent }) => parent?.type !== 'list-a',
        }),
    ],
})
