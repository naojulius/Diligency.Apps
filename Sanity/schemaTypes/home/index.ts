import { defineType } from 'sanity';
import { HomeSectionPreviewSelect, HomeSections } from './section';

export const HomeSchema = defineType({
    name: 'home',
    title: 'Page - Home',
    type: 'document',
    fields: [
        {
            name: 'hero',
            title: 'Hero',
            type: 'heroType',
            hidden: ({ parent }) => !parent?.hero, // hidden if hero object is empty
        },
        {
            name: 'strategy',
            title: 'Introduction Strategique',
            type: 'strategyType',
            hidden: ({ parent }) => !parent?.strategy, // hidden if strategy object is empty
        },
    ],
    preview: {
        select: HomeSectionPreviewSelect,
        prepare(raw) {
            const sections = HomeSections;
            let section = 'No section';
            let titlesArray: any[] = [];

            for (const s of sections) {
                const secKey = `${s}Section`;
                const titlesKey = `${s}Titles`;
                if (raw[secKey]) {
                    section = raw[secKey];
                    titlesArray = raw[titlesKey] || [];
                    break;
                }
            }

            const combinedTitle = Array.isArray(titlesArray)
                ? titlesArray.map((t: { en?: string; fr?: string }) => `${t?.fr || ''} - ${t?.en || ''}`).join(' ')
                : 'No title';

            return {
                title: section,
                subtitle: combinedTitle,
            };
        },
    },
});
