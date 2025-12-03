import type { Layouts } from "../../types/commons/list";

export const OFFER_PROPS = {
    data: {
        type: Object as PropType<Layouts[] | Layouts>,
        required: false,
    },
}