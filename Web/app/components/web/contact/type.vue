<template>
    <div class="flex flex-col gap-2">
        <div v-for="option in options" :key="option.value"
            class="inline-flex items-center gap-2 cursor-pointer select-none transition-all"
            @click="emit('update:modelValue', option.value)">
            <!-- Outer radio circle -->
            <div
                class="h-6 aspect-square bg-white rounded-full flex items-center justify-center border border-tertiary">
                <!-- Animated inner dot -->
                <Transition enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="scale-0 opacity-0" enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition-all duration-200 ease-in" leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-0 opacity-0">
                    <div v-if="modelValue === option.value" class="h-3 aspect-square bg-tertiary rounded-full"></div>
                </Transition>
            </div>

            <!-- Label -->
            <span :class="[
                'transition-colors duration-200',
                'text-primary',
            ]">
                {{ option.label }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Option {
    label: string
    value: string
}

const props = defineProps<{
    modelValue: string | null
    options: Option[],
}>()

const emit = defineEmits<{
    'update:modelValue': [value: string | null]
}>()

onMounted(() => {
    if (!props.modelValue && props.options.length > 0) {
        emit('update:modelValue', props.options[0].value)
    }
})
</script>
