<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary pb-3">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div>
                            Notre méthode
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto" v-for="(item, index) in Text.webShow.method" :key="index">
                <div class="w-full text-left flex flex-row gap-5 py-1">
                    <Icon :name="item.icon" class="size-7 text-accent-200" />
                    <span class="text-lg text-tertiary">
                        {{ item.description }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import { Text } from '../../Text';

const { locale } = useI18n();

</script>