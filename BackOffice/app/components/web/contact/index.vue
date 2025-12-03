<template>
    <PageLayout customClass="h-auto bg-white">
        <WebContactHero />
    </PageLayout>
</template>
<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { useMenuStore } from '~/stores/menu/menu.store';
const menuStore = useMenuStore()
menuStore.SetHumberger(false);
</script>