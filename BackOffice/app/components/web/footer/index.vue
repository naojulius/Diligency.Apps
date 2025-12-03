<template>
    <footer
        class="bg-gradient-to-b from-tertiary-600 via-tertiary-400  to-gray-400 text-white py-16 px-4 md:px-10 2xl:px-35 flex flex-col w-full">
        <WebFooterHeader />
        <div class="w-full md:w-2/3 mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between ">
            <WebFooterCompany />
            <WebFooterNavigation />
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseFooterStore } from '~/stores/footer.store';
const store = UseFooterStore()
const { locale } = useI18n()
</script>
