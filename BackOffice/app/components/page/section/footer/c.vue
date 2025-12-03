<template>
    <section class="relative w-full h-auto px-4 py-10 md:px-10 2xl:px-35 md:py-20">
        <div class="absolute top-0 left-0 size-full z-0">
            <video class="size-full object-cover" autoplay muted loop playsinline>
                <source :src="background" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="flex flex-col w-full md:flex-row">
            <div class="flex flex-col w-full">
                <PageSectionFooterTitle :title="title" custom-class="text-secondary" custom-background="bg-secondary" />
                <PageSectionFooterSubtitle :subtitle="subtitle" custom-class="text-secondary" />
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-2 px-4 py-5 opacity-90 ">
                <component :is="getCta(item.type)" v-for="(item, index) in cta" :key="index" :data="item" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { GetCtaComponent } from '../../helpers/component.helper';
import { FooterType } from '../../types/commons/footer.type';


const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<FooterType>,
        default: () => new FooterType()
    }
})

const title = computed(() => (props.data as any)?.title ?? []);
const cta = computed(() => (props.data as any)?.cta ?? []);
const subtitle = computed(() => (props.data as any)?.text ?? null);
const background = computed(() => (props.data as any)?.background ?? null);

const getCta = (type: string) => {
    return GetCtaComponent(type)
}

</script>