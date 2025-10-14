<template>
    <div class="text-xl">
        <div class="py-1 text-base/5" v-for="(item, index) in data" :key="index">
            <p class="inline-flex gap-2 items-center inter ">
                <Icon :name="item.icon" size="22" class="text-secondary-700" />
                <span class="text-tertiary-500">{{ item.name[locale] }}</span>
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const data = computed(() => {
    return store.GetWebAppMethodMethodsItems()
})
</script>