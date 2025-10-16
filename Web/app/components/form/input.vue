<script setup lang="ts">
const props = defineProps({
    type: {
        required: true,
        type: String,
    },
    placeholder: {
        required: true,
        type: String,
    },
})

</script>
<template>
    <input v-if="type == 'text' || type == 'email'" :type="props.type" :placeholder="props.placeholder"
        class="w-full h-12 p-1 rounded-md border-[1.5px] bg-primary border-tertiary/50" />
</template>