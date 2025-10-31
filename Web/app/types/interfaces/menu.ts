import type { AppLocale } from "./app-locale";

export class Menu {
    _key?: string;
    name!: AppLocale;
    link?: string;
    icon!: string;
    visible!: boolean;
    text?: AppLocale;
    children?: Menu[];
}

