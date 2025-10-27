import { defineField, defineType } from 'sanity'

export const locale = defineType({
    name: 'locale',
    title: 'Locale',
    type: 'object',
    fields: [
        defineField({ name: 'fr', title: 'Français', type: 'string' }),
        defineField({ name: 'en', title: 'Anglais', type: 'string' }),
    ],
})