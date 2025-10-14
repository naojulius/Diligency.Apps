import { v4 as uuidv4 } from 'uuid';
export const SERVICE_DATA = {
    webApp: {
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Applications Web & Plateformes métier — Construisons l'efficacité digitale",
                    en: "Web Applications & Business Platforms — Building Digital Efficiency Together"
                }
            ],
            subtitle: {
                fr: 'Développement sur-mesure de plateformes digitales : dashboards, CRM, réservation, marketplace, outils SaaS.',
                en: 'Tailor-made digital platform development: dashboards, CRMs, booking systems, marketplaces, and SaaS tools.'
            },
            background: '/images/hero/ecommerce.jpg',
            cta: {
                icon: "lucide:send",
                link: "/contact",
                text: {
                    fr: "Soumettre mon projet",
                    en: "Apply my project"
                }
            }
        },
        web: {
            title: [
                {
                    _key: uuidv4(),
                    fr: 'Pourquoi une application web ?',
                    en: 'Why a Web Application?'
                }
            ],
            subtitle: {
                fr: 'Dès qu’un site web doit faire plus que présenter, vous avez besoin d’une application. Une application web intervient là où les sites vitrines atteignent leurs limites : dès qu’il faut gérer des utilisateurs, automatiser des processus, sécuriser des données ou connecter des services. Chez Diligency, nous concevons des plateformes digitales sur-mesure : robustes, évolutives et pensées métier. Marketplace, portail client, système de réservation ou CRM sur navigateur — si votre projet exige plus qu’un simple affichage, nous le structurons et le développons comme une vraie application.',
                en: 'Whenever a website needs to do more than simply showcase content, you need a web application. A web app steps in where traditional websites reach their limits — when it’s time to manage users, automate processes, secure data, or connect services. At Diligency, we design custom digital platforms that are robust, scalable, and business-oriented. Whether it’s a marketplace, client portal, booking system, or browser-based CRM — if your project demands more than a simple display, we structure and develop it as a true application.'
            },
            items: {
                usage: {
                    title: {
                        fr: "cas d'usage fréquents:",
                        en: "Common use cases",
                    },
                    list: [
                        {
                            name: {
                                fr: "Marketplace B2B ou B2C",
                                en: "B2B or B2C Marketplace"
                            },
                            icon: "lucide-briefcase-business"
                        },
                        {
                            name: {
                                fr: "Système de réservation intelligent",
                                en: "Smart Booking System"
                            },
                            icon: "lucide-brain-circuit"
                        },
                        {
                            name: {
                                fr: "Portail client ou extranet sécurisé",
                                en: "Client Portal or Secure Extranet"
                            },
                            icon: "lucide-globe-lock"
                        },
                        {
                            name: {
                                fr: "Applications SaaS ou interface de gestion",
                                en: "SaaS Applications or Management Interface"
                            },
                            icon: "lucide-square-mouse-pointer"
                        }

                    ]
                },
                advantage: {
                    title: {
                        fr: "Avantage concrets:",
                        en: "Concrete advantages:"
                    },
                    list: [
                        {
                            name: {
                                fr: "Responsive (desktop & mobile)",
                                en: "Responsive (desktop & mobile)"
                            },
                            icon: "lucide-monitor-smartphone"
                        },
                        {
                            name: {
                                fr: "Architecture scalable (React, Vue, Next.js, API-first)",
                                en: "Scalable architecture (React, Vue, Next.js, API-first)"
                            },
                            icon: "lucide-scaling"
                        },
                        {
                            name: {
                                fr: "Sécurité by design (Authentification, Rôle, traçabilité)",
                                en: "Security by design (Authentication, Role, Traceability)"
                            },
                            icon: "lucide-shield-ellipsis"
                        },
                        {
                            name: {
                                fr: "UX optimisée pour l’usage réel et les objectifs métier",
                                en: "UX optimized for real use and business goals"
                            },
                            icon: "lucide-target"
                        }
                    ]
                }

            }
        },
        method: {
            title: [
                {
                    _key: uuidv4(),
                    fr: 'Notre Méthode',
                    en: 'Our Method'
                }
            ],
            subtitle: {
                fr: 'Nous adoptons une méthode agile, rigoureuse et transparente. Chaque projet avance de façon structurée et en étroite collaboration avec nos clients, afin d’assurer une compréhension approfondie des enjeux, une conception centrée sur l’utilisateur et une exécution parfaitement maîtrisée. L’implication continue de nos clients à chaque étape nous permet de garantir la qualité, la lisibilité et la pertinence des livrables jusqu’à leur mise en production.',
                en: 'We follow an agile, rigorous, and transparent approach. Every project progresses in a structured way and in close collaboration with our clients, ensuring a deep understanding of challenges, user-centered design, and perfectly executed delivery. Our clients’ continuous involvement at every stage guarantees the quality, clarity, and relevance of deliverables all the way to production.'
            },
            items: {
                methods: [
                    {
                        name: { fr: "Audit & Cadrage fonctionnel", en: "Functional Audit & Scoping" },
                        icon: "lucide-clipboard-check"
                    },
                    {
                        name: { fr: "Architecture technique & stack adaptée", en: "Technical Architecture & Appropriate Stack" },
                        icon: "lucide-circuit-board"
                    },
                    {
                        name: { fr: "Maquettes UI/UX avec validation", en: "UI/UX Mockups with Validation" },
                        icon: "lucide-app-window"
                    },
                    {
                        name: { fr: "Développement modulaire et visible", en: "Modular and Transparent Development" },
                        icon: "lucide-terminal"
                    },
                    {
                        name: { fr: "Test utilisateurs", en: "User Testing" },
                        icon: "lucide-test-tubes"
                    },
                    {
                        name: { fr: "Mise en production + documentation", en: "Deployment & Documentation" },
                        icon: "lucide-cloud-upload"
                    }
                ],
                gain: [
                    {
                        name: { fr: "Expérience fluide, 100 % responsive", en: "Smooth, Fully Responsive Experience" },
                        icon: "lucide-smartphone"
                    },
                    {
                        name: { fr: "Back-end robuste et évolutif", en: "Robust and Scalable Back-end" },
                        icon: "lucide-server-cog"
                    },
                    {
                        name: { fr: "Interface pensée performance", en: "Performance-Oriented Interface" },
                        icon: "lucide-gauge"
                    },
                    {
                        name: { fr: "Connexion à vos outils internes", en: "Integration with Your Internal Tools" },
                        icon: "lucide-plug"
                    },
                    {
                        name: { fr: "Système de rôles, sécurité, logs", en: "Role System, Security, and Logging" },
                        icon: "lucide-shield-check"
                    },
                    {
                        name: { fr: "Architecture scalable (API-ready)", en: "Scalable Architecture (API-Ready)" },
                        icon: "lucide-network"
                    }
                ],
                why: [
                    {
                        name: { fr: "Pilotage projet par une équipe dédiée", en: "Project Managed by a Dedicated Team" },
                        icon: "lucide-users"
                    },
                    {
                        name: { fr: "Aucun développeur non validé", en: "Only Verified Developers" },
                        icon: "lucide-shield-check"
                    },
                    {
                        name: { fr: "Transparence sur les délais, livrables et méthodes", en: "Transparency on Deadlines, Deliverables & Methods" },
                        icon: "lucide-eye"
                    },
                    {
                        name: { fr: "Garantie post-livraison (support + maintenance possible)", en: "Post-Delivery Guarantee (Support & Maintenance Available)" },
                        icon: "lucide-life-buoy"
                    }
                ]

            }
        },
        faq: {
            title: {
                en: "FAQ",
                fr: "FAQ"
            },
            items: [
                {
                    q: {
                        fr: "Combien de temps pour développer une application web ?",
                        en: "How long does it take to develop a web application?"
                    },
                    r: {
                        fr: "Entre 4 et 10 semaines selon la complexité et le niveau de détail initial.",
                        en: "Between 4 and 10 weeks, depending on complexity and the level of initial detail."
                    }
                },
                {
                    q: {
                        fr: "Puis-je la faire évoluer plus tard ?",
                        en: "Can it be upgraded later?"
                    },
                    r: {
                        fr: "Oui tout est pensé pour être modulaire, scalable et maintenable.",
                        en: "Yes, everything is designed to be modular, scalable, and maintainable."
                    }
                },
                {
                    q: {
                        fr: "Je n'ai pas encore de cahier des charges, est-ce un problème ?",
                        en: "I don’t have a requirements specification yet. Is that a problem?"
                    },
                    r: {
                        fr: "Non, On commence ensemble par un cadrage structuré.",
                        en: "No, we start together with a structured scoping phase."
                    }
                }
            ]
        },
        ctaText: {
            fr: "Votre plateforme mérite plus qu’un site standard. Construisons une application qui vous fait gagner du temps, des clients, et du contrôle.",
            en: "our platform deserves more than a standard website. Let’s build an application that saves you time, attracts clients, and gives you control."
        },
        cta: {
            icon: "lucide:calendar",
            link: "/contact",
            text: {
                fr: "Réservez un appel stratégique",
                en: "Book a strategic call"
            }
        }
    },
    webShow: {
        hero: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Création de sites vitrines sur-mesure",
                    en: "Custom Showcase Website Development"
                }
            ],
            subtitle: {
                fr: "Une vitrine digitale qui renforce votre image, inspire confiance et génère des prises de contact.",
                en: "A digital showcase that strengthens your brand, inspires trust, and drives leads."
            },
            background: '/images/hero/ecommerce.jpg',
        },
        for: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "À qui s'adresse ce service ?",
                    en: "Who is this service for?"
                }
            ],
            subtitle: {
                fr: "Ce service s’adresse à toutes les structures souhaitant valoriser leur expertise et renforcer leur présence digitale. Que vous soyez indépendant, cabinet professionnel ou PME, nous vous accompagnons dans la création d’outils en ligne performants et adaptés à vos besoins métiers.",
                en: "This service is designed for any organization looking to showcase their expertise and strengthen their digital presence. Whether you are a freelancer, professional firm, or SME, we guide you in creating high-performance online tools tailored to your business needs."
            },
            items: [
                {
                    name: { fr: "Indépendants et experts du service (coachs, avocats, architectes…)", en: "Freelancers and service experts (coaches, lawyers, architects…)" },
                    icon: "lucide-user-check"
                },
                {
                    name: { fr: "Cabinets & professions libérales", en: "Offices & liberal professions" },
                    icon: "lucide-briefcase"
                },
                {
                    name: { fr: "PME & structures souhaitant structurer leur présence en ligne", en: "SMEs & organizations looking to structure their online presence" },
                    icon: "lucide-building-2"
                },
                {
                    name: { fr: "Entrepreneurs en phase de lancement", en: "Entrepreneurs in the launch phase" },
                    icon: "lucide-rocket"
                }
            ]
        },
        why: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Pourquoi nous confier votre site vitrine ?",
                    en: "Why entrust us with your showcase website?"
                }
            ],
            subtitle: {
                fr: "Un site vitrine n’est pas qu’un site “simple”. C’est souvent la première impression que vous laissez à vos prospects. Il doit inspirer confiance, renforcer votre crédibilité et inciter à la prise de contact.",
                en: "A showcase website is more than a 'simple' site. It is often the first impression you leave on potential clients. It must inspire trust, strengthen your credibility, and encourage contact."
            },
            subtitle2: {
                fr: "Chez Diligency, nous créons des sites vitrines rapides, élégants, lisibles et mobiles, avec une vraie structure stratégique. Notre objectif : vous aider à convertir vos visiteurs en opportunités concrètes.",
                en: "At Diligency, we create fast, elegant, clear, and mobile-friendly showcase websites with a real strategic structure. Our goal: to help you convert visitors into tangible opportunities."
            }
        },
        method: {
            title: [
                {
                    _key: uuidv4(),
                    fr: "Notre méthode",
                    en: "Our method"
                }
            ],
            items: [
                {
                    name: {
                        fr: "Compréhension de vos enjeux pour poser des fondations solides.",
                        en: "Understanding your challenges to lay solid foundations."
                    },
                    icon: "lucide-target"
                },
                {
                    name: {
                        fr: "Design sur-mesure pour une interface claire, efficace et fidèle à votre image.",
                        en: "Custom design for a clear, effective interface true to your brand."
                    },
                    icon: "lucide-layout-dashboard"
                },
                {
                    name: {
                        fr: "Développement performant adapté à votre budget et vos ambitions techniques.",
                        en: "High-performance development tailored to your budget and technical ambitions."
                    },
                    icon: "lucide-code"
                },
                {
                    name: {
                        fr: "Visibilité maximale sur les moteurs de recherche grâce à une base saine.",
                        en: "Maximize search engine visibility with a solid foundation."
                    },
                    icon: "lucide-rocket"
                },
                {
                    name: {
                        fr: "Votre site prêt à performer, avec support si besoin après livraison.",
                        en: "Your site ready to perform, with support available if needed after delivery."
                    },
                    icon: "lucide-send"
                }
            ]
        },
        ctaText: {
            fr: "Chez Diligency, nous créons des sites vitrines rapides, élégants et mobiles, adaptés à votre marque, pour inspirer confiance, renforcer votre présence digitale et convertir vos visiteurs en opportunités concrètes.",
            en: "At Diligency, we craft fast, elegant, and mobile showcase websites, tailored to your brand, to inspire trust, strengthen your digital presence, and turn visitors into tangible opportunities."
        },
        cta: {
            icon: "lucide:layers",
            link: "/contact",
            text: {
                fr: "Créer mon site vitrine",
                en: "Create my web show"
            }
        }
    },
    ecommerce: {
        for: {
            title: [

            ],
            subtitle: {

            },
            items: [
                {
                    fr: "Indépendants et experts du service (coachs, avocats, architectes…)",
                    en: "Independent professionals and service experts (coaches, lawyers, architects…)"
                },
                {
                    fr: "Cabinets & professions libérales",
                    en: "Firms & liberal professions"
                },
                {
                    fr: "PME & structures souhaitant structurer leur présence en ligne",
                    en: "SMEs & organizations looking to build their online presence"
                },
                {
                    fr: "PME & structures souhaitant structurer leur présence en ligne",
                    en: "Entrepreneurs in the startup phase"
                }
            ]
        },
        method: {
            items: [
                {
                    name: "Brief stratégique + cadrage de vos objectifs",
                    icon: "lucide-clipboard-list"
                },
                {
                    name: "Création d’une maquette UI/UX en accord avec votre identité",
                    icon: "lucide-layout-dashboard"
                },
                {
                    name: "Intégration technique (Next.js, WordPress optimisé ou autre stack selon projet)",
                    icon: "lucide-code"
                },
                {
                    name: "Optimisation SEO (balises, vitesse, structure)",
                    icon: "lucide-search"
                },
                {
                    name: "Mise en ligne, transfert des accès et accompagnement post-livraison",
                    icon: "lucide-rocket"
                }
            ]
        },
        got: {
            items: [
                {
                    name: "Un site fluide, rapide et responsive",
                    icon: "lucide-rocket"
                },
                {
                    name: "Une image de marque claire et professionnelle",
                    icon: "lucide-briefcase"
                },
                {
                    name: "Un positionnement Google optimisé (SEO technique inclus)",
                    icon: "lucide-search"
                },
                {
                    name: "Une interface simple à mettre à jour",
                    icon: "lucide-layout-dashboard"
                },
                {
                    name: "Des appels à l’action visibles, efficaces",
                    icon: "lucide:pointer"
                }
            ]
        }
    },
    itia: {
        for: {
            items: [
                {
                    fr: "Entreprises souhaitant automatiser leurs processus internes",
                    en: "Companies looking to automate their internal processes"
                },
                {
                    fr: "Directions métier cherchant à connecter plusieurs systèmes (ERP, CRM, SaaS)",
                    en: "Business departments seeking to connect multiple systems (ERP, CRM, SaaS)"
                },
                {
                    fr: "Structures intéressées par l’IA (analyse, assistants, scoring, automatisation)",
                    en: "Organizations interested in AI (analytics, assistants, scoring, automation)"
                }
            ]

        },
        method: {
            items: [
                {
                    text: {
                        fr: "Audit complet de vos flux internes et outils existants",
                        en: "Comprehensive audit of your internal workflows and existing tools"
                    },
                    icon: "lucide-inspect"
                },
                {
                    text: {
                        fr: "Conception des spécifications fonctionnelles et de l’architecture technique",
                        en: "Design of functional specifications and technical architecture"
                    },
                    icon: "lucide-cog"
                },
                {
                    text: {
                        fr: "Prototypage rapide (POC) pour valider les choix avant développement",
                        en: "Rapid prototyping (POC) to validate choices before development"
                    },
                    icon: "lucide-flask-conical"
                },
                {
                    text: {
                        fr: "Développement, tests et documentation rigoureuse",
                        en: "Development, testing, and thorough documentation"
                    },
                    icon: "lucide-code-2"
                },
                {
                    text: {
                        fr: "Suivi, évolutions et support technique à long terme",
                        en: "Follow-up, improvements, and long-term technical support"
                    },
                    icon: "lucide-life-buoy"
                }
            ]

        },
        example: {
            items: [
                {
                    text: {
                        fr: "Connecteur CRM/API intégré à votre ERP",
                        en: "CRM/API connector integrated with your ERP"
                    },
                    icon: "lucide-link"
                },
                {
                    text: {
                        fr: "Automatisation des envois de documents et des relances clients",
                        en: "Automation of document delivery and client reminders"
                    },
                    icon: "lucide-send"
                },
                {
                    text: {
                        fr: "Outil d’analyse et de reporting assisté par IA",
                        en: "AI-powered analysis and reporting tool"
                    },
                    icon: "lucide-bar-chart-3"
                },
                {
                    text: {
                        fr: "Assistant IA interne pour le support client ou la productivité",
                        en: "Internal AI assistant for customer support or productivity"
                    },
                    icon: "lucide-bot"
                },
                {
                    text: {
                        fr: "Système de scoring intelligent pour les leads, les risques ou les décisions RH",
                        en: "Intelligent scoring system for leads, risks, or HR decisions"
                    },
                    icon: "lucide-activity"
                },
                {
                    text: {
                        fr: "Automatisation & intégrations IA (chatbots, assistants internes, automatisation de process)",
                        en: "AI automation & integrations (chatbots, internal assistants, process automation)"
                    },
                    icon: "lucide-circuit-board"
                },
                {
                    text: {
                        fr: "Contenus & productivité IA (rédaction, génération visuelle, outils marketing)",
                        en: "AI-powered content & productivity (writing, visual generation, marketing tools)"
                    },
                    icon: "lucide-sparkles"
                }
            ]
        }
    }
}