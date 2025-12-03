import type { Menu } from "~/types/interfaces/menu";
import { UseLoaderStore } from "../loader.store";

export const useMenuStore = defineStore('menu-store', () => {
    const loader = UseLoaderStore()
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList = ref()
    const subMenuList: Ref<Menu[]> = ref([])
    const openMenu: Ref<Menu | null> = ref(null)

    const GetMenus = computed(() => {
        return menusList.value ?? []
    })

    const SetHumberger = (state: boolean) => {
        isHumberger.value = state;
        if (!state) {
            subMenuList.value = [];
            openMenu.value = null
        }
    }

    const SetSubMenuList = (menu: Menu) => {
        if (openMenu.value?._key === menu._key) {
            openMenu.value = null
            subMenuList.value = []
        } else {
            openMenu.value = menu
            subMenuList.value = menu.children ? [...menu.children] : []
        }
    }

    return {
        isHumberger,
        menusList,
        subMenuList,
        openMenu,
        SetHumberger,
        SetSubMenuList,
        GetMenus
    }
});
