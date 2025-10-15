<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10 bg-primary">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
            <span v-for="(item, index) in title" :key="index">
                {{ item[locale] }}
            </span>
        </div>
        <SpacingSectionTitle />
        <div class="text-left relative z-10 text-tertiary/80 font-regular w-full md:w-[700px] text-lg font-regular">
            {{ subtitle[locale] }}
        </div>
        <div class="w-full py-4 flex flex-col gap-4 md:flex-row items-center h-full">
            <WebAgencyAboutTeamCtaA />
            <WebAgencyAboutTeamCtaB />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetAgencyAboutTeamTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyAboutTeamSubtitle()
})
</script>