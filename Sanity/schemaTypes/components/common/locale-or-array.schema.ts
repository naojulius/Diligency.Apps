import { defineField, defineType } from "sanity";

export const localeOrArray = defineType({
    name: 'localeOrArray',
    title: 'Locale or Array of Locales',
    type: 'object',
    fields: [
        defineField({
            name: 'single',
            title: 'Single Locale',
            type: 'locale',
            hidden: ({ parent }) => !!parent?.multiple,
        }),
        defineField({
            name: 'multiple',
            title: 'Multiple Locales',
            type: 'array',
            of: [{ type: 'locale' }],
            hidden: ({ parent }) => !!parent?.single,
        }),
    ],
})