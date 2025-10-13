<template>
    <div class="block-spacing" :style="parameterStore.blockSpacingStyle"></div>
</template>

<script lang="ts" setup>
import { UseParameterStore } from '~/stores/parameter.store';
const parameterStore = UseParameterStore()
</script>