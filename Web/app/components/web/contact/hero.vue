<template>
    <div class="w-full h-auto  px-4 lg:px-10 2xl:px-35 py-16">
        <div class="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2 z-10 py-10">
            <div class="w-full md:w-1/2 space-y-6">
                <div class="text-5xl font-bold text-tertiary text-center md:text-left">
                    {{ title[locale] }}
                </div>
                <div class="text-xl font-regular text-tertiary/70 w-full md:w-[500px] text-center md:text-left">
                    {{ subtitle[locale] }}
                </div>
                <WebContactList />
            </div>
            <div class="p-1 w-full md:w-1/2 h-full  flex items-end justify-end">
                <div class="p-4 w-full md:w-9/12 h-full bg-tertiary rounded-xl ">
                    <form @submit.prevent="handleSubmit" class="space-y-5 pt-4">
                        <div class="flex flex-row gap-4">
                            <input v-model="form.firstName" type="text" :placeholder="String(formName[locale])"
                                class="h-12 w-full bg-primary rounded-lg p-2 active:ring-0" />
                            <input v-model="form.lastName" type="text" :placeholder="String(formLastName[locale])"
                                class="h-12 w-full bg-primary rounded-lg p-2" />
                        </div>
                        <input v-model="form.email" type="email" :placeholder="String(formEmail[locale])"
                            class="h-12 w-full bg-primary rounded-lg p-2" />
                        <textarea v-model="form.message" :placeholder="String(formMessage[locale])"
                            class="min-h-42 w-full bg-primary rounded-lg p-2"></textarea>

                        <WebContactType v-model="form.typeAppel" :options="options" />
                        <hr class="text-primary">
                        <ul v-if="errors.length" class="text-primary text-sm list-disc pl-4">
                            <li v-for="err in errors" :key="err">{{ err }}</li>
                        </ul>

                        <button type="submit"
                            class="transition-all duration-300 h-14 bg-tertiary text-secondary w-full rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
                            <span class="font-semibold">
                                <span v-if="!mailStore.sending">
                                    {{ sendMessage[locale] }}
                                </span>
                                <span v-else>⏳ Envoi...</span>
                            </span>
                            <Icon name="lucide:chevron-right" class="size-7 fill-accent" />
                        </button>

                        <p v-if="mailStore.success" class="text-green-500">✅ Message envoyé !</p>
                        <p v-if="mailStore.error" class="text-red-500">❌ {{ mailStore.error }}</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { WebContactList } from '#components'
import { reactive, ref } from 'vue'
import { z } from 'zod'
import { UseContactStore } from '~/stores/contact.store'
import { useMailStore } from '~/stores/mail.store'

import type { MailData } from '~/types/interfaces/mail-data'

const mailStore = useMailStore()
const store = UseContactStore()
const { locale } = useI18n()

// const options = [
//     { label: 'Appel stratégique', value: 'strategique' },
//     { label: 'Appel de découverte (Candidats / Public)', value: 'decouverte' },
// ]

// Zod schema
const MailSchema = z.object({
    firstName: z.string().min(2, { message: "INVALID_NAME" }),
    lastName: z.string().min(2, { message: "INVALID_LAST_NAME" }),
    email: z.string().email({ message: "INVALID_EMAIL" }),
    message: z.string().min(10, { message: "INVALID_MESSAGE" }),
    typeAppel: z.enum(['strategique', 'decouverte'], {
        message: 'INVALID_TYPE',
    }),
})

// formulaire réactif
const form = reactive<MailData & { email: string }>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    typeAppel: null,
})

const errors = ref<string[]>([])

const handleSubmit = async () => {
    errors.value = []

    const result = MailSchema.safeParse(form)

    if (!result.success) {
        errors.value = result.error.issues.map(issue => {
            const match = formErrors.value.find(e => e.key === issue.message)
            return match ? match.text[locale.value] : issue.message
        })
        return
    }

    await mailStore.Save({
        firstName: form.firstName,
        lastName: form.lastName,
        message: form.message,
        typeAppel: form.typeAppel!,
    } as MailData)
}

const title = computed(() => {
    return store.GetContactTitle()
})

const subtitle = computed(() => {
    return store.GetContactSubtitle()
})

const formName = computed(() => {
    return store.GetContactFormName()
})

const formLastName = computed(() => {
    return store.GetContactFormLastName()
})

const formEmail = computed(() => {
    return store.GetContactFormEmail()
})

const formMessage = computed(() => {
    return store.GetContactFormMessage()
})

const sendMessage = computed(() => {
    return store.GetContactSendMessage()
})

const formErrors = computed(() => {
    return store.GetContactFormErros()
})

const options = computed(() => {
    return store.GetContactFormType()
})

</script>
