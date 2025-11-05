export const HOME_DATA = {
    hero: {
        title: [
            {
                en: 'Treat yourself to digital diligence',
                fr: 'Offrez-vous la diligence digitale'
            }
        ],
        subtitle: {
            en: 'Custom websites & applications designed for performance, clarity, and conversion',
            fr: 'Sites web & applications sur-mesure, pensés pour la performance, la clarté et la conversion'
        },
        cta: [
            {
                type: "cta-tertiary",
                text: {
                    en: 'Book a strategy call',
                    fr: 'Réserver un appel stratégique'
                },
                icon: "lucide:calendar",
                link: "/contact"
            },
            {
                type: "cta-link",
                text: {
                    en: 'Apply my project',
                    fr: 'Soumettre mon projet'
                },
                icon: "lucide:arrow-right",
                link: "/application",
                style: "text-secondary-500"
            },
        ],
        video: '/videos/hero.mp4',
    },
    blocks: [
        {
            type: "list-g",
            title: [
                {
                    fr: 'Diligency n’est pas une simple agence.',
                    en: 'Diligency is not just an agency. '
                },
                {
                    fr: 'C’est une méthode.',
                    en: 'It’s a method.'
                }
            ],
            subtitle: {
                fr: 'Nous transformons vos idées en solutions digitales robustes, élégantes et stratégiques. Notre approche repose sur la compréhension profonde de vos objectifs, et la mise en œuvre rigoureuse de     solutions taillées pour vos enjeux. C’est ça, la diligence digitale.',
                en: 'We transform your ideas into robust, elegant, and strategic digital solutions. Our approach is based on a deep understanding of your goals and the rigorous implementation of solutions tailored to your challenges. That’s what digital diligence is all about.',
            },
            items: [
                "/images/storysets/collaboration-animate.svg",
                "/images/storysets/collaboration-animate.svg",
                "/images/storysets/collaboration-animate.svg",
            ]
        },
        {
            type: "list-h",
            title: [
                {
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
                    icon: "lucide:layout-dashboard",
                    name: {
                        fr: "Application Web évolutive",
                        en: "Scalable Web Applications"
                    },
                    text: {
                        fr: "Développement de plateformes web robustes, sécurisées et évolutives : portails clients, dashboards métier, SaaS sur-mesure. Pensées pour s’adapter à vos besoins et vous rendre autonome.",
                        en: "Development of robust, secure, and scalable web platforms: client portals, business dashboards, custom SaaS solutions. Designed to adapt to your needs and empower you with autonomy."
                    },
                    technos: ["Node.js", "Vue.js", "Express"],
                    link: "/home/expertise/scalable-web"
                },
                {
                    icon: "lucide:monitor",
                    name: {
                        fr: "Site vitrine performant",
                        en: "High-performance showcase website"
                    },
                    text: {
                        fr: "Création de sites professionnels rapides, responsives et optimisés SEO. Pensés comme des leviers de conversion et gérables facilement.",
                        en: "Creation of professional websites that are fast, responsive, and SEO-optimized. Designed as conversion drivers and easy to manage."
                    },
                    technos: ["WordPress", "Next.js", "PHP"],
                    link: "/home/expertise/showcase-web"
                },
                {
                    icon: "lucide:workflow",
                    name: {
                        fr: "Solutions d'intelligence artificielle",
                        en: "AI Solutions"
                    },
                    text: {
                        fr: "Intégration de fonctionnalités IA concrètes dans vos outils : assistants, génération, scoring, automatisations. L’IA devient un levier réel, utile, sans complexité inutile.",
                        en: "Integration of practical AI features into your tools: assistants, generation, scoring, automations. AI becomes a real, useful lever without unnecessary complexity."
                    },
                    technos: ["Node.js", "Zapier", "MongoDB"],
                    link: "/home/expertise/ai-solution"
                },
                {
                    icon: "lucide:plug",
                    name: {
                        fr: "Support & Maintenance évolutive",
                        en: "Scalable Support & Maintenance"
                    },
                    text: {
                        fr: "Suivi post-livraison, mises à jour techniques, correctifs, extensions et sécurité. Un accompagnement flexible pour faire vivre vos outils dans la durée.",
                        en: "Post-delivery monitoring, technical updates, bug fixes, feature extensions, and security. Flexible support to keep your tools thriving over time."
                    },
                    technos: ["REST", "GraphQL", "PHP"],
                    link: "/home/expertise/it-support"
                }
            ],
            cta: [
                {
                    icon: "lucide:arrow-right",
                    text: {
                        fr: "Découvrir nos services ",
                        en: "discover our services"
                    },
                    link: ""
                }
            ]
        },
    ]
}