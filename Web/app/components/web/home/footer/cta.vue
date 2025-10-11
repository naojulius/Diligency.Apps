<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        :class="['text-xl transition-all duration-500 h-14 bg-primary text-tertiary/80 w-auto px-2 rounded-lg flex items-center md:items-start justify-center md:justify-start gap-3 font-semi-bold underline underline-offset-6 hover:text-secondary-700']">
        <span class="">{{ data.text[locale] }}</span>
        <Icon :name="data.icon" :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </button>
</template>

<script lang="ts" setup>
const hover = ref(false)
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const router = useRouter()
const { locale } = useI18n()

const data = computed(() => {
    return store.GetConversionFooterCta()
})

const navigate = () => {
    router.push(data.value.link)
}
</script>