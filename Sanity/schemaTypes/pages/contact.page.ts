import { MdPeople } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const agencyPage = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    icon: MdPeople,
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'locale',
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
})
