import { UseLoaderStore } from "./loader.store"

export const UseAgencyStore = defineStore("agency-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()

    const GetEngagement = () => {
        return [
            {
                id: 1,
                icon: "lucide:rocket",
                title: "Performance sans complexité inutile",
                description:
                    "Chez Diligency, nous privilégions la clarté et l’efficacité. Nous éliminons les détours techniques superflus pour nous concentrer sur ce qui apporte une réelle valeur métier via des solutions solides et épurées.",
            },
            {
                id: 2,
                icon: "lucide:handshake",
                title: "Transparence totale tout au long du projet",
                description:
                    "Nous communiquons avec transparence à chaque étape — des objectifs aux livrables, des délais aux éventuels obstacles. La confiance naît de la transparence, et c’est sur cette base que nous construisons chaque collaboration.",
            },
            {
                id: 3,
                icon: "lucide:brain",
                title: "Intelligence technologique pragmatique",
                description:
                    "La technologie n’est pas une fin en soi. Nous sélectionnons avec soin les outils adaptés à votre contexte métier, en nous appuyant sur l’expérience et la pertinence plutôt que sur la tendance.",
            },
            {
                id: 4,
                icon: "lucide:target",
                title: "Livrables pensés pour les objectifs business réels",
                description:
                    "Nos livrables ne sont pas de simples productions techniques — ce sont des solutions concrètes et utiles, alignées avec vos objectifs opérationnels. Chaque fonctionnalité est pensée comme un levier de croissance.",
            },
        ]
    }

    const GetTeam = () => {
        return []
    }

    return {
        GetEngagement,
    }
})
