<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <img :src="data" class="size-full object-cover" />
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()

const data = computed(() => {
    return store.GetAgencyJobCarrierHeroBackground()
})
</script>
