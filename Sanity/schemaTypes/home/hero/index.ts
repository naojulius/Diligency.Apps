import { defineField } from "sanity";

export const HeroSchema = {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'array',
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
            fields: [
                { name: 'en', title: 'English', type: 'string' },
                { name: 'fr', title: 'Français', type: 'string' },
            ],
        }),
    ],
}