import { FOOTER_DATA } from "~/data/footer.data";
import type { AppLocale } from "~/types/interfaces/app-locale";
import type { Cta } from "~/types/interfaces/common/cta";
import type { MediaLink } from "~/types/interfaces/common/media-link";
import type { MenuLink } from "~/types/interfaces/common/menu-link";
import type { Menu } from "~/types/interfaces/menu";
import { UseLoaderStore } from "./loader.store";
import { useMenuStore } from "./menu/menu.store";

export const UseFooterStore = defineStore('footer-store', () => {
    const loader = UseLoaderStore()
    const data = ref(FOOTER_DATA)
    const menus = useMenuStore().GetMenus

    const GetData = async () => {
        // loader.ShowLoader()
        data.value = FOOTER_DATA
        //loader.HideLoader()
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

    const GetFooterRights = (): AppLocale => {
        return data?.value.rights
    }

    const GetFooterOpenDate = (): AppLocale => {
        return data?.value.openDate
    }

    const GetFooterTitle = (): AppLocale => {
        return data?.value.title
    }

    const GetFooterSubtitle = (): AppLocale => {
        return data?.value.subtitle
    }

    const GetFooterCta = (): Cta => {
        return data?.value.cta
    }

    const extractLinks = (menus: Menu[]): MenuLink[] => {
        let links: MenuLink[] = [];

        menus.forEach(menu => {
            if (menu.visible) {
                links.push({
                    text: menu.name as AppLocale,
                    link: menu.link ?? ""
                });

                if (menu.children?.length) {
                    links = links.concat(extractLinks(menu.children));
                }
            }
        });

        return links;
    };

    const GetFooterNavigation = (): MenuLink[] => {
        return extractLinks(menus as any);
    };

    return {
        GetFooterApp,
        GetFooterText,
        GetFooterMediaLink,
        GetFooterContact,
        GetFooterNavigation,
        GetFooterRights,
        GetFooterCta,
        GetFooterOpenDate,
        GetFooterTitle,
        GetFooterSubtitle
    }

});