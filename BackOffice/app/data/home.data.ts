import { v4 as uuidv4 } from 'uuid';
export const HOME_DATA = {
    hero: {
        section: 'Hero',
        title: [
            {
                _key: uuidv4(),
                en: 'Treat yourself to digital diligence',
                fr: 'Offrez-vous la diligence digitale'
            }
        ],
        subtitle: {
            en: 'Custom websites & applications designed for performance, clarity, and conversion',
            fr: 'Sites web & applications sur-mesure, pensés pour la performance, la clarté et la conversion'
        },
        ctaA: {
            text: {
                en: 'Book a strategy call',
                fr: 'Réserver un appel stratégique'
            },
            icon: "lucide:calendar",
            link: "/contact"
        },
        ctaB: {
            text: {
                en: 'Apply my project',
                fr: 'Soumettre mon projet'
            },
            icon: "lucide:arrow-right",
            link: "/application"
        },
        link: '/videos/hero.mp4',
    },
    strategy: {
        section: 'Strategy',
        title: [
            {
                _key: uuidv4(),
                fr: 'Diligency n’est pas une simple agence. C’est une méthode.',
                en: 'Diligency is not just an agency. It’s a method.'
            }
        ],
        subtitle: {
            fr: 'Nous transformons vos idées en solutions digitales robustes, élégantes et stratégiques. Notre approche repose sur la compréhension profonde de vos objectifs, et la mise en œuvre rigoureuse de     solutions taillées pour vos enjeux. C’est ça, la diligence digitale.',
            en: 'We transform your ideas into robust, elegant, and strategic digital solutions. Our approach is based on a deep understanding of your goals and the rigorous implementation of solutions tailored to your challenges. That’s what digital diligence is all about.',
        },
        images: [
            "/images/storysets/collaboration-animate.svg",
            "/images/storysets/collaboration-animate.svg",
            "/images/storysets/collaboration-animate.svg",
        ]
    },
    expertise: {
        title: [
            {
                _key: uuidv4(),
                fr: 'Nos expertises sur-mesure',
                en: 'Our tailor-made expertise'
            }
        ],
        subtitle: {
            fr: 'Chez Diligency, chaque solution est pensée pour durer, évoluer et vous démarquer. Nous allions rigueur technique, design intelligent et efficacité métier.',
            en: 'At Diligency, every solution is designed to last, evolve, and set you apart. We combine technical rigor, intelligent design, and business efficiency.'
        },
        items: [
            {
                "icon": "lucide:layout-dashboard",
                "title": {
                    "fr": "Application Web évolutive",
                    "en": "Scalable Web Applications"
                },
                "text": {
                    "fr": "Développement de plateformes web robustes, sécurisées et évolutives : portails clients, dashboards métier, SaaS sur-mesure. Pensées pour s’adapter à vos besoins et vous rendre autonome.",
                    "en": "Development of robust, secure, and scalable web platforms: client portals, business dashboards, custom SaaS solutions. Designed to adapt to your needs and empower you with autonomy."
                },
                "technos": ["Node.js", "Vue.js", "Express"],
                "link": "/home/expertise/scalable-web"
            },
            {
                "icon": "lucide:monitor",
                "title": {
                    "fr": "Site vitrine performant",
                    "en": "High-performance showcase website"
                },
                "text": {
                    "fr": "Création de sites professionnels rapides, responsives et optimisés SEO. Pensés comme des leviers de conversion et gérables facilement.",
                    "en": "Creation of professional websites that are fast, responsive, and SEO-optimized. Designed as conversion drivers and easy to manage."
                },
                "technos": ["WordPress", "Next.js", "PHP"],
                "link": "/home/expertise/showcase-web"
            },
            {
                "icon": "lucide:workflow",
                "title": {
                    "fr": "Solutions d'intelligence artificielle",
                    "en": "AI Solutions"
                },
                "text": {
                    "fr": "Intégration de fonctionnalités IA concrètes dans vos outils : assistants, génération, scoring, automatisations. L’IA devient un levier réel, utile, sans complexité inutile.",
                    "en": "Integration of practical AI features into your tools: assistants, generation, scoring, automations. AI becomes a real, useful lever without unnecessary complexity."
                },
                "technos": ["Node.js", "Zapier", "MongoDB"],
                "link": "/home/expertise/ai-solution"
            },
            {
                "icon": "lucide:plug",
                "title": {
                    "fr": "Support & Maintenance évolutive",
                    "en": "Scalable Support & Maintenance"
                },
                "text": {
                    "fr": "Suivi post-livraison, mises à jour techniques, correctifs, extensions et sécurité. Un accompagnement flexible pour faire vivre vos outils dans la durée.",
                    "en": "Post-delivery monitoring, technical updates, bug fixes, feature extensions, and security. Flexible support to keep your tools thriving over time."
                },
                "technos": ["REST", "GraphQL", "PHP"],
                "link": "/home/expertise/it-support"
            }
        ],
        cta: {
            icon: "lucide:arrow-right",
            text: {
                fr: "Découvrir nos services ",
                en: "discover our services"
            },
            link: ""
        }
    },
    offer: {
        title: [
            {
                _key: uuidv4(),
                fr: 'Deux niveaux de service',
                en: 'the same commitment to excellence.'
            },
            {
                _key: uuidv4(),
                fr: 'une même exigence.',
                en: 'Two service levels'
            }
        ],
        subtitle: {
            fr: "Choisissez l’accompagnement qui correspond à votre niveau de maturité digitale.",
            en: "Choose the support that matches your level of digital maturity"
        },
        plans: {
            essential: {
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
            premium: {
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
        },
        cta: {
            fr: "Comparer les offres",
            en: "Compare Offer"
        }
    },
    hub: {
        title: [
            {
                _key: uuidv4(),
                fr: 'Le Hub',
                en: 'The Hub'
            },
            {
                _key: uuidv4(),
                fr: 'Comprendre avant de commander',
                en: 'Understand before ordering'
            }
        ],
        subtitle: {
            fr: "Explorez nos articles, études de cas, guides et démonstrations. Un espace dédié à l’intelligence digitale, sans jargon inutile.",
            en: "Explore our articles, case studies, guides, and demos. A space dedicated to digital intelligence, without unnecessary jargon.",
        },
        cta: {
            icon: "lucide:arrow-right",
            link: "",
            text: {
                fr: "Lire les articles",
                en: "Read articles"
            }
        },
        testimonials: [
            {
                image: "/images/hero/000.jpg",
                name: "Thomas Moreau",
                role: "CTO, FinTech Solutions",
                quote: {
                    fr: "Application de trading développée en 12 semaines. Performance exceptionnelle, zéro bug critique depuis le lancement.",
                    en: "Trading app developed in 12 weeks. Outstanding performance, zero critical bugs since launch.",
                },
            },
            {
                image: "/images/hero/001.jpg",
                name: "Sophie Lambert",
                role: "Directrice Marketing, E-Shop Pro",
                quote: {
                    fr: "Notre site e-commerce a doublé son taux de conversion. L'expérience utilisateur est fluide et moderne.",
                    en: "Our e-commerce website doubled its conversion rate. The user experience is smooth and modern.",
                },
            },
            {
                image: "/images/hero/002.jpg",
                name: "Karim Benali",
                role: "Fondateur, StartApp",
                quote: {
                    fr: "Application mobile livrée en avance. Le design est superbe et la performance au rendez-vous.",
                    en: "Mobile app delivered ahead of schedule. The design is beautiful and the performance is on point.",
                },
            },
        ]
    },
    conversion: {
        title: [
            {
                _key: uuidv4(),
                fr: 'Et si on posait les bases de votre projet ?',
                en: 'How about we lay the foundations for your project?'
            },
        ],
        subtitle: {
            fr: "Prenons 30 minutes pour en parler. Nous vous aiderons à clarifier vos objectifs, à évaluer la faisabilité et envisager les premières étapes concrètes.",
            en: "Let’s take 30 minutes to discuss it. We’ll help you clarify your goals, assess feasibility, and consider the first concrete steps.",
        },
        ctaA: {
            text: {
                en: 'Fill out the project form',
                fr: 'Remplir le formulaire projet'
            },
            icon: "lucide:pen",
            link: "/contact"
        },
        background: "/videos/calendar.webm",
        footer: {
            text: {
                fr: 'Diligency — votre partenaire digital de confiance. Rapide dans l’exécution. Structuré dans chaque projet. Sur-mesure pour vos besoins uniques.',
                en: 'Diligency — your trusted digital partner. Fast in execution. Structured in every project. Tailored to your unique needs.'
            },
            cta: {
                text: {
                    en: 'Write us',
                    fr: 'Écrivez-nous'
                },
                icon: "lucide:arrow-right",
                link: "/contact"
            }
        }
    }
}