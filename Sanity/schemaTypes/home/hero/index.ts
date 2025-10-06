import { defineField } from "sanity";

export const HeroSchemaField = {
    name: 'hero',
    type: 'object',
    options: { collapsible: true },
    fields: [
        {
            name: 'section',
            type: 'string',
            initialValue: 'Hero',
            readOnly: true,
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
            name: 'applyMyProject',
            title: 'CTA: Soumettre mon projet',
            type: 'cta',
        }),
        defineField({
            name: 'reserveStrategyCall',
            title: 'CTA: Reservez un appel stratégique',
            type: 'cta',
        }),

        defineField({
            name: 'link',
            title: 'Video de fond',
            type: 'link',
            description: 'Background video de la section Hero.',
        }),
    ],
}