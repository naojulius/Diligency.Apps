<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Accompagnement
        </div>
        <div class="flex flex-col gap-2 text-center text-lg/6 text-tertiary/80">
            <FormCheck placeholder="Analyse et conseil stratégique" />
            <FormCheck placeholder="Design / UX" />
            <FormCheck placeholder="Développement" />
            <FormCheck placeholder="Maintenance & hébergement" />
            <FormInput type="text" placeholder="Autre" />
        </div>
        <div class="flex items-center justify-center py-2">
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
        fr: "Suivant",
        en: "Next"
    }
}
</script>