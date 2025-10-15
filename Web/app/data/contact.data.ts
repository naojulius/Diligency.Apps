
export const CONTACT_DATA = {
    title: {
        fr: 'Entrons en contact',
        en: 'Get in Touch',
    },
    subtitle: {
        fr: 'Pour toute demande d’information ou de collaboration, notre équipe est disponible et prête à vous répondre rapidement.',
        en: 'For any questions or collaboration requests, our team is available and ready to respond quickly.',
    },
    form: {
        title: {
            en: "Get in touch",
            fr: "Entrons en contact"
        },
        name: {
            en: "First Name",
            fr: "Nom"
        },
        lastname: {
            en: "Last Name",
            fr: "Prénom",
        },
        email: {
            en: "Email",
            fr: "E-mail"
        },
        message: {
            en: "Your message",
            fr: "Votre message"
        },
        sendMessage: {
            fr: "Envoyer le message",
            en: "Send message"
        },
        type: [
            {
                label: {
                    fr: 'Appel stratégique',
                    en: 'Strategic call'
                },
                value: 'strategique'
            },
            {
                label: {
                    fr: 'Appel de découverte (Candidats / Public)',
                    en: 'Discovery call (Candidates / Public)'
                },
                value: 'decouverte'
            }
        ],
        errors: [
            {
                key: "INVALID_NAME",
                text: {
                    fr: "Le nom doit contenir au moins 2 caractères",
                    en: "The first name must contain at least 2 characters"
                }
            },
            {
                key: "INVALID_LAST_NAME",
                text: {
                    fr: "Le prénom doit contenir au moins 2 caractères",
                    en: "The last name must contain at least 2 characters"
                }
            },
            {
                key: "INVALID_EMAIL",
                text: {
                    fr: "Adresse email invalide",
                    en: "Invalid email address"
                }
            },
            {
                key: "INVALID_MESSAGE",
                text: {
                    fr: "Le message doit contenir au moins 10 caractères",
                    en: "The message must contain at least 10 characters"
                }
            }
        ]
    },

};
