import { defineField, defineType } from 'sanity';

export const Menus = defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    description: 'Ce serait le menus, humberger menu',
    fields: [
        defineField({
            name: 'visible',
            title: 'Visibilité',
            type: 'boolean',
            description: 'Détermine si cet élément est visible ou non.',
        }),
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
            name: 'icon',
            title: 'Icône',
            type: 'reference',
            to: [{ type: 'icon' }],
            description: 'Sélectionnez une icône existante définie dans le type "icon".',
        }),
        defineField({
            name: 'text',
            title: 'Texte',
            type: 'string',
            description: "texte non obligatoire, juste pour visualisation Sanity",
        }),
        defineField({
            name: 'locale',
            title: 'Traduction',
            type: 'string',
            description: "devrais etre pareil que celui de la traduction. ex:hero.menu.agency pour agence, cela afin de pouvoir traduire le texte en d'autre langue",
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'string',
            description: "liens de la page, sans https://diligency",
        }),
        defineField({
            name: 'children',
            title: 'Sous-Menus',
            type: 'reference',
            to: [{ type: 'submenu' }],
            description: 'Sélectionnez une sub-menu définie dans le type "sub-menu".',
        }),
    ],
    preview: {
        select: {
            title: 'text',
            subtitle: 'link',
        },
    }
})