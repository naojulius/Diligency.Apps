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
            of: [{ type: 'locale' }],
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'locale',
            description: 'Sous-titre affiché sous le titre principal dans la section Hero.',
        }),
        defineField({
            name: 'reserveStrategyCall',
            title: 'CTA Reservez un appel stratégique',
            type: 'locale',
            description: 'Texte affiché du CTA dans la section Hero.',
        }),
        defineField({
            name: 'applyMyProject',
            title: 'CTA soummetre Mon projet',
            type: 'locale',
            description: 'Texte affiché du CTA dans la section Hero.',
        }),
    ],
}