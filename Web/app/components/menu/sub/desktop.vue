<template>
  <div v-if="subMenuList.length > 0"
    class="shadow absolute hidden lg:block w-full h-auto top-16 border-t-[0.5px] border-tertiary bg-primary px-10 2xl:px-35 transition-all duration-500">
    <div class="grid w-full h-auto grid-cols-3 gap-2 py-10">
      <a v-for="(subMenu, subIndex) in subMenuList" :key="subIndex" :href="subMenu.link"
        class="group p-4 transition-all transform hover:rounded hover:shadow-sm duration-100 hover:bg-gray-200/70">
        <div class="inline-flex items-center gap-4 text-lg font-semibold text-tertiary">
          <Icon :name="subMenu.icon" size="35" class="group-hover:scale-120 transition-all duration-500" />
          <span class="text-xl">
            {{ subMenu.name[locale] }}
          </span>
        </div>
        <div class="mt-1 text-md text-tertiary/80 font-regular">
          {{ subMenu.texte[locale] }}
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { UseMenuStore } from '~/stores/menu.store'
const { locale } = useI18n()
const menuStore = UseMenuStore()
const router = useRouter()
const lastScrollY = ref(0)

const subMenuList = computed(() => {
  return menuStore.subMenuList
})

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY - lastScrollY.value > 10) {
    if (menuStore.subMenuList.length > 0) {
      menuStore.openMenu = null
      menuStore.subMenuList = []
    }
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
