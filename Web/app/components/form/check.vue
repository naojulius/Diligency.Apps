<script setup lang="ts">
const props = defineProps({
    placeholder: {
        required: true,
        type: String,
    },
})

</script>
<template>
    <div class="inline-flex items-center justify-start w-full h-12 gap-4">
        <input type="checkbox" :placeholder="props.placeholder"
            class="h-8 aspect-square p-1 rounded-xl border-[1.5px] bg-primary border-tertiary/50" />
        <div class="w-full text-left">
            {{ props.placeholder }}
        </div>
    </div>
</template>