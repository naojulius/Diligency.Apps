<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Détail de votre projet
        </div>
        <form @submit.prevent="submit" class="flex flex-col gap-4 text-center text-lg/6 text-tertiary/80">

            <FormInput name="projectName" type="text" placeholder="Nom du projet" />

            <FormInput name="projectType" type="text"
                placeholder="Type du projet: Application mobile / Application web / Site vitrine / etc..." />

            <FormInput name="deadline" type="text" placeholder="Délai souhaité: 1 mois / 2 mois / 3 mois" />

            <FormText name="description" placeholder="Description du projet" />
        </form>
        <div class="flex items-center justify-center py-2">
            <ButtonCtaLink :data="cta" @click="submit()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { z } from 'zod';
import { useApplicationStore } from '~/stores/application/application.store';
import type { Cta } from '~/types/interfaces/common/cta';
const store = useApplicationStore()
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: {
        fr: "Suivant",
        en: "Next"
    }
}

// ----------------------------
// ZOD VALIDATION SCHEMA
// ----------------------------
const schema = z.object({
    projectName: z.string().min(2, "Le nom du projet est obligatoire"),
    projectType: z.string().min(3, "Le type du projet est obligatoire"),
    deadline: z.string().min(3, "Le délai est obligatoire"),
    description: z.string().min(10, "La description est obligatoire"),
});

// ----------------------------
// INIT FORM
// ----------------------------
const form = reactive({
    projectName: "",
    projectType: "",
    deadline: "",
    description: "",
});

const errors = reactive<Record<string, string>>({});

// ----------------------------
// SUBMIT FUNCTION
// ----------------------------
const submit = () => {
    // Clear old errors
    Object.keys(errors).forEach(k => errors[k] = "");

    const result = schema.safeParse(form);

    if (!result.success) {
        result.error.issues.forEach(issue => {
            const field = issue.path[0] as string;
            errors[field] = issue.message;
        });
        return; // Stop submit
    }
    console.log("Project Details:", result.data);
    // Valid → Store it
    //store.projectDetails = result.data;

    // Go next
    store.next();
};
</script>