import { defineType, defineField } from 'sanity'

export const FaqSchemas = defineType({
  name: 'faq',
  title: 'Foires aux questions',
  type: 'document',
  description: 'Question réponse',
  fields: [
    defineField({
      name: 'q',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'r',
      title: 'Réponse',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'q',
      subtitle: 'r'
    }
  }
})