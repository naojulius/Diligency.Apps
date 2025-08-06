<template>
    <Transition name="fade">
        <section v-if="showLoader" class="bg-red-200 h-screen w-screen overflow-hidden top-0 left-0 z-50 fixed">
            <div class="size-full bg-tertiary-500 flex items-center justify-center">
                <Icon name="lucide:brain" size="50"
                    class="text-secondary-500 animate-pulse transition-all duration-400" />
            </div>
        </section>
    </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const showLoader = ref(true)

onMounted(async () => {
    const router = useRouter()
    await router.isReady()
    setTimeout(() => {
        showLoader.value = false
    }, 500)
})
</script>