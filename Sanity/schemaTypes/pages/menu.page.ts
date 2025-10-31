import { MdFormatListNumbered } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const menuPage = defineType({
    name: 'menuPage',
    title: 'Menu Page',
    type: 'document',
    icon: MdFormatListNumbered,
    fields: [
        defineField({ name: 'name', type: 'locale' }),
        defineField({ name: 'link', type: 'string' }),
        defineField({ name: 'icon', type: 'string' }),
        defineField({ name: 'visible', type: 'boolean' }),
        defineField({ name: 'children', type: 'array', of: [{ type: 'submenu' }] }),
    ],
    preview: {
        select: {
            title: 'name.fr',
            subtitle: 'link',
            media: 'icon',
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            return {
                title: title || 'Sans nom (fr)',
                subtitle: subtitle ? `Lien: ${subtitle}` : 'Aucun lien défini',
                media: MdFormatListNumbered, // fallback icon
            };
        },
    },
})
