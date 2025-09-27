<template>
    <Transition name="fade">
        <section v-if="loading" class="bg-red-200 h-screen w-screen overflow-hidden top-0 left-0 z-50 fixed">
            <div class="size-full bg-tertiary-500 flex items-center justify-center">
                <Icon name="lucide:brain" size="50"
                    class="text-secondary-500 animate-pulse transition-all duration-400" />
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