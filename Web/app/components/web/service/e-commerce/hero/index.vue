<template>
    <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
        <WebServiceECommerceHeroBackground />
        <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
            <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                <h1 id="hero"
                    class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                    <span>
                        Création de sites vitrines sur-mesure
                    </span>
                </h1>
                <h2 class="text-center text-xl text-secondary z-10">
                    Une vitrine digitale qui renforce votre image, inspire confiance et génère des prises de contact.
                </h2>
                <div class="py-2 w-full flex items-center  justify-center flex-col md:flex-row gap-4 z-10 text-white">
                    <WebServiceECommerceHeroCreateWebShow />
                    <WebServiceECommerceHeroDiscussAboutProject />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';

const { locale } = useI18n()
const Text = ref<any>(null)

onMounted(async () => {
    //Text.value = await UseHomeStore().GetHeroData()
})
</script>