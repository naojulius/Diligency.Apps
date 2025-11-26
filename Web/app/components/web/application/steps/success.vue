<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Soumis avec succès!
        </div>
        <div class="text-center text-lg/6 text-tertiary/80">
            Votre demande à été recus, nous reviendrons vers vous dans les plus brief délais. Merci!
        </div>
        <div class="flex items-center justify-center py-5">
            <ButtonCtaLink :data="cta" @click="store.CleanStep()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useApplicationStore } from '~/stores/application/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const store = useApplicationStore()
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "/",
    text: {
        fr: "Accueil",
        en: "Home"
    }
}
</script>