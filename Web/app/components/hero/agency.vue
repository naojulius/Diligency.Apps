<template>
    <PageLayout custom-class="relative h-auto lg:h-screen 2xl:h-[calc(100vh-10rem)]">
        <BackgroundImage :image="props.image" />
        <section class="py-4 size-full">
            <div class="flex items-center justify-center px-10 py-4 2xl:px-35 size-full">
                <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10 w-full">
                        <span v-for="(item, index) in props.title" :key="index">
                            {{ item[locale] }}
                        </span>
                    </h1>
                    <h2 class="z-10 text-xl text-center text-secondary">
                        {{ props.subtitle[locale] }}
                    </h2>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    title: {
        required: true,
        type: Object as PropType<Array<AppLocale>>,
    },
    subtitle: {
        required: true,
        type: Object as PropType<AppLocale>,
    },
    image: {
        required: false,
        type: String,
    }
})
</script>