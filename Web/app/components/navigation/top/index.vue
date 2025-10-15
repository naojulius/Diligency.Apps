<template>
  <nav :class="[
    'border-none top-0 fixed w-full h-20 lg:h-16 flex justify-center z-50 transition-colors duration-300',
    isScrolled ? 'bg-tertiary/80' : 'bg-transparent'
  ]">
    <div class="w-full px-4 lg:px-10 2xl:px-35 h-full flex items-center justify-between">
      <NavigationTopLogo />
      <NavigationTopMenu />
      <NavigationTopLocale />
      <NavigationTopHumberger />
    </div>
    <MenuSubMobile />
    <MenuSubDesktop />
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
const router = useRouter();

// SCROLL LOGIC
const isScrolled = ref(false)
const SCROLL_POINT = 80
const permanentTertiaryHeaderBackground = [
  "/contact", "/application"
]
const handleScroll = () => {
  const path = router.currentRoute.value.path.toLowerCase()

  if (permanentTertiaryHeaderBackground.includes(path)) {
    isScrolled.value = true
    return
  }

  isScrolled.value = window.scrollY > SCROLL_POINT
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>