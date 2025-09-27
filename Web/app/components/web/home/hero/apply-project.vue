<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false" @click="navigate"
        class="transition-all duration-300 h-14 bg-primary text-tertiary w-full md:w-auto px-4 rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold">
            {{ props.cta.text[locale] }}
        </span>
        <Icon :name="props.cta.icon"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-4' : 'ml-0']" />
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { DefaultCta } from '~/types/default/cta';

const hover = ref(false)
const router = useRouter();
const { locale } = useI18n()

const props = defineProps({
    cta: {
        required: true,
        type: Object,
        default: DefaultCta
    }
})

const navigate = () => {
    const link = props.cta.link
    if (link) {
        router.push(link);
    }
}
</script>
