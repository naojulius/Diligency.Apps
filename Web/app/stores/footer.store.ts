import { FOOTER_DATA } from "~/data/footer.data";
import type { AppLocale } from "~/types/interfaces/app-locale";
import type { MediaLink } from "~/types/interfaces/common/media-link";
import type { MenuLink } from "~/types/interfaces/common/menu-link";
import type { Menu } from "~/types/interfaces/menu";
import { UseLoaderStore } from "./loader.store";
import { UseMenuStore } from "./menu.store";

export const UseFooterStore = defineStore('footer-store', () => {
    const loader = UseLoaderStore()
    const data = ref(FOOTER_DATA)
    const menus = UseMenuStore().GetMenus

    const GetData = async () => {
        loader.ShowLoader()
        data.value = FOOTER_DATA
        loader.HideLoader()
    }

    GetData()

    const GetFooterApp = (): string => {
        return data?.value.app ?? ""
    }

    const GetFooterText = (): AppLocale => {
        return data?.value.text
    }

    const GetFooterMediaLink = (): Array<MediaLink> => {
        return data?.value.links
    }

    const GetFooterContact = (): Array<string> => {
        return data?.value.contact ?? []
    }

    const extractLinks = (menus: Menu[]): MenuLink[] => {
        let links: MenuLink[] = [];

        menus.forEach(menu => {
            if (menu.visible) {
                links.push({
                    text: menu.name as AppLocale,
                    link: menu.link
                });

                if (menu.children?.length) {
                    links = links.concat(extractLinks(menu.children));
                }
            }
        });

        return links;
    };

    const GetFooterNavigation = (): MenuLink[] => {
        return extractLinks(menus as Menu[]);
    };

    return {
        GetFooterApp,
        GetFooterText,
        GetFooterMediaLink,
        GetFooterContact,
        GetFooterNavigation
    }

});