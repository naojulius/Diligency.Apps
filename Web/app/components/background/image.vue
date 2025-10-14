<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <img :src="props.image" class="size-full object-cover" />
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    image: {
        required: true,
        type: String,
    },
})

</script>
