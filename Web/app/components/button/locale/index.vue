<template>
  <div class="flex flex-col gap-0 size-full p-0">
    <button @click="setlocale"
      :class="['uppercase rounded-sm p-1 transition-all duration-500', getActiveLocaleTextClass]">
      {{ props.text }}
    </button>
  </div>
</template>

<script lang="ts" setup>
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
    ? 'bg-secondary'
    : 'bg-primary'
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