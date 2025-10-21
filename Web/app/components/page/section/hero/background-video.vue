<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <video class="size-full object-cover" autoplay muted loop playsinline>
            <source :src="props.video" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    video: {
        required: true,
        type: String,
    },
})

</script>