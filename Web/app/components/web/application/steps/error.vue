<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Echec rencontrée!
        </div>
        <div class="text-center text-lg/6 text-tertiary/80">
            Votre demande n'as pas aboutis, Une erreur s'est produite lors de l'envoie de votre demande veuillez
            réeessayer. Merci!
        </div>
        <div class="flex items-center justify-center py-5">
            <ButtonCtaLink :data="cta" @click="store.CleanStep()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UseApplicationStore } from '~/stores/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const store = UseApplicationStore()
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "/",
    text: {
        fr: "Accueil",
        en: "Home"
    }
}
</script>