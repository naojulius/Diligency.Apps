import { defineField, defineType } from 'sanity'

export const Icons = defineType({
  name: 'icon',
  title: 'Icône',
  type: 'document',
  description: 'Icône à choisir parmi celles disponibles sur https://icones.js.org/.',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de l\'icône',
      type: 'string',
      description: 'Saisissez le nom de l\'icône au format "lucide:github" ou "lucide-github". Les deux formats sont valides. Les icônes proviennent de la collection Lucide sur https://icones.js.org/',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
})