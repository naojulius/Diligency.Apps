import { SERVICE_DATA } from "~/data/service.data"
import { UseLoaderStore } from "./loader.store"

export const UseServiceStore = defineStore("service-store", () => {
    const nuxtApp = useNuxtApp()
    const apollo = nuxtApp.$apollo
    const loader = UseLoaderStore()
    const data = SERVICE_DATA;

    const GetForItemsLit = () => {
        return data?.ecommerce?.for?.items ?? [];
    }

    const GetMethodItemsLit = () => {
        return data?.ecommerce?.method?.items ?? [];
    }

    const GetGotItemsLit = () => {
        return data?.ecommerce?.got?.items ?? [];
    }

    const GetServiceItIaForItems = () => {
        return data?.itia.for.items ?? [];
    }

    const GetServiceItIaMethodItems = () => {
        return data?.itia.method.items ?? [];
    }

    const GetServiceItIaExampleItems = () => {
        return data?.itia.example.items ?? [];
    }

    return {
        GetForItemsLit,
        GetMethodItemsLit,
        GetGotItemsLit,
        GetServiceItIaForItems,
        GetServiceItIaMethodItems,
        GetServiceItIaExampleItems
    }
})
