<template>
    <Transition name="fade">
        <section v-if="loading" class="fixed top-0 left-0 z-50 w-screen h-screen overflow-hidden bg-red-200">
            <div class="flex items-center justify-center size-full bg-tertiary-500">
                <Icon name="lucide:brain" size="50"
                    class="transition-all text-secondary-500 animate-pulse duration-400" />
            </div>
        </section>
    </Transition>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { UseLoaderStore } from '~/stores/loader.store'

const loader = UseLoaderStore()
loader.ShowLoader()
const loading = computed(() => loader.loading)

onMounted(async () => {
    const router = useRouter()
    await router.isReady()
    setTimeout(() => {
        loader.HideLoader()
    }, 500)
})
</script>