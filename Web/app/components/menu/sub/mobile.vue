<template>
  <div class="lg:hidden size-full bg-tertiary flex flex-col gap-5 p-4 overflow-y-scroll">
    <div v-for="(menu, index) in menusList" :key="index"
      class="inter w-full text-3xl font-semibold text-left text-secondary-500 cursor-pointer py-2">
      <div @click="toggleMenu(menu)">
        <div class="flex flex-row items-center justify-between gap-2 w-full">
          <div class="flex flex-row items-center gap-4">
            <Icon :name="menu.icon" class="min-size-8 max-size-8" />
            <span>{{ $t(menu.locale) }}</span>
          </div>
          <Icon v-if="menu.children && menu.children.length > 0" name="lucide:chevron-down"
            :class="{ 'rotate-180': openMenu?.id === menu.id }" class="transition-transform duration-300" />
          <Icon v-if="!menu.children" name="lucide:chevron-right" class="transition-transform duration-300" />
        </div>
      </div>

      <div v-if="openMenu?.id === menu.id" class="pl-12 pt-2 space-y-2">
        <div @click="clickSubMenu(subMenu)" v-for="(subMenu, subIndex) in subMenuList" :key="subIndex"
          class="text-secondary-300 size-full py-2 font-normal text-2xl flex flex-col gap-2">
          <div class="text-xl font-semibold">
            {{ $t(subMenu.locale) }}
          </div>
          <div class="inter text-[18px]">
            {{ subMenu.description }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { UseMenuStore } from '~/stores/menu.store'
import type { Menu } from '~/types/menu/menu'

// Store
const menuStore = UseMenuStore()
const subMenuList = computed(() => menuStore.subMenuList)
const menusList = computed(() => menuStore.menusList)
const router = useRouter()
// Track currently opened menu
const openMenu = ref<Menu | null>(null)

const toggleMenu = (menu: Menu) => {
  if (!menu.children) {
    router.push(menu.link)
  }

  if (openMenu.value?.id === menu.id) {
    // Same menu clicked again: close it
    openMenu.value = null
  } else {
    // Open new menu
    openMenu.value = menu
    menuStore.SetSubMenuList(menu)
  }
}

const clickSubMenu = (subMenu: Menu) => {
  router.push(subMenu.link)
  menuStore.SetHumberger(false);
}
</script>
