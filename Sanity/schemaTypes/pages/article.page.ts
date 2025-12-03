import { MdEdit } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const articlePage = defineType({
    name: 'articlePage',
    title: 'Article Page',
    type: 'document',
    icon: MdEdit,
    fields: [
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Photo de Couverture',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Titre de l\'article',
            type: 'locale',
        }),
        defineField({
            name: 'author',
            title: 'Auteur de l\'article',
            type: 'string',
        }),
        defineField({
            name: 'topTags',
            title: 'Tags du haut',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'bottomTags',
            title: 'Tags du bas',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'content',
            title: 'Texte de l\'article',
            type: 'localeText',
        }),

    ],
    preview: {
        select: {
            titleFr: 'title.fr',
            author: 'Author',
        },
        prepare({ titleFr, author }) {
            return {
                title: titleFr,
                subtitle: author,
            }
        },
    },
})
