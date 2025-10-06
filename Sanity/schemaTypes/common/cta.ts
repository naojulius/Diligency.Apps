import { defineField, defineType } from 'sanity';

export const CtaSchema = defineType({
    name: 'cta',
    title: 'Call To Action',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Texte',
            type: 'locale',
        }),
        defineField({
            name: 'icon',
            title: 'Icône',
            type: 'icon',
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'link',
        }),
    ],
});