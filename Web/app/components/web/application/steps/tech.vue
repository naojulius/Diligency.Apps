<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Aspects techniques
        </div>
        <div class="flex flex-col gap-2 py-4 text-center text-lg/6 text-tertiary/80">
            <FormInput type="text" placeholder="Technologies préférée: React / Laravel / etc..." />
            <FormCheck placeholder="Déjà un cahier des charges ou maquettes ?" />
        </div>
        <div class="flex items-center justify-center py-2">
            <ButtonCtaLink :data="cta" @click="store.next()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useApplicationStore } from '~/stores/application/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const store = useApplicationStore()
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: {
        fr: "Suivant",
        en: "Next"
    }
}
</script>