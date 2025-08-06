import type { Menu } from "~/types/menu/menu";

export const UseMenuStore = defineStore('menu-store', () => {
    const isHumberger: Ref<Boolean> = ref(false)
    const menusList: Ref<Menu[]> = ref([
        {
            id: 0,
            text: "A propos",
            link: "/",
            icon: "lucide:info",
            locale: "",
            visible: true,
            children: [
                {
                    text: "Sub Menu 1",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:info",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",
                },
                {
                    text: "Sub Menu 2",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:info",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",

                },
                {
                    text: "Sub Menu 3",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:info",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",

                }
            ]
        },
        {
            id: 1,
            text: "Services",
            link: "/",
            locale: "",
            visible: true,
            icon: "lucide:separator-vertical",
            children: [
                {
                    text: "Sub Menu 4",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:separator-vertical",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",

                },
                {
                    text: "Sub Menu 5",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:separator-vertical",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",

                },
                {
                    text: "Sub Menu 6",
                    link: "/",
                    locale: "",
                    visible: true,
                    icon: "lucide:separator-vertical",
                    description: "To make only the clicked menu item show its submenu (while hiding all others), and toggle it correctly when clicked again, you need to:",

                }
            ]
        },
        {
            id: 2,
            text: "contactez-nous",
            link: "/test",
            locale: "",
            visible: true,
            icon: "lucide:message-circle-more",
        }
    ])

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