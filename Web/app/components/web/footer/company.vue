<template>
    <div class="md:col-span-2 w-full space-y-5">
        <div class="mb-4">
            <span class="text-4xl font-bold">{{ app }}</span>
        </div>
        <p class="text-gray-300 mb-4 max-w-md">
            {{ text[locale] }}
        </p>
        <WebFooterContact />
        <div class="flex space-x-4">
            <a v-for="(item, index) in medialinks" :key="index" :href="item.link"
                class="text-gray-300 hover:text-white transition-fast">
                <Icon :name="item.icon" class="size-6" />
            </a>
        </div>

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

const text = computed(() => {
    return store.GetFooterText()
})

const medialinks = computed(() => {
    return store.GetFooterMediaLink()
})
</script>