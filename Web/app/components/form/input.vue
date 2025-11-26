<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input v-if="type === 'text' || type === 'email'" :type="type" :placeholder="placeholder" autocomplete="off"
        class="w-full h-12 p-1 rounded-md border-[1.5px] bg-primary border-tertiary/80 text-tertiary/80"
        :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>
