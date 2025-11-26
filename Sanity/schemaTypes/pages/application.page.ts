import { MdFolder } from "react-icons/md";
import { defineField, defineType } from 'sanity';

export const applicationPage = defineType({
    name: 'applicationPage',
    title: 'Applicationt Page',
    type: 'document',
    icon: MdFolder,
    fields: [
        // -------------------------------
        // DETAILS (Project Details)
        // -------------------------------
        defineField({
            name: "projectName",
            title: "Nom du projet",
            type: "string",
        }),

        defineField({
            name: "projectType",
            title: "Type du projet",
            type: "string",
        }),

        defineField({
            name: "deadline",
            title: "Délai",
            type: "string",
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),

        // -------------------------------
        // ACCOMPAGNEMENT (Guidance)
        // -------------------------------
        defineField({
            name: "analyse",
            title: "Analyse & conseil stratégique",
            type: "boolean",
        }),

        defineField({
            name: "design",
            title: "Design / UX",
            type: "boolean",
        }),

        defineField({
            name: "dev",
            title: "Développement",
            type: "boolean",
        }),

        defineField({
            name: "maintenance",
            title: "Maintenance & hébergement",
            type: "boolean",
        }),

        defineField({
            name: "autre",
            title: "Autre (optionnel)",
            type: "string",
        }),

        // -------------------------------
        // TECH (Tech stack)
        // -------------------------------
        defineField({
            name: "techs",
            title: "Technologies",
            type: "string",
            description: "Liste des technologies utilisées dans le projet",
        }),

        defineField({
            name: "hasSpecs",
            title: "Avez-vous un cahier des charges ?",
            type: "boolean",
        }),
    ],
    preview: {
        select: {
            title: "projectName",
            subtitle: "projectType",
        },
        prepare({ title, subtitle }) {
            return {
                title: title || "Projet sans nom",
                subtitle: subtitle || "Type non défini",
            };
        },
    },
})
