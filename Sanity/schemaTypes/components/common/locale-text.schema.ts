import { defineField, defineType } from 'sanity'

export const localeText = defineType({
    name: 'localeText',
    title: 'Locale',
    type: 'object',
    fields: [
        defineField({ name: 'fr', title: 'Français', type: 'text' }),
        defineField({ name: 'en', title: 'Anglais', type: 'text' }),
    ],
})