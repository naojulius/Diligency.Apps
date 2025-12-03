<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        class="z-10 transition-all duration-300 h-14 bg-primary text-tertiary w-full md:w-auto px-4 rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold">
            Réserver un appel gratuit avec un expert Diligency
        </span>
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const hover = ref(false)
const router = useRouter();
const { locale } = useI18n()
</script>
