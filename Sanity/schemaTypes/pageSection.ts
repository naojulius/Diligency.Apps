import { defineField, defineType } from "sanity";
import { MdHome as icon } from 'react-icons/md'

export const HomePageSchema = {
    name: 'home',
    title: 'Page - Accueil',
    type: 'document',
    description: 'Page d\'accueil (Home) du site web',
    icon,
    fields: [
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'string',
        }),
    ],
}
