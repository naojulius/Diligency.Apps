import { defineField } from "sanity";

export const HeroSchemaField = {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'section',
            title: 'Section',
            type: 'string',
            initialValue: 'Hero',
            readOnly: true,
            description: 'Section de la page d\'accueil. Valeur en mode lecture uniquement.',
        },
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            description: 'Titre principal affiché dans la section Hero. Peut contenir plusieurs parties pour différentes langues.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'en', title: 'English', type: 'string' },
                        { name: 'fr', title: 'Français', type: 'string' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'object',
            description: 'Sous-titre affiché sous le titre principal dans la section Hero.',
            fields: [
                { name: 'en', title: 'English', type: 'string' },
                { name: 'fr', title: 'Français', type: 'string' },
            ],
        }),
    ],
}