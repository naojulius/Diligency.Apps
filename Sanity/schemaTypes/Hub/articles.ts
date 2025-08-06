import { defineType, defineField } from 'sanity'

export const ArticleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  description: 'Ce type représente un article ou un billet de contenu rédigé, comprenant une image, un nom, un titre et un texte.',
  fields: [
    defineField({
      name: 'avatar',
      title: 'Photo',
      type: 'image',
      description: 'Image illustrative de l’article ou photo de l’auteur.',
    }),
    defineField({
      name: 'name',
      title: 'Nom & Prénom',
      type: 'string',
      description: 'Nom complet de l’auteur de l’article.',
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre du poste de l’auteur.',
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'text',
      description: 'Texte principal de l’article, incluant toutes les informations ou réflexions.',
    }),
  ],
  preview: {
    select: {
      title: 'name', // This will be shown as the title in the Sanity Studio
      subtitle: 'title', // Optional: the job title can be shown as subtitle
      media: 'avatar', // Optional: show the image in preview
    }
  }
})
