<template>
    <div class="w-full">
        <ul class="space-y-2 text-gray-300">
            <li v-for="(item, index) in data" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { UseFooterStore } from '~/stores/footer.store';
const store = UseFooterStore()

const data = computed(() => {
    return store.GetFooterContact()
})
</script>
