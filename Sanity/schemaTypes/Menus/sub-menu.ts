import { defineType, defineField } from 'sanity'

export const SubMenuSchema = defineType({
    name: 'submenu',
    title: 'Sub Menu',
    type: 'document',
    description: 'Ce serait le sub-menus, humberger menu',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: "Description du sub-menu",
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
            title: 'title',
            subtitle: 'link',
        },
    }
})
