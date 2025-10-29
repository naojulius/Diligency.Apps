import { defineField, defineType } from 'sanity'
import { ListType } from '../../interfaces/type/list-type'
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
                list: ListType,
                layout: 'dropdown'
            }
        }),

        defineField({ name: 'title', title: 'Title', type: 'array', of: [{ type: 'locale' }] }),

        defineField({ name: 'subtitle', title: 'Subtitle', type: 'locale' }),
        defineField({ name: 'subtitles', title: 'Subtitle', type: 'array', of: [{ type: 'locale' }] }),

        defineField({ name: 'image', title: 'Image', type: 'string', hidden: ({ parent }) => !parent?.image }),
        defineField({ name: 'cta', title: 'Cta', type: 'array', of: [{ type: 'cta' }], hidden: ({ parent }) => !parent?.cta }),
        //List A block
        defineField({
            name: 'items',
            title: 'List Block',
            type: 'array',
            of: [{ type: 'item' }],
            // hidden: ({ parent }) => parent?.type !== 'list-a',
        }),
    ],
})
