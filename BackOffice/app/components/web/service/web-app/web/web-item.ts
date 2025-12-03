import type { AppLocale } from "~/types/interfaces/app-locale";

export class WebItems {
    name!: AppLocale;
    icon!: string;
    text?: AppLocale;
}