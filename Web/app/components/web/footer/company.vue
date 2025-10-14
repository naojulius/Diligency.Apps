<template>
    <div class="w-full flex flex-col gap-4">
        <span class="text-4xl font-bold pb-4 text-center md:text-left">{{ app }}</span>
        <p class="text-lg w-full md:w-2/3 cursor-pointer text-center md:text-left">
            {{ opendate[locale] }}
        </p>
        <WebFooterContact />
        <div class=" w-full flex gap-2 justify-center items-center md:justify-start">
            <a v-for="(item, index) in medialinks" :key="index" :href="item.link"
                class="text-primary hover:text-secondary transition-fast transition-all duration-500">
                <Icon :name="item.icon" class="size-6" />
            </a>
        </div>
        <WebFooterLocale />
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseFooterStore } from '~/stores/footer.store';
const store = UseFooterStore()
const { locale } = useI18n()

const app = computed(() => {
    return store.GetFooterApp()
})

const opendate = computed(() => {
    return store.GetFooterOpenDate()
})

const medialinks = computed(() => {
    return store.GetFooterMediaLink()
})
</script>