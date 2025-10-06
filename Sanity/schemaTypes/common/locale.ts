import { defineType } from 'sanity';

export const LocaleSchema = defineType({
    name: 'locale',
    title: 'Traduction',
    type: 'object',
    fields: [
        {
            name: 'en',
            title: 'English',
            type: 'string',
        },
        { name: 'fr', title: 'Français', type: 'string' },
    ],
});
