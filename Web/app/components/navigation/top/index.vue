<template>
  <nav :class="[
    'border-none top-0 fixed w-full h-20 lg:h-16 flex justify-center z-50 transition-colors duration-300',
    isScrolled ? 'bg-black' : 'bg-transparent'
  ]">
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
    </section>
  </nav>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { UseMenuStore } from '~/stores/menu.store'

const menuStore = UseMenuStore()
const isHumberger = computed(() => menuStore.isHumberger)
const mobileMenu = ref<HTMLElement | null>(null)

// SCROLL LOGIC
const isScrolled = ref(false)
const SCROLL_POINT = 80 // px

const handleScroll = () => {
  isScrolled.value = window.scrollY > SCROLL_POINT
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// GSAP logic (unchanged)
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