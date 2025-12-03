import { PARAMETER_DATA } from "~/data/parameter.data";
import { BlockSpacing } from "~/types/interfaces/common/section-space";

export const UseParameterStore = defineStore('parameter-store', () => {
    const data = ref()

    const Getdata = () => {
        data.value = PARAMETER_DATA;
    }

    Getdata()

    //#region computed

    const blockSpacingStyle = computed(() => {
        const spacing = data.value?.blockSpacing ?? new BlockSpacing();
        return {
            '--block-spacing-mobile': spacing.mobile,
            '--block-spacing-desktop': spacing.desktop
        }
    })

    const SectionTitleSpacingStyle = computed(() => {
        const spacing = data.value?.SectionTitleSpacing ?? new BlockSpacing();
        return {
            '--section-title-spacing-mobile': spacing.mobile,
            '--section-title-spacing-desktop': spacing.desktop
        }
    })

    //#endregion

    return {
        blockSpacingStyle,
        SectionTitleSpacingStyle
    }
});