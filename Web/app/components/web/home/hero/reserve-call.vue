<template>
    <button
        class="px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
        <Icon :name="props.cta.icon" class="size-7 fill-accent" />
        <span class="font-semibold">
            {{ props.cta.text[locale] }}
        </span>
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { DefaultCta } from '~/types/default/cta';

const { locale } = useI18n()
const router = useRouter();

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