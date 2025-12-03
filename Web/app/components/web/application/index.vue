<template>
    <div class="flex items-center justify-center w-full min-h-screen px-4 mt-16 lg:px-10 2xl:px-35">
        <component :is="store.ComposStep" :data="data" />
    </div>
</template>

<script lang="ts" setup>
import { useApplicationDataStore } from '~/stores/application/application.data.store';
import { useApplicationStore } from '~/stores/application/application.store';


const store = useApplicationStore()
const dataStore = useApplicationDataStore()
const data = ref(null)

watch(
    () => data.value,
    async (newVal) => {
        if (!newVal) {
            data.value = await dataStore.fetchData()
        }
    },
    { immediate: true }
)
</script>
