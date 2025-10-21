<template>
    <PageLayout :custom-class="customClass">
        <PageSectionHeroBackgroundImage :image="backgroundImage" v-if="backgroundImage" />
        <PageSectionHeroBackgroundVideo :video="backgroundVideo" v-if="backgroundVideo" />
        <section class="py-4 size-full">
            <div class="flex items-center justify-center px-4 xl:px-10 py-4 2xl:px-35 size-full">
                <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <PageSectionHeroTitle :title="title" />
                    <PageSectionHeroSubtitle :subtitle="subtitle" custom-class="text-center text-primary text-lg/10" />
                    <div class="z-10 flex flex-col items-center justify-center w-full gap-5 md:flex-row">
                        <component :is="getCta(item.type!)" v-for="(item, index) in cta" :key="index" :data="item" />
                    </div>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { GetCtaComponent } from '../../helpers/component.helper';
import { AppLocaleType } from '../../types/commons/app-locale.type';
import type { CtaType } from '../../types/commons/cta.type';
import { HeroType } from '../../types/hero.type';

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

const backgroundImage = computed((): string => {
    return props.data.image ?? ""
})

const backgroundVideo = computed((): string => {
    return props.data.video ?? ""
})

const title = computed((): AppLocaleType[] => {
    return props.data.title ?? []
})

const subtitle = computed((): AppLocaleType => {
    return props.data.subtitle ?? new AppLocaleType()
})

const cta = computed((): CtaType[] | undefined => {
    return props.data.cta ?? undefined
})

const getCta = (type: string) => {
    return GetCtaComponent(type)
}
</script>