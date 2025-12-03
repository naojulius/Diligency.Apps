<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['update:modelValue'])
const hasError = computed(() => props.error && props.error.length > 0)
</script>

<template>
    <div>
        <textarea :placeholder="props.placeholder" :value="props.modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" :class="[
                'w-full min-h-28 p-1 rounded-md border-[1.5px] bg-primary',
                hasError
                    ? 'border-red-500 focus:border-red-600 bg-red-500/5'
                    : 'border-tertiary/50 focus:border-tertiary'
            ]"></textarea>

        <div class="text-red-500/70 text-xs px-1 text-left" v-if="hasError">
            {{ props.error }}
        </div>
    </div>
</template>
