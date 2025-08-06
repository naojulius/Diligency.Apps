import { defineType, defineField } from 'sanity'

export const EngagementSchema = defineType({
    name: 'engagement',
    title: 'Engagement',
    type: 'document',
    description: '',
    fields: [
        defineField({
            name: 'id',
            title: 'Numéro',
            type: 'number',
            validation: Rule => Rule
                .required()
                .min(1)
                .error('Le numéro doit être un entier supérieur ou égal à 1'),
            description: 'Un numéro unique, supérieur ou égal à 1',
        }),
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: Rule => Rule.required().error('Le titre est requis.'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().error('La description est requise.'),
        }),
        defineField({
            name: 'icon',
            title: 'Icône',
            type: 'reference',
            to: [{ type: 'icon' }],
            description: 'Sélectionnez une icône existante définie dans le type "icon".',
            validation: Rule => Rule.required().error('L’icône est requise.'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'icon.name',
        },
    }
})
