import { WebApplicationStepsError, WebApplicationStepsGuidance, WebApplicationStepsIntroduction, WebApplicationStepsProject, WebApplicationStepsSuccess, WebApplicationStepsTech } from "#components";

import { useLocalStorage } from "@vueuse/core";

export const UseApplicationStore = defineStore('application-store', () => {
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
    return {
        next,
        prev,
        CleanStep,
        ComposStep,
        hasError
    }
});