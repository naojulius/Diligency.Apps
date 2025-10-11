<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        class="transition-all duration-300 h-14 bg-primary text-tertiary w-full md:w-auto px-4 rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold">
            Discutons de vos besoin
        </span>
        <Icon name="lucide:arrow-right"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const hover = ref(false)
const router = useRouter();
const { locale } = useI18n()
</script>
