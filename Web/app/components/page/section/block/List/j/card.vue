<template>
    <div class="flex items-center">
        <img :src="item.image" alt="hub-img" class="w-16 h-16 rounded object-cover mr-4" />
        <div>
            <div class="font-semibold text-tertiary">{{ item.name }}</div>
            <div class=" text-secondary-800 text-md py-2">{{ item.role }}</div>
        </div>
    </div>
    <blockquote class="text-tertiary/80 mb-4 mt-4">
        &quot; {{ item.quote?.[locale] }} &quot;
    </blockquote>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { HUB_PROPS } from '~/components/page/helpers/props/hub.props.helper';
import type { LayoutJ } from '~/components/page/types/commons/list/list-j.type';

const { locale } = useI18n()
const props = defineProps(HUB_PROPS)


const item = computed(() => {
    var data = props.data as LayoutJ;
    return data;
})

</script>