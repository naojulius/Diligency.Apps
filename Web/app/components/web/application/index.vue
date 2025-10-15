<template>
    <div class="w-full h-screen  px-4 lg:px-10 2xl:px-35 py-16 flex items-center justify-center">
        <div class="w-full md:w-1/2">
            <div class="py-4 text-5xl text-tertiary text-semibold text-center">
                soumettre mon projet
            </div>
            <div class="text-lg/6 text-tertiary/80 text-center">
                Partagez votre idée ou projet avec notre équipe d’experts. Nous vous accompagnons dans l’analyse, la
                conception et le développement de solutions digitales sur-mesure. Que ce soit pour une application, une
                plateforme ou un outil intelligent, soumettre votre projet est la première étape pour le concrétiser
                rapidement et efficacement.
            </div>
            <div class="py-5 flex items-center justify-center">
                <ButtonCtaLink :data="cta" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Cta } from '~/types/interfaces/common/cta';

const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: {
        fr: "Commencer",
        en: "Start application"
    }
}
</script>