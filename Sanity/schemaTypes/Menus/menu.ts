import { defineType, defineField } from 'sanity'

export const MenuSchema = defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    description: 'Ce serait le menus, humberger menu',
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
            description: "",
        }),
        defineField({
            name: 'traduction',
            title: 'Traduction',
            type: 'string',
            description: "devrais etre pareil que celui de la traduction. ex:hero.menu.agency pour agence, cela afin de pouvoir traduire le texte en d'autre langue",
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'string',
            description: "liens de la page, sans https://",
        }),
        defineField({
            name: 'content',
            title: 'Sub-Menu',
            type: 'reference',
            to: [{ type: 'submenu' }],
            description: 'Sélectionnez une sub-menu définie dans le type "sub-menu".',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'link',
        },
    }
})
