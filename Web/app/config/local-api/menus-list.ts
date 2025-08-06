import type { Menu } from "~/types/menu/menu";

export const MenusList: Menu[] = [
    {
        id: 1,
        text: "Agence",
        link: "/",
        icon: "lucide:square-user",
        locale: "button.menu.agency",
        visible: true,
        children: [
            {
                id: 101,
                text: "A propos",
                link: "/agency/about",
                icon: "lucide-info",
                locale: "button.submenu.about",
                visible: true
            },
            {
                id: 102,
                text: "Job & Carrière",
                link: "/agency/jobcarrier",
                icon: "lucide-briefcase",
                locale: "button.submenu.jobCarrier",
                visible: true
            },
            {
                id: 103,
                text: "Le Hub",
                link: "/agency/hub",
                icon: "lucide-network",
                locale: "button.submenu.hub",
                visible: true
            }
        ]
    },
    {
        id: 2,
        text: "Services",
        link: "/services",
        icon: "lucide:square-terminal",
        locale: "button.menu.service",
        visible: true,
        children: [
            {
                id: 201,
                text: "Web app",
                link: "/services/web-app",
                icon: "lucide-globe",
                locale: "button.submenu.webApp",
                visible: true,
                description: "Au-delà du site : votre application métier sur-mesure. CRM, dashboard, marketplace, système de réservation… Nous concevons des plateformes web robustes, sécurisées et pensées pour vos besoins métier. 100 % responsive, scalable et prêtes pour l’évolution."
            },
            {
                id: 202,
                text: "Sites vitrines",
                link: "/services/web-show",
                icon: "lucide-layers",
                locale: "button.submenu.webShow",
                visible: true
            },
            {
                id: 203,
                text: "E-commerce",
                link: "/services/e-commerce",
                icon: "lucide-view",
                locale: "button.submenu.eCommerce",
                visible: true
            },
            {
                id: 204,
                text: "Solutions IT/IA",
                link: "/services/it-ia",
                icon: "lucide-brain",
                locale: "button.submenu.itIaSolution",
                visible: true
            }
        ]
    },
    {
        id: 3,
        text: "Contact",
        link: "/contact",
        icon: "lucide:messages-square",
        locale: "button.menu.contact",
        visible: true
    }
];
