<template>

  <div v-if="isHumberger" class="absolute w-full h-[calc(100vh-5rem)] lg:h-screen top-20 md:top-16 overflow-hidden z-20"
    ref="mobileMenu">
    <div class="lg:hidden size-full bg-tertiary flex flex-col gap-5 p-4 pt-8 overflow-y-scroll">
      <div v-for="(menu, index) in menusList" :key="index"
        class="inter w-full font-semibold text-left text-secondary-500 cursor-pointer">
        <div @click="toggleMenu(menu)">
          <div class="flex flex-row items-center justify-between gap-2 w-full">
            <div class="flex flex-row items-center gap-4">
              <Icon :name="menu.icon" class="size-8" />
              <span class="text-2xl">{{ $t(menu.locale) }}</span>
            </div>
            <Icon v-if="menu.children && menu.children.length > 0" name="lucide:chevron-down"
              :class="{ 'rotate-180': openMenu?.id === menu.id }"
              class="size-6 transition-transform duration-300 mr-3" />
            <Icon v-if="!menu.children" name="lucide:chevron-right"
              class="size-6 transition-transform duration-300 mr-3" />
          </div>
        </div>

        <div v-if="openMenu?.id === menu.id" class="pl-12 pt-2 space-y-2">
          <div @click="clickSubMenu(subMenu)" v-for="(subMenu, subIndex) in subMenuList" :key="subIndex"
            class="text-secondary-300 size-full py-2 font-normal text-2xl flex flex-col gap-2">
            <div class="text-lg font-semibold">
              {{ $t(subMenu.locale) }}
            </div>
            <div class="inter text-[18px]">
              {{ subMenu.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { UseMenuStore } from '~/stores/menu.store'
import type { Menu } from '~/types/interfaces/menu'

const mobileMenu = ref<HTMLElement | null>(null)
const openMenu = computed(() => menuStore.openMenu)

const subMenuList = computed(() => menuStore.subMenuList)
const menusList = computed(() => menuStore.menusList)
const isHumberger = computed(() => menuStore.isHumberger)

const router = useRouter()
const menuStore = UseMenuStore()

const toggleMenu = (menu: Menu) => {
  if (!menu.children) {
    router.push(menu.link)
  } else {
    menuStore.SetSubMenuList(menu)
  }
}

const clickSubMenu = (subMenu: Menu) => {
  router.push(subMenu.link)
  menuStore.SetHumberger(false);
}

watch(isHumberger, async (open: any) => {
  if (open) {
    await nextTick()
    gsap.fromTo(
      mobileMenu.value,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
        transformOrigin: 'top center',
      }
    )
  } else {
    gsap.to(mobileMenu.value, {
      scaleY: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      transformOrigin: 'top center',
    })
  }
})
</script>
