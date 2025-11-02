<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <textarea :placeholder="props.placeholder"
        class="w-full min-h-28 p-1 rounded-md border-[1.5px] bg-primary border-tertiary/50" :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"></textarea>
</template>
