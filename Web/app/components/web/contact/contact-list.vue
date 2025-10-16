<template>
    <div class="flex justify-center w-full py-4 md:justify-start">
        <ul class="space-y-2 text-center md:text-left text-tertiary/80">
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