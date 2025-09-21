<template>
    <div class="relative">
        <WebContactHero />
    </div>
</template>
<script lang="ts" setup>
import { UseMenuStore } from '~/stores/menu.store';
const menuStore = UseMenuStore()
menuStore.SetHumberger(false);
</script>