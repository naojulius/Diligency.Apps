<template>
    <div v-if="subMenuList.length > 0"
        class="absolute hidden lg:block w-full h-screen top-16 border-t-[0.5px] border-tertiary bg-secondary px-10 2xl:px-35 transition-all duration-500 overflow-y-scroll">
        <div class="grid grid-cols-3 gap-6 w-full h-auto mt-4">
            <a v-for="(subMenu, subIndex) in subMenuList" :key="subIndex" :href="subMenu.link"
                class="p-4 hover:rounded  hover:shadow-sm transition-all duration-200 transform hover:scale-102 hover:bg-primary/80">
                <div class="text-lg font-semibold inline-flex items-center gap-4 text-tertiary">
                    <Icon :name="subMenu.icon" size="35" />
                    {{ $t(subMenu.locale) }}
                </div>
                <div class="font-regular text-sm text-gray-600 mt-1">
                    {{ subMenu.description }}
                </div>
            </a>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { UseMenuStore } from '~/stores/menu.store'
import type { Menu } from '~/types/menu/menu'

const menuStore = UseMenuStore()
const subMenuList = computed(() => menuStore.subMenuList)
const router = useRouter()

const clickSubMenu = (subMenu: Menu) => {
    router.push(subMenu.link)
    menuStore.SetHumberger(false);
}

watch(subMenuList, (val) => {
    if (val.length > 0) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})
</script>
