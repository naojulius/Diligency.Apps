import { WebApplicationStepsError, WebApplicationStepsGuidance, WebApplicationStepsIntroduction, WebApplicationStepsProject, WebApplicationStepsSuccess, WebApplicationStepsTech } from "#components"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import type { FinalProjectData, ProjectAccompagnement, ProjectDetails, ProjectTech } from "~/components/page/types/application"

export const useApplicationStore = defineStore("application-store", () => {

    const details = ref<Partial<ProjectDetails>>({})
    const accompagnement = ref<Partial<ProjectAccompagnement>>({})
    const tech = ref<Partial<ProjectTech>>({})

    const saving = ref(false)
    const success = ref(false)
    const error = ref<string | null>(null)

    let AS = useLocalStorage("AS", 0)
    let hasError = ref(false)
    const successComponent = WebApplicationStepsSuccess;
    const errorComponent = WebApplicationStepsError;

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

    // STEP 1
    const updateDetails = (data: Partial<ProjectDetails>) => {
        details.value = { ...details.value, ...data }
    }

    // STEP 2
    const updateAccompagnement = (data: Partial<ProjectAccompagnement>) => {
        accompagnement.value = { ...accompagnement.value, ...data }
    }

    // STEP 3
    const updateTech = (data: Partial<ProjectTech>) => {
        tech.value = { ...tech.value, ...data }
    }

    // FINAL SAVE
    const Save = async () => {
        saving.value = true
        success.value = false
        error.value = null

        try {
            const finalData: FinalProjectData = {
                details: details.value as ProjectDetails,
                accompagnement: accompagnement.value as ProjectAccompagnement,
                tech: tech.value as ProjectTech
            }

            // send to API, sanity, etc.
            await $fetch("/api/project", {
                method: "POST",
                body: finalData
            })

            success.value = true

        } catch (err: any) {
            error.value = err.message || "Save failed"
        } finally {
            saving.value = false
        }
    }

    return {
        details,
        accompagnement,
        tech,
        updateDetails,
        updateAccompagnement,
        updateTech,
        Save,
        saving,
        success,
        error,
        next,
        prev,
        CleanStep,
        ComposStep,
        hasError
    }
})
