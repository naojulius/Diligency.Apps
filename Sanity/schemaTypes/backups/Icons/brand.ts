import { defineType, defineField } from 'sanity'

export const BrandSchema = defineType({
  name: 'brand',
  title: 'Icône techs',
  type: 'document',
  description: 'Liste des marques associées à une icône.',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la marque',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'reference',
      to: [{ type: 'icon' }],
      description: 'Sélectionnez une icône existante définie dans le type "icon".',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'icon.name',
    },
  }
})
