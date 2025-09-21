import { defineField } from "sanity";

export const StrategySchemaField = {
    name: 'strategy',
    title: 'Introduction Strategique',
    type: 'object',
    fields: [
        {
            name: 'section',
            title: 'Section',
            type: 'string',
            initialValue: 'Strategy',
            readOnly: true,
            description: 'Section de la page d\'accueil. Valeur en mode lecture uniquement.',
        },
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
            description: 'Titre principal affiché dans la section Introduction Strategique. Peut contenir plusieurs parties pour différentes langues.',
            of: [{ type: 'locale' }],
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'locale',
            description: 'Sous-titre affiché sous le titre principal dans la section Introduction strategique.',
        }),
    ],
}