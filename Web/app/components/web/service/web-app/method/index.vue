<template>
    <section class="py-5 md:py-20 bg-secondary">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div>
                            Notre Méthode
                        </div>
                    </div>
                </div>
                <div class="text-xl text-gray-500 font-regular w-full ">
                    Nous adoptons une méthode agile, rigoureuse et transparente. Chaque projet avance de façon
                    structurée et en étroite collaboration avec nos clients, afin d’assurer une compréhension
                    approfondie des enjeux, une conception centrée sur l’utilisateur et une exécution parfaitement
                    maîtrisée. L’implication continue de nos clients à chaque étape nous permet de garantir la qualité,
                    la lisibilité et la pertinence des livrables jusqu’à leur mise en production.
                </div>
            </div>
            <div class="w-full py-2 flex flex-col md:flex-row justify-start gap-5 md:gap-10">
                <WebServiceWebAppMethodOurMethod />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>