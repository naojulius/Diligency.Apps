<template>
    <PageLayout :custom-class="customClass">
        <PageSectionHeroBackgroundImage :image="background" />
        <section class="py-4 size-full">
            <div class="flex items-center justify-center px-10 py-4 2xl:px-35 size-full">
                <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <PageSectionHeroTitle :title="title" />
                    <PageSectionHeroSubtitle :subtitle="subtitle" custom-class="text-center text-primary text-lg/10" />
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import { HeroType } from '../../types/hero.type';
import { AppLocaleType } from '../../types/commons/app-locale.type';


const { locale } = useI18n()
const props = defineProps({
    data: {
        required: false,
        type: Object as PropType<HeroType>,
        default: () => new HeroType()
    },
})

const customClass = computed(() => {
    return "relative h-auto lg:h-screen 2xl:h-[calc(100vh-10rem)]"
})

const background = computed((): string => {
    return props.data.background ?? ""
})

const title = computed((): AppLocaleType[] => {
    return props.data.title ?? []
})

const subtitle = computed((): AppLocaleType => {
    return props.data.subtitle ?? new AppLocaleType()
})

</script>