<template>

  <div v-if="isHumberger" class="absolute w-full h-[calc(100vh-5rem)] lg:h-screen top-20 md:top-16 overflow-hidden z-20"
    ref="mobileMenu">
    <div class="flex flex-col gap-5 p-4 pt-8 overflow-y-scroll lg:hidden size-full bg-primary">
      <div v-for="(menu, index) in menusList" :key="index"
        class="w-full font-semibold text-left cursor-pointer inter text-tertiary-500">
        <div @click="toggleMenu(menu as Menu)">
          <div class="flex flex-row items-center justify-between w-full gap-2">
            <div class="flex flex-row items-center gap-4">
              <Icon :name="menu.icon" class="size-8" />
              <span class="text-2xl">{{ menu.name[locale] }}</span>
            </div>
            <Icon v-if="menu.children && menu.children.length > 0" name="lucide:chevron-down"
              :class="{ 'rotate-180': openMenu?._key === menu.id }"
              class="mr-3 transition-transform duration-300 size-6" />
            <Icon v-if="!menu.children" name="lucide:chevron-right"
              class="mr-3 transition-transform duration-300 size-6" />
          </div>
        </div>

        <div v-if="openMenu?._key === menu.id" class="pt-2 pl-12 space-y-2">
          <div @click="clickSubMenu(subMenu)" v-for="(subMenu, subIndex) in subMenuList" :key="subIndex"
            class="flex flex-col gap-2 py-2 text-2xl font-normal text-tertiary-500/80 size-full">
            <div class="text-lg font-semibold">
              {{ subMenu.name[locale] }}
            </div>
            <div class="inter text-[18px]">
              {{ subMenu.text?.[locale] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap/gsap-core'
import { computed, ref } from 'vue'
import { useMenuStore } from '~/stores/menu/menu.store'
import type { Menu } from '~/types/interfaces/menu'

const { locale } = useI18n()
const mobileMenu = ref<HTMLElement | null>(null)
const openMenu = computed(() => menuStore.openMenu)

const subMenuList = computed(() => menuStore.subMenuList)
const menusList = computed(() => menuStore.menusList)
const isHumberger = computed(() => menuStore.isHumberger)

const router = useRouter()
const menuStore = useMenuStore()

const toggleMenu = (menu: Menu) => {
  if (!menu.children && menu.link) {
    router.push(menu.link)
  } else {
    menuStore.SetSubMenuList(menu)
  }
}

const clickSubMenu = (subMenu: Menu) => {
  if (subMenu.link) {
    router.push(subMenu.link)
  }
  menuStore.SetHumberger(false);
}

watch(isHumberger, async (open: any) => {
  if (open) {
    await nextTick()
    document.body.classList.add('overflow-hidden')
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
    document.body.classList.remove('overflow-hidden')
    gsap.to(mobileMenu.value, {
      scaleY: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      transformOrigin: 'top center',
    })
  }
})
</script>
