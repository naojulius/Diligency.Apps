import type { PropType } from "vue";
import type { AppLocale } from "~/types/interfaces/app-locale";
import type { AppLocaleType } from "../../types/commons/app-locale.type";
import type { CtaType } from "../../types/commons/cta.type";
import type { Layouts } from "../../types/commons/list";

export const BLOCK_PROPS = {
    data: {
        type: Object as PropType<Layouts[]>,
        required: false,
    },

    type: {
        type: String as PropType<string>,
        required: false,
    },

    image: {
        type: String as PropType<string>,
        required: false,
    },

    title: {
        type: Array as PropType<AppLocale[]>,
        required: false,
    },

    subtitle: {
        type: [Array, Object] as PropType<AppLocaleType[] | AppLocaleType>,
        required: false,
    },

    cta: {
        type: Array as PropType<CtaType[]>,
        required: false,
    },

    action: {
        type: Array as PropType<string[]>,
        required: false,
    },
};
