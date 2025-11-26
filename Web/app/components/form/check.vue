<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    placeholder: {
        required: true,
        type: String,
    },
    modelValue: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['update:modelValue'])

// Create a computed ref to sync internal state with modelValue
const checked = computed({
    get: () => props.modelValue,
    set: (val: boolean) => emit('update:modelValue', val)
})
</script>

<template>
    <div class="inline-flex items-center justify-start w-full h-12 gap-4">
        <div class="h-8 aspect-square p-1 rounded-full border-[2px] bg-primary border-tertiary/50 flex items-center justify-center cursor-pointer relative"
            @click="checked = !checked">
            <!-- Animated inner circle -->
            <Transition enter-active-class="transition-transform duration-200 ease-out"
                enter-from-class="scale-0 opacity-0" enter-to-class="scale-100 opacity-100"
                leave-active-class="transition-transform duration-150 ease-in" leave-from-class="scale-100 opacity-100"
                leave-to-class="scale-0 opacity-0">
                <div v-if="checked" class="h-full w-full bg-tertiary rounded-full"></div>
            </Transition>

            <!-- Invisible checkbox for accessibility -->
            <input type="checkbox" :placeholder="props.placeholder" v-model="checked"
                class="opacity-0 absolute top-0 left-0 h-full w-full rounded-full cursor-pointer" />
        </div>

        <div class="w-full text-left">
            {{ props.placeholder }}
        </div>
    </div>
</template>
