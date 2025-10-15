<template>
    <SectionA :title="title" :subtitle="subtitle" :component="WebAgencyAboutEngagementList" />
</template>
<script lang="ts" setup>
import { WebAgencyAboutEngagementList } from '#components';
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()

const title = computed(() => {
    return store.GetAgencyAboutTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyAboutSubtitle()
})
</script>
