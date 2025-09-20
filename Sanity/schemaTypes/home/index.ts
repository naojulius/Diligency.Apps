import { MdHome } from 'react-icons/md';
import { defineField, defineType } from 'sanity';
import { HeroSchema } from './hero';
import { StrategySchema } from './strategy';

export const HomeSchema = defineType({
    name: 'home',
    title: 'Page - Home',
    type: 'document',
    description: 'La page d\'accueil de Diligency.',
    icon: MdHome,
    fields: [
        defineField(HeroSchema),
        defineField(StrategySchema),

    ],
    preview: {
        select: {
            titles: 'hero.title',
            subtitle: 'hero.subtitle.en',
        },
        prepare(selection) {
            const combinedTitle = Array.isArray(selection.titles)
                ? selection.titles.map(t => t.en).join(' ')
                : 'No title';
            return {
                title: "Home - Page",
                subtitle: combinedTitle || '',
            };
        },
    },
});