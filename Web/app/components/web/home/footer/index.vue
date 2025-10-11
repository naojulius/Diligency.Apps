<template>
    <section class="py-5 md:py-20 relative w-full h-auto">
        <div>
            <p class="text-3xl font-regular  text-tertiary opacity-90 text-center py-5 px-4">
                <span class="">
                    {{ data[locale] }}
                </span>
            </p>
            <div class="w-full flex items-center justify-center">
                <WebHomeFooterCta />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const data = computed(() => {
    return store.GetConversionFooterText()
})
</script>