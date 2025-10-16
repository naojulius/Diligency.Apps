<script setup lang="ts">
const props = defineProps({
    placeholder: {
        required: true,
        type: String,
    },
})

</script>
<template>
    <textarea :placeholder="props.placeholder"
        class="w-full min-h-32 p-1 rounded-md border-[1.5px] bg-primary border-tertiary/50"></textarea>
</template>