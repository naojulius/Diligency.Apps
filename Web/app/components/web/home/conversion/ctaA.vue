<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false" @click="navigate"
        class="transition-all duration-300 h-14 bg-primary text-tertiary w-full md:w-auto px-4 rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold">{{ data.text[locale] }}</span>
        <Icon :name="data.icon" :class="['transition-all duration-300 size-6 fill-accent', hover ? 'ml-4' : 'ml-0']" />
    </button>
</template>
<script lang="ts" setup>
const hover = ref(false)
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const router = useRouter()
const { locale } = useI18n()

const ctaKey = "A"
const data = computed(() => {
    return store.GetConversionCta(ctaKey)
})

const navigate = () => {
    router.push(data.value.link)
}
</script>
