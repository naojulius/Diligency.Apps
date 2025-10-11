<template>
    <div class="w-full h-auto  px-4 lg:px-10 2xl:px-35 py-16">
        <div class="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2 z-10 py-10">
            <div class="w-full md:w-1/2 space-y-6">
                <div class="text-5xl font-bold text-tertiary ">Entrons en contact</div>
                <div class="text-xl font-regular text-tertiary/70 w-full md:w-[700px]">
                    Pour toute demande d’information ou de collaboration,
                    notre équipe est disponible et prête à vous répondre rapidement.
                </div>
                <WebContactList />
            </div>
            <div class="p-1 w-full md:w-1/2 h-full  flex items-end justify-end">
                <div class="p-4 w-full md:w-9/12 h-full bg-tertiary rounded-xl ">
                    <div class="text-primary text-5xl">
                        Get in touch
                    </div>
                    <div class="text-tertiary">
                        Vous pouvez nous contacter à tout moment.
                    </div>
                    <form @submit.prevent="handleSubmit" class="space-y-5 pt-4">
                        <div class="flex flex-row gap-4">
                            <input v-model="form.firstName" type="text" placeholder="Nom"
                                class="h-12 w-full bg-primary rounded-lg p-2 active:ring-0" />
                            <input v-model="form.lastName" type="text" placeholder="Prénom"
                                class="h-12 w-full bg-primary rounded-lg p-2" />
                        </div>
                        <input v-model="form.email" type="email" placeholder="E-mail"
                            class="h-12 w-full bg-primary rounded-lg p-2" />
                        <textarea v-model="form.message" placeholder="Votre Message"
                            class="min-h-42 w-full bg-primary rounded-lg p-2"></textarea>

                        <WebContactType v-model="form.typeAppel" :options="options" />
                        <hr class="text-primary">
                        <ul v-if="errors.length" class="text-primary text-sm list-disc pl-4">
                            <li v-for="err in errors" :key="err">{{ err }}</li>
                        </ul>

                        <button type="submit"
                            class="transition-all duration-300 h-14 bg-tertiary text-secondary w-full rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
                            <span class="font-semibold">
                                <span v-if="!mailStore.sending">Envoyer le message</span>
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
import { useMailStore } from '~/stores/mail.store'

import type { MailData } from '~/types/interfaces/mail-data'

const mailStore = useMailStore()

const options = [
    { label: 'Appel stratégique', value: 'strategique' },
    { label: 'Appel de découverte (Candidats / Public)', value: 'decouverte' },
]

// Zod schema
const MailSchema = z.object({
    firstName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    email: z.email("Adresse email invalide"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
    typeAppel: z.enum(['strategique', 'decouverte'], {
        message: 'Veuillez sélectionner un type d’appel',
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
        errors.value = result.error.issues.map(issue => issue.message)
        return
    }

    await mailStore.Save({
        firstName: form.firstName,
        lastName: form.lastName,
        message: form.message,
        typeAppel: form.typeAppel!,
    } as MailData)
}

</script>
