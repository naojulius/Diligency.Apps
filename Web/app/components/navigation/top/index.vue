<template>
  <nav :class="[
    'border-none top-0 fixed w-full h-20 lg:h-16 flex justify-center z-50 transition-colors duration-300',
    isScrolled ? 'bg-tertiary/80' : 'bg-transparent'
  ]">
    <div class="flex items-center justify-between w-full h-full px-4 lg:px-10 2xl:px-35">
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
const route = useRoute()

const isScrolled = ref(false)
const SCROLL_POINT = ref(80)
const permanentTertiaryHeaderBackground = [
  "/contact", "/application"
]
const path = computed(() => route.path)


const handleScroll = () => {
  if (permanentTertiaryHeaderBackground.includes(path.value)) {
    isScrolled.value = true
    return
  }

  isScrolled.value = window.scrollY > SCROLL_POINT.value
}

watch(() => route.path, () => {
  handleScroll()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>