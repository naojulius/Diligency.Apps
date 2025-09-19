import { defineField } from "sanity";
import { Title } from "./title";

export const Hero = {
    type: 'object',
    name: 'hero',
    title: 'Hero',
    description: "Les textes pour la sections Hero en question",
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'array',
            of: [{ type: 'locale' }],
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'array',
            of: [{ type: 'locale' }],
        }),
    ],
}