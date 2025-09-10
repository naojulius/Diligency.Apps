<template>
    <PageLayout>
        <WebContactHero />
    </PageLayout>
</template>
<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { UseMenuStore } from '~/stores/menu.store'
const menuStore = UseMenuStore()
menuStore.SetHumberger(false);
</script>