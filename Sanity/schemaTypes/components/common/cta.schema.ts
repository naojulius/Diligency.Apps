import { defineField, defineType } from "sanity";
import { CtaType } from "../../interfaces/type/cta-type";

export const cta = defineType({
    name: 'cta',
    title: 'CTA',
    type: 'object',
    fields: [
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'text', type: 'locale' }),
        defineField({ name: 'link', type: 'string' }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: CtaType,
                layout: 'dropdown'
            }
        }),
    ],
})