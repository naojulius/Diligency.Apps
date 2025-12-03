<template>
    <component :is="getComponent()" :data="data" />
</template>

<script lang="ts" setup>
import { GetFooterComponent } from '../../helpers/component.helper';
import { FooterType } from '../../types/commons/footer.type';

const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<FooterType>,
        default: () => new FooterType()
    }
})

const data = computed(() => (props.data as any));

const getComponent = () => {
    let footer = props.data.type ?? ""
    return GetFooterComponent(footer)
}
</script>