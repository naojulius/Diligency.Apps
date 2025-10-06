<template>
    <div class="text-xl">
        <div class="py-4 inter font-bold text-left text-tertiary-500">
            Avantage concrets:
        </div>
        <div class="py-1 text-base/5" v-for="(usage, index) in Text.advantage" :key="index">
            <p class="inline-flex gap-2 items-center inter ">
                <Icon :name="usage.icon" size="22" class="text-secondary-700" />
                <span class="text-tertiary-500">{{ $t(usage.name) }}</span>
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import { Text } from '../../Text';

const { locale } = useI18n();
</script>