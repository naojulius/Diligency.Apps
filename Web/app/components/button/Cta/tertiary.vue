<template>
    <button type="button" @click="navigate" :class="['px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex ms:flex-row items-center justify-center gap-3 active:bg-secondary  active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary',
        props.customClass
    ]">
        <Icon :name="props.data.icon" class="hidden md:block size-7 fill-accent" />
        <span class="font-semibold">
            {{ props.data.text[locale] }}
        </span>
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Cta } from '~/types/interfaces/common/cta'

const router = useRouter()

const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<Cta>,
    },
    customClass: {
        required: false,
        type: String,
        default: "hover:bg-secondary"
    }
})

const navigate = () => {
    const link = props.data.link
    if (link) {
        router.push(link)
    }
}

const { locale } = useI18n()
</script>