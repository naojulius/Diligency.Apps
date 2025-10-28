import { MdSettings } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const optionSchema = defineType({
    name: 'option',
    title: 'Options',
    type: 'document',
    description: 'Options pour le visuel du site web.',
    icon: MdSettings,
    fields: [
        defineField({
            name: 'property',
            title: 'Proprieté',
            type: 'string',
            description: 'Proipieté de l\'option',
        }),
        defineField({
            name: 'value',
            title: 'Valeur',
            type: 'string',
            description: 'valeur de l\'option',
        }),
    ],
    preview: {
        select: {
            property: 'property',
            value: 'value',
        },
        prepare(selection) {
            // Insert a space before each uppercase letter (except the first letter)
            const spacedProperty = selection.property
                ? selection.property.replace(/([a-z])([A-Z])/g, '$1 $2')
                : '';
            return {
                title: spacedProperty,
                subtitle: selection.value,
            };
        },
    },
})