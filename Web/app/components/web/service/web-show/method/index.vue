<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <span v-for="(item, index) in title" :key="index">
                        {{ item[locale] }}
                    </span>
                </div>
            </div>
            <WebServiceWebShowMethodList />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetWebShowMethodTitle()
})
</script>
