<template>
    <div class="flex items-center justify-center w-full h-screen px-4 mt-16 lg:px-10 2xl:px-35">
        <component :is="store.ComposStep" />
    </div>
</template>

<script lang="ts" setup>

import { UseApplicationStore } from '~/stores/application.store';
const store = UseApplicationStore()

</script>
