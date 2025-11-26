import { WebApplicationStepsError, WebApplicationStepsGuidance, WebApplicationStepsIntroduction, WebApplicationStepsProject, WebApplicationStepsSuccess, WebApplicationStepsTech } from "#components"
import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import type { ProjectAccompagnement, ProjectDetails, ProjectTech } from "~/components/page/types/application"
import { UseLoaderStore } from "../loader.store"

export const useApplicationStore = defineStore("application-store", () => {

    const details = ref<Partial<ProjectDetails>>({})
    const accompagnement = ref<Partial<ProjectAccompagnement>>({})
    const tech = ref<Partial<ProjectTech>>({})

    const saving = ref(false)
    const success = ref(false)
    const error = ref<string | null>(null)
    const submitting = ref(false)

    let AS = useLocalStorage("AS", 0)
    const loader = UseLoaderStore()
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

                projectName: details.value.projectName || "",
                projectType: details.value.projectType || "",
                deadline: details.value.deadline || "",
                description: details.value.description || "",

                analyse: accompagnement.value.analyse ?? false,
                design: accompagnement.value.design ?? false,
                dev: accompagnement.value.developpement ?? false,
                maintenance: accompagnement.value.maintenance ?? false,
                autre: accompagnement.value.autre || "",

                techs: tech.value.technologies || "",
                hasSpecs: tech.value.hasCahier ?? false,
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
        hasError,
        submitting
    }
})
