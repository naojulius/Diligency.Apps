<template>
    <div class="w-full md:w-1/2" v-if="props.data">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            <span v-for="item in title">
                {{ item[locale] }}
            </span>
        </div>
        <div class="text-center text-lg/6 text-tertiary/80">
            {{ description?.[locale] }}
        </div>
        <div class="flex items-center justify-end py-5">
            <ButtonCtaLink :data="cta" @click="store.next()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { AppLocaleType } from '~/components/page/types/commons/app-locale.type';
import { useApplicationStore } from '~/stores/application/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const { locale } = useI18n()
const store = useApplicationStore()
const title = ref([])
const description = ref(null)

const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: {
        fr: "Commencer",
        en: "Start application"
    }
}

const props = defineProps({
    data: {
        required: true,
        type: [Object, null],
        default: null
    },
})

watch(() => props.data, (_data) => {
    if (_data) {
        title.value = _data.applicationIntroduction?.title ?? []
        description.value = _data.applicationIntroduction?.description ?? new AppLocaleType()
    }
})  
</script>