<template>
    <div class="w-full md:w-1/2">
        <div class="py-4 text-5xl text-center text-tertiary text-semibold">
            <span v-for="item in title" :key="item">
                {{ item[locale] }}
            </span>
        </div>


        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 text-center text-lg/6 text-tertiary/80">
            <component v-for="(item, index) in fields" :key="index" :is="GetComponent(item.type)"
                :placeholder="item.text[locale]" v-model="form[item._key]" :error="errors[item._key]" type="text" />

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
import { FormCheck, FormInput, FormText } from '#components'
import { computed } from 'vue'
import { z } from 'zod'
import { useApplicationStore } from '~/stores/application/application.store'
import type { Cta } from '~/types/interfaces/common/cta'

const store = useApplicationStore()
const submitting = computed(() => store.submitting)
const { locale } = useI18n();
const cta: Cta = {
    icon: 'lucide:arrow-right',
    link: '',
    text: {
        fr: 'Suivant',
        en: 'Next'
    }
}

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

// -------------------
// PROPS
// -------------------
const props = defineProps({
    data: { type: Object, required: true }
});

watch(
    () => props.data,
    (data) => {
        if (!data) return;

        title.value = data.applicationForm?.[store.GetCurrentStep() - 1].title ?? [];
        fields.value = data.applicationForm?.[store.GetCurrentStep() - 1]?.items ?? [];

        // INIT FORM
        form.value = {};
        fields.value.forEach(item => {
            form.value[item._key] = "";
        });

        // INIT ERRORS
        errors.value = {};

        fields.value.forEach((item: any) => {
            form.value[item._key] =
                item.type === "checkbox" ? false : "";
            errors.value[item._key] = "";
        });

        // BUILD SCHEMA DYNAMICALLY
        schema = z.object(
            fields.value.reduce((acc: any, item: any) => {
                if (item.type === "checkbox") {
                    acc[item._key] = z.boolean();
                }
                return acc;
            }, {})
        );
    },
    { immediate: true }
);

// -------------------
// SUBMIT HANDLER
// -------------------
const handleSubmit = async () => {
    if (!schema) return;

    Object.keys(errors.value).forEach((k) => (errors.value[k] = ""));

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
    await store.Save();
};
</script>
