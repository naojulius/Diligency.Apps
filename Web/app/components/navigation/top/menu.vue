<template>
  <div class="hidden md:flex w-full h-full  items-center justify-center">
    <ButtonMenu
      v-for="(menu, index) in menusList"
      :key="index"
      :data="menu"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { UseMenuStore } from '~/stores/menu.store';

// Access the Pinia store
const menuStore = UseMenuStore();

// Computed list of menus
const menusList = computed(() => menuStore.menusList);
</script>
