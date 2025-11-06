import { MdHome } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: MdHome,
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
            type: 'array',
            of: [{ type: 'footer' }]
        }),
    ],
    preview: {
        select: {
            subtitle: 'hero.subtitle.fr',
            _id: '_id',
        },
        prepare(selection) {
            const { _id, subtitle } = selection

            return {
                title: `${_id.toUpperCase()}`,
                subtitle: subtitle || '',
            }
        },
    }
})
