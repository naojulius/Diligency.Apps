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
import { UseLoaderStore } from '~/stores/loader.store'
import { useMenuStore } from '~/stores/menu/menu.store'
import { GET_MENU_GROQ } from '~/utils/groq/menu.groq'

const route = useRoute()
const menustore = useMenuStore()
const isScrolled = ref(false)
const SCROLL_POINT = ref(80)
const permanentTertiaryHeaderBackground = [
  "/contact", "/application", "/article"
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

const loader = UseLoaderStore()

const fetchData = async () => {
  loader.ShowLoader()
  try {
    let res = await SANITY_CLIENT.fetch(GET_MENU_GROQ)
    menustore.menusList = res
    loader.HideLoader()
  } catch (err) {
    loader.HideLoader()
    console.error("Error fetching contact data:", err)
  }
}

onMounted(() => {
  fetchData()
})
</script>