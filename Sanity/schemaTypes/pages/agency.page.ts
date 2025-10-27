import { MdChevronRight } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export const agencyPage = defineType({
    name: 'agencyPage',
    title: 'Agency Page',
    type: 'document',
    icon: MdChevronRight,
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
        }),
        defineField({
            name: 'blocks',
            title: 'BLock Section',
            type: 'array',
            of: [{ type: 'blockType' }]
        }),
    ],
    preview: {
        select: {
            titles: 'hero.title',
            subtitle: 'hero.subtitle.fr',
            _id: '_id',
        },
        prepare(selection) {
            const { _id, titles, subtitle } = selection

            // Concatenate all titles for preview
            const concatenatedTitle = Array.isArray(titles)
                ? titles.map((t: any) => t.fr || t.en).join(' | ')
                : 'No title'

            return {
                title: `${_id.toUpperCase()}`,
                subtitle: subtitle || '',
            }
        },
    }
})
