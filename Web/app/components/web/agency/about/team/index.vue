<template>
    <SectionA :title="title" :subtitle="subtitle" />
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