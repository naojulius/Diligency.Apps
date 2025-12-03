import type { AppLocale } from "~/types/interfaces/app-locale";

export interface Plan {
    id: string;
    icon: string;
    title: AppLocale;
    price: string;
    features: AppLocale;
    description: AppLocale;
}

export interface Offer {
    title: AppLocale;
    subtitle: AppLocale;
    plans: Plan[] | undefined;
    cta: AppLocale;
}