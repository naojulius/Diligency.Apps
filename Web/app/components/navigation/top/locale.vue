<template>
    <div class="hidden lg:flex flex-nowrap gap-1 h-full w-38 px-2">
        <ButtonLocale v-for="(locale, index) in localeCodes" :key="index" :text="locale" />
    </div>
</template>
<script lang="ts" setup>
const { localeCodes } = useI18n()
</script>