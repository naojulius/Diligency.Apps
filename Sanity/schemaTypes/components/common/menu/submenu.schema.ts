import { defineField, defineType } from "sanity";

export const subMenuSchema = defineType({
    name: 'submenu',
    title: 'Sous Menu',
    type: 'object',
    fields: [
        defineField({ name: 'name', type: 'locale' }),
        defineField({ name: 'link', type: 'string' }),
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'visible', type: 'boolean' }),
        defineField({ name: 'text', type: 'locale' }),
    ],
})