import { MdHome } from 'react-icons/md';
import { defineField, defineType } from 'sanity';
import { HeroSchemaField } from './hero';
import { StrategySchemaField } from './strategy';

export const HomeSchema = defineType({
    name: 'home',
    title: 'Page - Home',
    type: 'document',
    description: 'La page d\'accueil de Diligency.',
    icon: MdHome,
    fields: [
        defineField(HeroSchemaField),
        defineField(StrategySchemaField),
    ],
    preview: {
        select: {
            section: 'hero.section',
            titles: 'hero.title',
        },
        prepare({ section, titles }) {
            const combinedTitle = Array.isArray(titles)
                ? titles.map((t: { en?: string; fr?: string }) => `${t?.fr} - ${t?.en}`).join(' ')
                : 'No title';

            return {
                title: section || 'No section',
                subtitle: combinedTitle,
            };
        },
    },
});