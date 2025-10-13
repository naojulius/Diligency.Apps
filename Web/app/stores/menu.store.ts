import { MENU_DATA } from "~/data/menu.data";
import type { Menu } from "~/types/interfaces/menu";

export const UseMenuStore = defineStore('menu-store', () => {
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList: Ref<Menu[]> = ref([] as any)
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

    const Getdata = () => {
        menusList.value = MENU_DATA;
    }

    Getdata()

    return {
        isHumberger,
        menusList,
        subMenuList,
        openMenu,
        SetHumberger,
        SetSubMenuList
    }
});