<template>
    <div class="w-full text-center md:text-left">
        <ul class="space-y-1">
            <li class="cursor-pointer text-primary hover:text-secondary-700 transition-all duration-300"
                v-for="(item, index) in data" :key="index">
                {{ item }}</li>
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
