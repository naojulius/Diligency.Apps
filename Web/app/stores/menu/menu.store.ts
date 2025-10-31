import { MENU_DATA } from "~/data/menu.data";
import type { Menu } from "~/types/interfaces/menu";
import { GET_MENU_GROQ } from "~/utils/groq/menu.groq";
import { UseLoaderStore } from "../loader.store";

export const useMenuStore = defineStore('menu-store', () => {
    const loader = UseLoaderStore()
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList = ref(MENU_DATA)
    const subMenuList: Ref<Menu[]> = ref([])
    const openMenu: Ref<Menu | null> = ref(null)

    const fetchData = async () => {
        loader.ShowLoader()
        try {
            menusList.value = await SANITY_CLIENT.fetch(GET_MENU_GROQ)
            loader.HideLoader()
        } catch (err) {
            console.error("Error fetching menus list:", err)
        }
    }

    fetchData();

    const GetMenus = computed(() => {
        return menusList.value
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
