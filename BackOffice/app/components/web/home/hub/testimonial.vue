<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card" v-for="(item, index) in items" :key="index">
            <div class="flex items-center mb-4">
                <img :src="item.image" alt="hub-img" class="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                    <div class="font-semibold text-tertiary">{{ item.name }}</div>
                    <div class="text-sm text-gray-600">{{ item.role }}</div>
                </div>
            </div>
            <blockquote class="text-tertiary italic mb-4">
                {{ item.quote[locale] }}
            </blockquote>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const items = computed(() => {
    return store.GetHubTestimonialItems()
})
</script>
