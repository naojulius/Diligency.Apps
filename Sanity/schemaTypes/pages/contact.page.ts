import { MdPeople } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
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
            name: 'subtitle',
            title: 'Sous Titre',
            type: 'locale',
        }),
        defineField({
            name: 'form',
            title: 'Forms/Champs',
            type: 'form',
        }),
        defineField({
            name: 'info',
            title: 'Information',
            type: 'info',
        }),
    ],
    preview: {
        select: {
            subtitleFr: 'title.fr',
        },
        prepare({ subtitleFr }) {
            return {
                title: 'Données',
                subtitle: 'Contact',
            }
        },
    },
})
