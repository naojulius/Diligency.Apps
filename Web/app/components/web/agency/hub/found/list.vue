<template>
    <div class="mt-10 w-full space-y-8 text-base/7 text-tertiary">
        <div class="relative" v-for="(item, index) in data" :key="index">
            <div class="flex flex-row justify-start items-start  gap-2 text-gray-900">
                <Icon :name="item.icon" class="size-11 text-accent/70 -mt-2" />
                <div class="inter text-md text-tertiary w-full">
                    <div class="text-lg/5 pb-4 font-semibold">
                        {{ item.name[locale] }}
                    </div>
                    <div class="text-sm text-tertiary/80">
                        {{ item.text[locale] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const agencyStore = UseAgencyStore()
const data = ref(agencyStore.GetAgencyHubItems())
const { locale } = useI18n()
</script>