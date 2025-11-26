<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Aspects techniques
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 py-4 text-center text-lg/6 text-tertiary/80">
            <FormInput v-model="form.technologies" :error="errors.technologies" type="text"
                placeholder="Technologies préférées: React / Laravel / etc..." />

            <FormCheck v-model="form.hasSpecs" :error="errors.hasSpecs"
                placeholder="Déjà un cahier des charges ou maquettes ?" />

            <div class="flex items-center justify-end py-2">
                <ButtonCtaLink :data="cta" type="submit" />
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { z } from 'zod'
import type { ProjectTech } from '~/components/page/types/application'
import { useApplicationStore } from '~/stores/application/application.store'
import type { Cta } from '~/types/interfaces/common/cta'

const store = useApplicationStore()

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
    technologies: z.string()
        .nonempty("Veuillez indiquer au moins une technologie")
        .min(3, "La technologie doit contenir au moins 3 caractères"),
    hasSpecs: z.boolean()
})

// ----------------------------
// INIT FORM
// ----------------------------
const form = reactive<{
    technologies: string
    hasSpecs: boolean
}>({
    technologies: '',
    hasSpecs: false
})

const errors = reactive<Record<string, string>>({})

// ----------------------------
// COMPUTED
// ----------------------------
const hasErrors = computed(() => Object.values(errors).some(err => err && err.length > 0))

// ----------------------------
// SUBMIT FUNCTION
// ----------------------------
const handleSubmit = () => {
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
    // Cast to Partial<ProjectTech> safely
    store.updateTech(result.data as Partial<ProjectTech>)

    store.next()
}
</script>
