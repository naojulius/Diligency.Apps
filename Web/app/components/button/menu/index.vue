<template>
  <button @click="toggleMenu()" class="btn text-lg p-2 px-2 flex items-center justify-center gap-1 inter-bold text-secondary 
        hover:text-secondary-600 transition-all diuration-400">
    <span>
      {{ props.data.text }}
    </span>
    <Icon v-if="hasChilren" name="lucide:chevron-down"
      :class="['size-6 transition-transform duration-300 mr-3', openMenu?.id === currentMenuId ? 'rotate-180' : 'rotate-0']" />
  </button>
</template>

<script lang="ts" setup>
import { UseMenuStore } from '~/stores/menu.store'
const router = useRouter()
const menuStore = UseMenuStore()
const openMenu = computed(() => menuStore.openMenu)

const props = defineProps({
  data: {
    required: true,
    type: Object,
  }
})

const hasChilren = computed(() => {
  return props.data.children?.length > 0 ? true : false
})

const currentMenuId = computed(() => {
  return props.data.id
})

const toggleMenu = () => {
  const menu: any = props.data;

  if (!menu.children) {
    router.push(menu.link)
  } else {
    menuStore.SetSubMenuList(menu)
  }
}

const showUnderline = (): boolean => {
  const currentRoute: string = router.currentRoute.value.path
  return false;
}

</script>