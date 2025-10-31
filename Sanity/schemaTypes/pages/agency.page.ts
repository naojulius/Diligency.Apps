import { MdPageview } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const agencyPage = defineType({
    name: 'agencyPage',
    title: 'Agency Page',
    type: 'document',
    icon: MdPageview,
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
        defineField({
            name: 'faq',
            title: 'FAQ',
            type: 'faq',
        }),
        defineField({
            name: 'footer',
            title: 'Footer Section',
            type: 'footer',
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
            let title = _id.toUpperCase()
            if (title == "JOBCARRIER") {
                title = "JOB & CARRIER"
            }

            return {
                title: `${title}`,
                subtitle: subtitle || '',
            }
        },
    }
})
