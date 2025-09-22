<template>
    <button
        class="px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
        <Icon name="lucide:calendar" class="size-7 fill-accent" />
        <span class="font-semibold">
            {{ props.text }}
        </span>
    </button>
</template>
<script lang="ts" setup>
const props = defineProps({
    text: {
        required: true,
        type: String,
        default: ''
    }
})
</script>