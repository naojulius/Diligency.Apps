import { defineField, defineType } from "sanity";
import { FooterType } from "../../interfaces/type/footer-type";

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: FooterType,
                layout: 'dropdown'
            }
        }),
        defineField({
            name: 'title',
            type: 'locale',
        }),
        defineField({
            name: 'text',
            type: 'locale'
        }),
        defineField({
            name: 'cta',
            type: 'array',
            of: [{ type: 'cta' }]
        }),
    ],
})