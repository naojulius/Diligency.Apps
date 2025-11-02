import { defineField, defineType } from "sanity";

export const socialSchema = defineType({
    name: 'social',
    title: 'Réseau sociaux',
    type: 'object',
    fields: [
        defineField({ name: 'name', title: "Nom", type: 'string' }),
        defineField({ name: 'link', title: "Lien", type: 'string' }),
        defineField({ name: 'icon', title: "Icon", type: 'string' }),
    ],
})