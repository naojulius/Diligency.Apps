<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        class="transition-all duration-500 h-14 bg-primary text-tertiary w-full rounded-lg flex items-center justify-center gap-3 hover:bg-secondary active:bg-secondary">
        <span class="font-semibold">Discutons de votre projet</span>
        <Icon name="lucide:arrow-right"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-4' : 'ml-0']" />
    </button>
</template>
<script lang="ts" setup>
const hover = ref(false)
</script>