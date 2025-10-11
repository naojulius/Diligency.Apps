<template>
    <button @click="navigate"
        class="px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
        <Icon name="lucide:mail" class="size-7 fill-accent" />
        <span class="font-semibold">
            Contactez nous
        </span>
    </button>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const router = useRouter();
const navigate = () => {
    router.push("/contact")
}
</script>