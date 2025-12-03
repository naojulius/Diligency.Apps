import { CONTACT_DATA } from "~/data/contact.data";
import type { AppLocale } from "~/types/interfaces/app-locale";
import { UseLoaderStore } from "./loader.store";

export const UseContactStore = defineStore('contact-store', () => {

    const loader = UseLoaderStore()
    const data = ref(CONTACT_DATA)

    const GetData = async () => {
        // loader.ShowLoader()
        data.value = CONTACT_DATA
        //loader.HideLoader()
    }

    GetData()

    //#region Body

    const GetContactTitle = (): AppLocale => {
        return data?.value.title
    }

    const GetContactSubtitle = (): AppLocale => {
        return data?.value.subtitle
    }

    const GetContactFormName = (): AppLocale => {
        return data?.value.form.name
    }

    const GetContactFormLastName = (): AppLocale => {
        return data?.value.form.lastname
    }

    const GetContactFormEmail = (): AppLocale => {
        return data?.value.form.email
    }

    const GetContactFormMessage = (): AppLocale => {
        return data?.value.form.message
    }

    const GetContactSendMessage = (): AppLocale => {
        return data?.value.form.sendMessage
    }

    const GetContactFormErros = (): Array<any> => {
        return data?.value.form.errors ?? []
    }

    const GetContactFormType = (): Array<any> => {
        return data?.value.form.type ?? []
    }


    //#endregion

    return {
        GetContactTitle,
        GetContactSubtitle,
        GetContactFormName,
        GetContactFormLastName,
        GetContactFormEmail,
        GetContactFormMessage,
        GetContactFormErros,
        GetContactSendMessage,
        GetContactFormType
    }
});