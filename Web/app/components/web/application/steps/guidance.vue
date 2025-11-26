<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Accompagnement
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 text-center text-lg/6 text-tertiary/80">
            <FormCheck v-model="form.analyse" :error="errors.analyse" placeholder="Analyse et conseil stratégique" />
            <FormCheck v-model="form.design" :error="errors.design" placeholder="Design / UX" />
            <FormCheck v-model="form.dev" :error="errors.dev" placeholder="Développement" />
            <FormCheck v-model="form.maintenance" :error="errors.maintenance" placeholder="Maintenance & hébergement" />
            <FormInput v-model="form.autre" :error="errors.autre" type="text" placeholder="Autre" />

            <div class="flex items-center justify-end py-2">
                <ButtonCtaLink type="submit" :data="cta" v-if="!submitting" />
                <div class="flex flex-row gap-4 items-center" v-if="submitting">
                    <Icon name="lucide:loader" class="size-8 fill-accent animate animate-spin" />
                    <span>
                        Submission en cours...
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { z } from 'zod'
import type { ProjectAccompagnement } from '~/components/page/types/application'
import { useApplicationStore } from '~/stores/application/application.store'
import type { Cta } from '~/types/interfaces/common/cta'

const store = useApplicationStore()
const submitting = computed(() => store.submitting)
const cta: Cta = {
    icon: 'lucide:arrow-right',
    link: '',
    text: {
        fr: 'Suivant',
        en: 'Next'
    }
}

// ----------------------------
// ZOD VALIDATION SCHEMA
// ----------------------------
const schema = z.object({
    analyse: z.boolean(),
    design: z.boolean(),
    dev: z.boolean(),
    maintenance: z.boolean(),
    autre: z.string().optional()
})

// ----------------------------
// INIT FORM
// ----------------------------
const form = reactive<{
    analyse: boolean
    design: boolean
    dev: boolean
    maintenance: boolean
    autre: string
}>({
    analyse: false,
    design: false,
    dev: false,
    maintenance: false,
    autre: ''
})

const errors = reactive<Record<string, string>>({})

// ----------------------------
// COMPUTED
// ----------------------------
const hasErrors = computed(() => Object.values(errors).some(err => err && err.length > 0))

// ----------------------------
// SUBMIT FUNCTION
// ----------------------------
const handleSubmit = async () => {
    // Clear old errors
    Object.keys(errors).forEach(k => errors[k] = '')

    const result = schema.safeParse(form)

    if (!result.success) {
        result.error.issues.forEach(issue => {
            const field = issue.path[0] as string
            errors[field] = issue.message
        })

        store.hasError = true
        return
    }

    store.hasError = false
    // Cast to Partial<ProjectAccompagnement> safely
    store.updateAccompagnement(result.data as Partial<ProjectAccompagnement>)

    await store.Save()
}
</script>
