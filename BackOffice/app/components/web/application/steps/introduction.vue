<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            soumettre mon projet
        </div>
        <div class="text-center text-lg/6 text-tertiary/80">
            Partagez votre idée ou projet avec notre équipe d’experts. Nous vous accompagnons dans l’analyse, la
            conception et le développement de solutions digitales sur-mesure. Que ce soit pour une application, une
            plateforme ou un outil intelligent, soumettre votre projet est la première étape pour le concrétiser
            rapidement et efficacement.
        </div>
        <div class="flex items-center justify-center py-5">
            <ButtonCtaLink :data="cta" @click="store.next()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UseApplicationStore } from '~/stores/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const store = UseApplicationStore()
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: {
        fr: "Commencer",
        en: "Start application"
    }
}
</script>