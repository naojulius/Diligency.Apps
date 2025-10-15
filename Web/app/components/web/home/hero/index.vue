<template>
    <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
        <BackgroundVideo :video="background" />
        <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
            <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                <h1 id="hero"
                    class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                    <span v-for="(title, index) in title" :key="index">
                        {{ title[locale] }}
                    </span>
                </h1>
                <h2 class="text-center text-xl text-secondary z-10">
                    {{ subtitle[locale] }}
                </h2>
                <div class="py-2 w-full flex items-center  justify-center flex-col md:flex-row gap-4 z-10 text-white">
                    <WebHomeHeroCtaA />
                    <WebHomeHeroCtaB />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
/*
    Import des dépendances nécessaires :
    - useI18n pour la gestion des traductions multilingues
    - UseHomeStore pour accéder aux données du Hero
*/
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
/*
    Initialisation de la langue courante et de la variable réactive Text
    Text contiendra les données du Hero récupérées depuis le store
*/
const { locale } = useI18n()
const Text = ref<any>(null)

const title = computed(() => {
    const data = store.GetHeroTitle()
    if (Array.isArray(data)) {
        return data
    } else if (typeof data === 'string') {
        return [{ en: data, fr: data }]
    }

    return []
})

const subtitle = computed(() => {
    return store.GetHeroSubTitle()
})

const background = computed(() => {
    return store.GetHeroBackground()
})

/*
    Récupération asynchrone des données du Hero au montage du composant
    Permet de remplir Text avec :
    - le titre (possiblement multi-lignes)
    - le sous-titre
    - les textes pour les boutons d'action
*/
onMounted(async () => {
    //Text.value = await store.GetHeroData()
})

</script>
