<template>
    <div class="text-xl">
        <div class="w-full h-auto" v-for="(item, index) in data" :key="index">
            <div class="w-full text-left flex flex-row gap-5 py-1">
                <Icon :name="item.icon" class="size-7 text-accent-200" />
                <span class="text-lg text-tertiary">
                    {{ item.text[locale] }}
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';

const { locale } = useI18n();
const serviceStore = UseServiceStore()
const data = ref(serviceStore.GetServiceItIaMethodItems())
</script>