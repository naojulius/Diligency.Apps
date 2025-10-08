import type { Offer } from "./interface";

export const Text: Offer = {
    title: {
        fr: ["Deux niveaux de service,", "une même exigence."],
        en: ["Two service levels,", "the same commitment to excellence."]
    },
    subtitle: {
        fr: "Choisissez l’accompagnement qui correspond à votre niveau de maturité digitale.",
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
                fr: [
                    "RDV de cadrage stratégique (objectifs, besoins, attentes)",
                    "Développement sur-mesure selon cahier des charges",
                    "Appel de passation & conseils d’usage en fin de projet",
                    "Livrable prêt à l’emploi avec documentation de base"
                ],
                en: [
                    "Strategic planning meeting (goals, needs, expectations)",
                    "Custom development according to specifications",
                    "Handover call & usage guidance at the end of the project",
                    "Ready-to-use deliverable with basic documentation"
                ],
            },
            description: {
                fr: "Une solution professionnelle, claire et efficace pour lancer votre projet dans les meilleures conditions.",
                en: "A professional, clear, and effective solution to launch your project under the best conditions."
            }
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
                    "Tous les avantages de l’Offre Essentielle",
                    "10 heures de développement additionnel incluses",
                    "Support prioritaire 7j/7 pendant toute la phase projet ",
                    "Maintenance & correctifs inclus pendant 60 jours",
                    " Accompagnement renforcé à chaque étape"
                ],
                en: [
                    "All the benefits of the Essential Plan",
                    "10 additional development hours included",
                    "Priority support 7 days a week throughout the project phase",
                    "Maintenance & fixes included for 60 days",
                    "Enhanced support at every step"
                ],
            },
            description: {
                fr: "Une expérience complète, avec plus de confort, de temps et de réactivité.",
                en: "A complete experience, with more comfort, time, and responsiveness."
            }
        },
    ],
    cta: {
        fr: "Comparer les offres",
        en: "Compare Offer"
    }
};
