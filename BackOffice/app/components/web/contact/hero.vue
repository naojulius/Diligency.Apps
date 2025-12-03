<template>
    <div class="w-full h-auto  px-0 lg:px-10 2xl:px-35 py-16">
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
                            <FormInput v-model="form.firstName" :placeholder="String(formName[locale])" type="text" />
                            <FormInput v-model="form.lastName" :placeholder="String(formLastName[locale])"
                                type="text" />
                        </div>
                        <FormInput v-model="form.email" :placeholder="String(formEmail[locale])" type="text" />
                        <FormText v-model="form.message" :placeholder="String(formMessage[locale])" type="text" />

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

                        <p v-if="mailStore.success" class="text-green-500">Message envoyé !</p>
                        <p v-if="mailStore.error" class="text-red-500">{{ mailStore.error }}</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { z } from "zod"
import { useContactStore } from '~/stores/contact/contact.store'
import { UseLoaderStore } from '~/stores/loader.store'
import { useMailStore } from '~/stores/mail.store'
import type { MailData } from '~/types/interfaces/mail-data'
import { GET_CONTACT_GROQ } from '~/utils/groq/contact.groq'

const mailStore = useMailStore()
const store = useContactStore()
const { locale } = useI18n()
const data = ref()
const loader = UseLoaderStore()
const fetchData = async () => {
    loader.ShowLoader()
    try {
        let query = await SANITY_CLIENT.fetch(GET_CONTACT_GROQ)
        data.value = query[0]["contact-data"]
        loader.HideLoader()
    } catch (err) {
        loader.HideLoader()
        console.error("Error fetching contact data:", err)
    }
}

onMounted(() => {
    fetchData()
})

const MailSchema = z.object({
    firstName: z.string().min(2, { message: "INVALID_NAME" }),
    lastName: z.string().min(2, { message: "INVALID_LAST_NAME" }),
    email: z.email({ message: "INVALID_EMAIL" }),
    message: z.string().min(10, { message: "INVALID_MESSAGE" }),
    typeAppel: z.enum(['strategique', 'decouverte'], {
        message: 'INVALID_TYPE',
    }),
})

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
            const match = formErrors.value.find((e: { key: string }) => e.key === issue.message)
            return match ? match.text[locale.value] : issue.message
        })
        return
    }

    await mailStore.Save({
        firstName: form?.firstName,
        lastName: form?.lastName,
        message: form?.message,
        typeAppel: form?.typeAppel!,
    } as MailData)
}

const title = computed(() => {
    return data.value?.title ?? ""
})

const subtitle = computed(() => {
    return data.value?.subtitle ?? ""
})

const formName = computed(() => {
    return data.value?.form?.name ?? ""
})

const formLastName = computed(() => {
    return data.value?.form?.lastname ?? ""
})

const formEmail = computed(() => {
    return data.value?.form?.email ?? ""
})

const formMessage = computed(() => {
    return data.value?.form?.message ?? ""
})

const sendMessage = computed(() => {
    return data.value?.form?.sendMessage ?? ""
})

const formErrors = computed(() => {
    return data.value?.form?.errors ?? []
})

const options = computed(() => {
    return data.value?.form?.type ?? []
})

</script>
