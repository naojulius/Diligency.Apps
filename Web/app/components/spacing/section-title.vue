<template>
    <div class="section-title-spacing" :style="parameterStore.SectionTitleSpacingStyle"></div>
</template>

<script lang="ts" setup>
import { UseParameterStore } from '~/stores/parameter.store';
const parameterStore = UseParameterStore()
</script>