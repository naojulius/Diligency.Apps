import { defineField, defineType } from "sanity";

export const infoSchema = defineType({
    name: 'info',
    title: 'Information',
    type: 'object',
    fields: [
        defineField({ name: 'open', title: "Ouverture", type: 'locale' }),
        defineField({ name: 'email', title: "Emails", type: 'string' }),
        defineField({ name: 'phone', title: "Prénom", type: 'string' }),
        defineField({ name: 'address', title: "Adresse", type: 'string' }),
        defineField({ name: 'social', title: "Réseau sociaux", type: 'array', of: [{ type: 'social' }] }),
    ],
})