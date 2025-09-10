<template>
    <!-- <button class="h-16 xl:h-12 md:h-auto bg-tertiary text-secondary text-xl w-full xl:w-auto p-4 rounded-lg flex items-center justify-center gap-2
        hover:text-secondary-700 transition-all duration-700">
        <span>
            Soumettre mon projet
        </span>
        <Icon name="lucide:arrow-right" class="size-8 fill-accent" />
    </button> -->
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        class="transition-all duration-300 h-14 bg-primary text-tertiary w-full rounded-lg flex items-center justify-center gap-3">
        <span class="font-semibold"> Soumettre mon projet</span>
        <Icon name="lucide:arrow-right"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-4' : 'ml-0']" />
    </button>
</template>
<script lang="ts" setup>
const hover = ref(false)
</script>