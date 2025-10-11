import type { AppLocale } from "~/types/interfaces/app-locale";

export class Expertise {
    icon!: string;
    title!: AppLocale;
    text!: AppLocale;
    technos!: Array<string>;
    link!: string;
}