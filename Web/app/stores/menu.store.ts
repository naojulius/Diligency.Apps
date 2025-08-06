import { MenusList } from "~/config/local-api/menus-list";
import type { Menu } from "~/types/menu/menu";

export const UseMenuStore = defineStore('menu-store', () => {
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList: Ref<Menu[]> = ref(MenusList)

    const subMenuList: Ref<Menu[]> = ref([])

    const SetHumberger = (state: boolean) => {
        isHumberger.value = state;
        if (!state) {
            subMenuList.value = [];
        }
    }

    const SetSubMenuList = (menu: Menu) => {
        subMenuList.value = []
        menu.children?.forEach(el => {
            subMenuList.value.push(el);
        })
    }

    return {
        isHumberger,
        menusList,
        subMenuList,
        SetHumberger,
        SetSubMenuList
    }
});