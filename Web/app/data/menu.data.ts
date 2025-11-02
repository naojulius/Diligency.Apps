import { v4 as uuidv4 } from 'uuid';

export const MENU_DATA = [
    {
        _key: uuidv4(),
        name: {
            fr: "Agence",
            en: "Agency"
        },
        link: "/",
        icon: "lucide:square-user",
        visible: true,
        children: [
            {
                _key: uuidv4(),
                name: {
                    fr: "À propos",
                    en: "About"
                },
                link: "/agency/about",
                icon: "lucide:info",
                visible: true,
                texte: {
                    fr: "Applications métier sur-mesure : CRM, dashboard, marketplace… Plateformes web sécurisées, performantes, 100 % responsive et évolutives.",
                    en: "Custom business apps: CRM, dashboard, marketplace… Secure, high-performance web platforms, fully responsive and ready to scale."
                }

            },
            {
                _key: uuidv4(),
                name: {
                    fr: "Job & Carrière",
                    en: "Jobs & Careers"
                },
                link: "/agency/jobcarrier",
                icon: "lucide:briefcase",
                visible: true,
                texte: {
                    fr: "Découvrez les opportunités de carrière et les valeurs qui animent notre équipe. Rejoignez une agence en pleine croissance, où chaque talent compte.",
                    en: "Discover career opportunities and the values driving our team. Join a fast-growing agency where every talent matters."
                }
            },
            {
                _key: uuidv4(),
                name: {
                    fr: "Le Hub",
                    en: "The Hub"
                },
                link: "/agency/hub",
                icon: "lucide:network",
                visible: true,
                texte: {
                    fr: "Espace d’échange et de veille technologique. Suivez nos actualités, nos innovations et les tendances du digital.",
                    en: "A space for sharing and tech insights. Follow our latest news, innovations, and digital trends."
                }
            }
        ]
    },
    {
        _key: uuidv4(),
        name: {
            fr: "Services",
            en: "Services"
        },
        link: "/service",
        icon: "lucide:square-terminal",
        visible: true,
        children: [
            {
                _key: uuidv4(),
                name: {
                    en: "Web app",
                    fr: "Application web"
                },
                link: "/service/web-app",
                icon: "lucide:globe",
                visible: true,
                texte: {
                    fr: "Applications web sur mesure : CRM, tableau de bord, marketplace, ou outil de gestion. Sécurité, performance et évolutivité au cœur du développement.",
                    en: "Custom web applications: CRM, dashboard, marketplace, or management tool. Security, performance, and scalability at the core."
                }
            },
            {
                _key: uuidv4(),
                name: {
                    fr: "Sites vitrines",
                    en: "Showcase websites"
                },
                link: "/service/web-show",
                icon: "lucide:layers",
                visible: true,
                texte: {
                    fr: "Des sites vitrines élégants et rapides pour valoriser votre image et convertir vos visiteurs en clients.",
                    en: "Elegant, fast showcase websites to highlight your brand and turn visitors into clients."
                }
            },
            // {
            //     _key: uuidv4(),
            //     name: {
            //         fr: "E-commerce",
            //         en: "E-commerce"
            //     },
            //     link: "/service/e-commerce",
            //     icon: "lucide:view",
            //     visible: true,
            //     texte: {
            //         fr: "Des boutiques en ligne performantes, ergonomiques et optimisées pour la conversion et la fidélisation.",
            //         en: "High-performing online stores designed for conversion, usability, and customer loyalty."
            //     }
            // },
            {
                _key: uuidv4(),
                name: {
                    fr: "Solutions IT/IA",
                    en: "IT/AI Solutions"
                },
                link: "/service/it-ia",
                icon: "lucide:brain",
                visible: true,
                texte: {
                    fr: "Intelligence artificielle, automatisation, cloud, et intégration d’outils IT adaptés à vos enjeux stratégiques.",
                    en: "Artificial intelligence, automation, cloud, and IT tools tailored to your strategic challenges."
                }
            }
        ]
    },
    {
        _key: uuidv4(),
        name: {
            fr: "Contact",
            en: "Contact"
        },
        link: "/contact",
        icon: "lucide:messages-square",
        visible: true
    }
];
