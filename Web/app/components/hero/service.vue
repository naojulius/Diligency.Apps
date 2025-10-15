<template>
    <PageLayout custom-class="relative h-auto lg:h-screen 2xl:h-[calc(100vh-10rem)]">
        <BackgroundImage :image="props.image" />
        <section class="size-full">
            <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center py-4">
                <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                        <span v-for="(item, index) in props.title" :key="index">
                            {{ item[locale] }}
                        </span>
                    </h1>
                    <h2 class="text-center text-xl text-secondary z-10">
                        {{ props.subtitle[locale] }}
                    </h2>
                    <div class="z-10 flex justify-center w-full" v-if="props.cta">
                        <component :is="props.cta" />
                    </div>
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
    cta: {
        required: false,
        type: Object as PropType<Component>,
    },
    image: {
        required: false,
        type: String,
    }
})
</script>