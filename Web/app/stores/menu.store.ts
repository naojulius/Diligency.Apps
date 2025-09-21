import { MenusList } from "~/config/local-api/menus-list";
import type { Menu } from "~/types/menu/menu";

export const UseMenuStore = defineStore('menu-store', () => {
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList: Ref<Menu[]> = ref(MenusList)
    const subMenuList: Ref<Menu[]> = ref([])
    const openMenu: Ref<Menu | null> = ref(null)

    const SetHumberger = (state: boolean) => {
        isHumberger.value = state;
        if (!state) {
            subMenuList.value = [];
            openMenu.value = null
        }
    }

    const SetSubMenuList = (menu: Menu) => {
        if (openMenu.value?.id === menu.id) {
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
        SetSubMenuList
    }
});