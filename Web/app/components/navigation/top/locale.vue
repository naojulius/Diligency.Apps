<template>
    <div class="hidden lg:flex flex-nowrap gap-2  p-1 border-1 rounded-md items-center bg-primary w-32 justify-center">
        <ButtonLocale v-for="(locale, index) in localeCodes" :key="index" :text="locale" />
    </div>
</template>
<script lang="ts" setup>
const { localeCodes } = useI18n()
</script>