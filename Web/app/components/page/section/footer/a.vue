<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-10 2xl:px-35">
            <div class="flex flex-col w-full gap-2 py-0 text-xl font-bold text-center text-tertiary/90">
                {{ text?.[locale] }}
            </div>
            <div class="z-10 flex flex-col items-center justify-center w-full gap-5 md:flex-row">
                <component :is="getCta(item.type)" v-for="(item, index) in cta" :key="index" :data="item" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { GetCtaComponent } from '../../helpers/component.helper';
import { FooterType } from '../../types/commons/footer.type';
const { locale } = useI18n()
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<FooterType>,
        default: () => new FooterType()
    }
})

const text = computed(() => (props.data as any)?.text ?? null);
const cta = computed(() => (props.data as any)?.cta ?? []);

const getCta = (type: string) => {
    return GetCtaComponent(type)
}
</script>