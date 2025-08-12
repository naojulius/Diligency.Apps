<template>
    <div
        class="hidden lg:flex flex-nowrap gap-2  p-[2px] border-1 rounded-md items-center bg-primary w-28 justify-center">
        <ButtonLocale v-for="(locale, index) in localeCodes" :key="index" :text="locale" />
    </div>
</template>
<script lang="ts" setup>
const { localeCodes } = useI18n()
</script>