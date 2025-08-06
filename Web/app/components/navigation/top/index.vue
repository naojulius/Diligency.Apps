<template>
  <nav class="bg-tertiary border-none top-0 fixed w-full h-20 lg:h-20 lg:px-4 flex justify-center z-50">
    <div class="w-full h-full px-4 md:px-4 lg:w-4/5 2xl:w-4/6 flex items-center justify-between">
      <NavigationTopLogo />
      <NavigationTopMenu />
      <NavigationTopLocale />
      <NavigationTopHumberger />
    </div>
    <section v-if="isHumberger" ref="menu"
      class="absolute w-full h-[calc(100vh-5rem)] lg:h-92 xl:h-98 bg-red-100 top-20 overflow-hidden z-20">
      <MenuSubMobile />
      <MenuSubDesktop />
    </section>
  </nav>
</template>

<script lang="ts" setup>
import { UseMenuStore } from '~/stores/menu.store';
import { computed, watch, ref, nextTick } from 'vue'
import gsap from 'gsap'

const menuStore = UseMenuStore()
const isHumberger = computed(() => menuStore.isHumberger)
const menu = ref<HTMLElement | null>(null)

watch(isHumberger, async (open) => {
  if (open) {
    await nextTick()
    gsap.fromTo(
      menu.value,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
        transformOrigin: 'top center',
      }
    )
  } else {
    gsap.to(menu.value, {
      scaleY: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      transformOrigin: 'top center',
    })
  }
})
</script>

<style scoped>
section {
  transform-origin: top center;
}
</style>
