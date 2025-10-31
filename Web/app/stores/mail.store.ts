import { defineStore } from 'pinia'
import type { MailData } from '~/types/interfaces/mail-data'


export const useMailStore = defineStore('mail-store', () => {
    const sending = ref(false)
    const success = ref(false)
    const error = ref<string | null>(null)

    const Save = async (data: MailData) => {
        sending.value = true
        error.value = null
        success.value = false

        try {
            await SANITY_CLIENT.create({
                _type: 'mail',
                firstName: data.firstName,
                lastName: data.lastName,
                message: data.message,
            })

            success.value = true
        } catch (err: any) {
            error.value = err.message || 'Failed to send mail'
        } finally {
            sending.value = false
        }
    }

    return {
        sending,
        success,
        error,
        Save,
    }
})
