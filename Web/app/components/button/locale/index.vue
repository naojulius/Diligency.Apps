<template>
  <div class="flex flex-col gap-0 size-full p-0">
    <button @click="setlocale" :class="['h-full w-full cursor-pointer p-1 uppercase inter transition-all duration-100', getActiveLocaleTextClass]">
      {{ props.text }}
    </button>
    <div :class="['h-0.5 -mt-1.5 overflow-hidden']">
      <div :class="['h-full transition-all origin-center', getActiveLocaleClass]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { setLocale, locale } = useI18n()

const props = defineProps({
  text: {
    required: true,
    type: String,
  },
})

const getActiveLocaleTextClass = computed(() => {
  return locale.value === props.text
    ? 'text-secondary text-xl'
    : 'text-secondary-600 text-sm'
})

const getActiveLocaleClass = computed(() => {
  return locale.value === props.text
    ? 'bg-secondary rounded animate-line-expand w-full'
    : 'w-0'
})

const setlocale = () => {
  setLocale(props.text as any)
}
</script>

<style scoped>
@keyframes line-expand {
  0% {
    width: 0;
    transform: translateX(50%);
  }

  100% {
    width: 100%;
    transform: translateX(0);
  }
}

.animate-line-expand {
  animation: line-expand 0.3s ease-out forwards;
}
</style>