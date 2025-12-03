<template>
    <div class="w-full h-auto md:w-1/2" v-if="props.data">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            <span v-for="item in title" :key="item">
                {{ item[locale] }}
            </span>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 text-center text-lg/6 text-tertiary/80">

            <component v-for="(item, index) in fields" :key="index" :is="GetComponent(item.type)"
                :placeholder="item.text[locale]" v-model="form[item._key]" :error="errors[item._key]" type="text" />

            <div class="flex items-center justify-end py-2">
                <ButtonCtaLink :data="cta" type="submit" />
            </div>

        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { z } from "zod";

import { FormCheck, FormInput, FormText } from "#components";
import { useApplicationStore } from "~/stores/application/application.store";
import type { Cta } from "~/types/interfaces/common/cta";

const store = useApplicationStore();
const { locale } = useI18n();

// -----------------------------
// CTA BUTTON
// -----------------------------
const cta: Cta = {
    icon: "lucide:arrow-right",
    link: "",
    text: { fr: "Suivant", en: "Next" }
};

// -----------------------------
// PROPS
// -----------------------------
const props = defineProps({
    data: { type: Object, required: true }
});

// -----------------------------
// STATE
// -----------------------------
const title = ref<any[]>([]);
const fields = ref<any[]>([]);

const form = ref<Record<string, any>>({});
const errors = ref<Record<string, string>>({});

let schema: z.ZodObject<any> | null = null;

// -----------------------------
// COMPONENT RESOLVER
// -----------------------------
const GetComponent = (type: string) => {
    switch (type) {
        case "textInput": return FormInput;
        case "textArea": return FormText;
        case "checkbox": return FormCheck;
    }
};

// -----------------------------
// WATCH PROPS AND INIT FIELDS
// -----------------------------
watch(
    () => props.data,
    (data) => {
        if (!data) return;

        title.value = data.applicationIntroduction?.title ?? [];
        fields.value = data.applicationForm?.[store.GetCurrentStep() - 1]?.items ?? [];

        // INIT FORM
        form.value = {};
        fields.value.forEach(item => {
            form.value[item._key] = "";
        });

        // INIT ERRORS
        errors.value = {};
        fields.value.forEach(item => {
            errors.value[item._key] = "";
        });

        // BUILD SCHEMA DYNAMICALLY
        const fieldText = { fr: "Le champ", en: "The field" };
        const emptyText = { fr: "ne peut pas être vide", en: "should not be empty" };
        const minText = { fr: "doit contenir au moins 3 caractères", en: "must contain at least 3 characters" };

        schema = z.object(
            fields.value.reduce((acc: any, item: any) => {
                acc[item._key] = z.string()
                    .nonempty(`${fieldText[locale.value]} ${item.text[locale.value]} ${emptyText[locale.value]}`)
                    .min(3, `${fieldText[locale.value]} ${item.text[locale.value]} ${minText[locale.value]}`);
                return acc;
            }, {})
        );
    },
    { immediate: true }
);

// -----------------------------
// SUBMIT HANDLER
// -----------------------------
const handleSubmit = () => {
    // Reset errors
    Object.keys(errors.value).forEach(k => {
        errors.value[k] = "";
    });

    if (!schema) return;

    const result = schema.safeParse(form.value);

    if (!result.success) {
        result.error.issues.forEach((issue: any) => {
            errors.value[issue.path[0]] = issue.message;
        });

        store.hasError = true;
        return;
    }

    store.hasError = false;
    store.updateData(result.data);
    store.next();
};
</script>
