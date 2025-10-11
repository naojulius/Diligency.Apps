<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <video class="size-full object-cover" autoplay muted loop playsinline>
            <source :src="data" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black/50"></div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()

const data = computed(() => {
    return store.GetConversionBacground()
})
</script>
