import {
    WebApplicationStepsError,
    WebApplicationStepsGuidance,
    WebApplicationStepsIntroduction,
    WebApplicationStepsProject,
    WebApplicationStepsSuccess,
    WebApplicationStepsTech
} from "#components"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"

export const useApplicationStore = defineStore("application-store", () => {

    const saving = ref(false)
    const success = ref(false)
    const error = ref<string | null>(null)
    const submitting = ref(false)
    const data = ref<Record<string, any>>({})
    const mainData = ref(null as any)

    let AS = useLocalStorage("AS", 0)
    let hasError = ref(false)

    let steps = [
        {
            component: WebApplicationStepsIntroduction
        },
        {
            component: WebApplicationStepsProject
        },
        {
            component: WebApplicationStepsTech
        },
        {
            component: WebApplicationStepsGuidance
        },
    ]

    const SetMainData = (maindata: any) => {
        mainData.value = maindata
    }

    const next = () => {
        if (AS.value >= steps.length) { return }
        AS.value += 1
    }

    const prev = () => {
        if (AS.value <= 0) { return }
        AS.value -= 1
    }
    const ComposStep = computed(() => {

        if (AS.value == (steps.length)) {
            return !hasError ? WebApplicationStepsError : WebApplicationStepsSuccess
        }

        return steps[AS.value]?.component ?? WebApplicationStepsIntroduction
    })

    const CleanStep = () => {
        AS.value = 0
    }

    const GetCurrentStep = () => {
        return AS.value
    }

    const updateData = (newdata: any) => {
        console.log("mainData:", mainData.value);
        console.log("newdata:", newdata);

        const form = mainData.value?.applicationForm;
        const mappedData: Record<string, any> = {};
        const dataArray = Object.entries(newdata).map(([key, value]) => ({ key, value }));

        dataArray.forEach(({ key, value }) => {
            form?.forEach((formItem: any) => {
                var items = formItem.items;
                var found = items.find((x: any) => x._key === key);
                if (found) {
                    mappedData[found.id] = value;
                }
            })
        });

        // Merge ONLY the undefined fields
        data.value = { ...data.value, ...mappedData };

        console.log("mapped:", data.value);
    };

    // FINAL SAVE using SANITY_CLIENT like MailData
    const Save = async () => {
        submitting.value = true
        saving.value = true
        success.value = false
        error.value = null
        hasError.value = false

        try {
            // Only include fields that exist in your Sanity schema
            const sanityData = {
                _type: "applicationPage",
                ...data.value,
            }

            await SANITY_CLIENT.create(sanityData)
            success.value = true
            submitting.value = false
            next()
        } catch (err: any) {
            error.value = err.message || "Save failed"
            hasError.value = true
        } finally {
            saving.value = false
        }
    }

    return {
        ComposStep,
        error,
        saving,
        success,
        hasError,
        submitting,
        updateData,
        Save,
        next,
        prev,
        GetCurrentStep,
        CleanStep,
        SetMainData
    }
})
