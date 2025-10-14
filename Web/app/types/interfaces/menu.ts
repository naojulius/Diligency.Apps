import type { AppLocale } from "./app-locale";

export interface Menu {
    id: string;
    name: AppLocale;
    link: string;
    icon: string;
    visible: boolean;
    texte: AppLocale;
    children?: Menu[];
}
