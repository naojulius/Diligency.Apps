<template>
    <ButtonCtaTertiary :data="data" />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()
const router = useRouter();

const ctaKey = "a"
const data = computed(() => {
    return store.GetHeroCta(ctaKey)
})
</script>
