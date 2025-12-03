<template>
  <button @click="toggleMenu"
    class="relative flex items-center justify-center gap-1 p-2 px-2 text-lg transition-all inter-bold text-secondary hover:text-secondary-600 duration-300">
    <span class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-secondary after:transition-all after:duration-300 
             hover:after:w-full hover:after:opacity-100" :class="{ 'after:w-full after:opacity-100': isActive }">
      {{ props.data.name[locale] }}
    </span>

    <Icon v-if="hasChildren" name="lucide:chevron-down" :class="[
      'size-6 transition-transform duration-300 mr-3',
      openMenu?._key === currentMenuId ? 'rotate-180' : 'rotate-0',
    ]" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useMenuStore } from '~/stores/menu/menu.store'

const router = useRouter()
const menuStore = useMenuStore()
const openMenu = computed(() => menuStore.openMenu)

const props = defineProps({
  data: {
    required: true,
    type: Object,
  },
})

const { locale } = useI18n()

const hasChildren = computed(() => props.data.children?.length > 0)
const currentMenuId = computed(() => props.data._key)

const toggleMenu = () => {
  const menu: any = props.data
  if (!menu.children) {
    router.push(menu.link)
  } else {
    menuStore.SetSubMenuList(menu)
  }
}

// ✅ Detect active route
const isActive = computed(() => {
  // const currentPath = router.currentRoute.value.path // e.g. "/it-ia/solutions"
  // const firstSegment = currentPath.split('/')[1]?.toLowerCase() || ''

  // // Check if the route path includes button name
  // const buttonName = props.data.name[locale.value]?.toLowerCase() || ''
  // return currentPath === props.data.link || firstSegment.includes(buttonName)
  false
})
</script>
