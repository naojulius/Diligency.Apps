import type { Offer } from "./interface";

export const Text: Offer = {
    title: {
        fr: ["Deux formules.", "Un même engagement de qualité"],
        en: ["Two plans.", "One same commitment to quality"]
    },
    subtitle: {
        fr: "Choisissez l’accompagnement qui correspond à votre niveau de maturité digitale",
        en: "Choose the support that matches your level of digital maturity"
    },
    plans: [
        {
            id: "essential",
            icon: "lucide:heart-plus",
            title: {
                fr: "Essentiel",
                en: "Essential",
            },
            price: "0",
            features: {
                fr: ["Cadrage", "Création", "Consulting final"],
                en: ["Scoping", "Creation", "Final consulting"],
            },
        },
        {
            id: "premium",
            icon: "lucide:crown",
            title: {
                fr: "Premium",
                en: "Premium",
            },
            price: "29",
            features: {
                fr: [
                    "Tout Essentiel inclus",
                    "+ 10h incluses",
                    "Support 7j/7",
                    "Maintenance 2 mois",
                ],
                en: [
                    "Everything in Essential",
                    "+ 10h included",
                    "Support 24/7",
                    "2 months maintenance",
                ],
            },
        },
    ],
    cta: {
        fr: "Comparer les offres",
        en: "Compare Offer"
    }
};
