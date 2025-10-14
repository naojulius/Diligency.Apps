<template>
    <div class="w-full">
        <div class="flex justify-between gap-4 text-xl text-center md:text-left">
            <ul class="flex-1 space-y-2 ">
                <li v-for="(item, index) in leftColumn" :key="index">
                    <a :href="item.link as string" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text[locale] }}
                    </a>
                </li>
            </ul>
            <ul class="flex-1 space-y-2">
                <li v-for="(item, index) in rightColumn" :key="index">
                    <a :href="item.link as string" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text[locale] }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UseFooterStore } from '~/stores/footer.store';
const store = UseFooterStore()
const { locale } = useI18n()
const linkList = computed(() => {
    return store.GetFooterNavigation()
})
const half = Math.ceil(linkList.value.length / 2);
const leftColumn = linkList.value.slice(0, half);
const rightColumn = linkList.value.slice(half);

</script>