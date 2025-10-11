<template>
    <button @click="navigate"
        class="px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
        <Icon :name="data.icon" class="size-7 fill-accent" />
        <span class="font-semibold">
            {{ data.text[locale] }}
        </span>
    </button>
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

const navigate = () => {
    const link = data.value.link
    if (link) {
        router.push(link);
    }
}

</script>
