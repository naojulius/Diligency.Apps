<template>
    <button class="btn text-lg p-2 px-3 flex items-center justify-center gap-1 inter-bold text-secondary 
        hover:text-secondary-600 transition-all diuration-250">
        <span>
            {{ props.data.text }}
        </span>
         <Icon v-if="haschilren" name="lucide-chevron-down" class="size-5" />
    </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    required: true,
    type: Object,
  }
})

const haschilren = computed(()=>{
   return props.data.children?.length  > 0? true : false
})
</script>