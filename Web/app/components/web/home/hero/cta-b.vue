<template>
    <!-- <button @mouseenter="hover = true" @mouseleave="hover = false" @click="navigate"
        class="transition-all duration-300 h-14 bg-primary text-tertiary w-full md:w-auto px-4 rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold">
            {{ data.text[locale] }}
        </span>
        <Icon :name="data.icon" :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </button> -->
    <ButtonCtaLink :data="data" custom-class="text-primary" />
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const hover = ref(false)
const router = useRouter();
const { locale } = useI18n()

import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()

const ctaKey = "b"
const data = computed(() => {
    return store.GetHeroCta(ctaKey)
})
// const navigate = () => {
//     const link = data.value.link
//     if (link) {
//         router.push(link);
//     }
// }
</script>
