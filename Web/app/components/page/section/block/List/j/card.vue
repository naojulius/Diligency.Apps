<template>
    <div class="flex items-center">
        <img :src="item.image" alt="hub-img" class="w-16 h-16 rounded object-cover mr-4" />
        <div>
            <div class="font-semibold text-tertiary">{{ item.author }}</div>
        </div>
    </div>
    <blockquote class="text-tertiary/80 mb-4 mt-4 text-sm">
        &quot; {{ trimedContent(item.content?.[locale]) }} &quot;
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

const trimedContent = (
    text: string | string[] | undefined,
    limit: number = 30
): string => {
    if (!text) return "";

    const safeText = Array.isArray(text) ? text.join(" ") : text;

    const words = safeText.split(/\s+/);
    if (words.length <= limit) return safeText;

    return words.slice(0, limit).join(" ") + " ...";
};

</script>