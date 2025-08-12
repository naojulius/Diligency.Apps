<template>
  <nav class="bg-tertiary border-none top-0 fixed w-full h-20 lg:h-20 flex justify-center z-50">
    <div class="w-full px-4 lg:px-0 xl:w-11/12 2xl:w-10/12 h-full flex items-center justify-between">
      <NavigationTopLogo />
      <NavigationTopMenu />
      <NavigationTopLocale />
      <NavigationTopHumberger />
    </div>
    <section v-if="isHumberger"
      class="absolute w-full h-[calc(100vh-5rem)] lg:h-92 xl:h-98 top-20 overflow-hidden z-20">
      <div v-if="isHumberger" class="h-full" ref="mobileMenu">
        <MenuSubMobile />
      </div>
      <!-- <div v-if="true" class="h-full" ref="desktopMenu">
        <MenuSubDesktop />
      </div> -->
    </section>
  </nav>
</template>

<script lang="ts" setup>
import { UseMenuStore } from '~/stores/menu.store';
import { computed, watch, ref, nextTick } from 'vue'
import gsap from 'gsap'

const menuStore = UseMenuStore()
const isHumberger = computed(() => menuStore.isHumberger)
const mobileMenu = ref<HTMLElement | null>(null)

watch(isHumberger, async (open) => {
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

<style scoped>
section {
  transform-origin: top center;
}
</style>
