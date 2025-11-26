<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            Détail de votre projet
        </div>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 text-center text-lg/6 text-tertiary/80">
            <FormInput v-model="form.projectName" :error="errors.projectName" type="text" placeholder="Nom du projet" />
            <FormInput v-model="form.projectType" :error="errors.projectType" type="text"
                placeholder="Type du projet: Application mobile / Application web / Site vitrine / etc..." />
            <FormInput v-model="form.deadline" :error="errors.deadline" type="text"
                placeholder="Délai souhaité: 1 mois / 2 mois / 3 mois" />
            <FormText v-model="form.description" :error="errors.description" placeholder="Description du projet" />
            <div class="flex items-center justify-end py-2">
                <ButtonCtaLink :data="cta" type="submit" />
            </div>
        </form>
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
    projectName: z.string()
        .nonempty("Le nom du projet ne peut pas être vide")
        .min(3, "Le nom du projet doit contenir au moins 3 caractères"),

    projectType: z.string()
        .nonempty("Le type du projet ne peut pas être vide")
        .min(3, "Le type du projet doit contenir au moins 3 caractères"),

    deadline: z.string()
        .nonempty("Le délai ne peut pas être vide")
        .min(3, "Le délai doit contenir au moins 3 caractères"),

    description: z.string()
        .nonempty("La description ne peut pas être vide")
        .min(10, "La description doit contenir au moins 10 caractères"),
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
const hasErrors = computed(() => {
    return Object.values(errors).some(error => error && error.length > 0)
})

const handleSubmit = () => {
    Object.keys(errors).forEach(k => errors[k] = "");

    const result = schema.safeParse(form);

    if (!result.success) {
        result.error.issues.forEach(issue => {
            const field = issue.path[0] as string;
            errors[field] = issue.message;
        });

        store.hasError = true;
        return;
    }

    store.hasError = false;
    store.updateDetails(result.data);
    store.next();
};

</script>