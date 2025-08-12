<template>
    <HeroLayout>
        <div class="text-secondary px-4 lg:px-0">
            <div class="text-5xl xl:text-5xl 2xl:text-8xl font-bold">Offrez-vous</div>
            <div class="text-5xl xl:text-5xl 2xl:text-8xl font-bold">la diligence digitale</div>
            <div class="py-4 text-xl">Sites web & applications sur-mesure, pensés pour la performance,
                la clarté et
                la conversion.</div>
            <div
                class="py-2 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2  w-full">
                <ButtonCtaReserveStrategyCall />
                <ButtonCtaApplyProject />
            </div>
        </div>
    </HeroLayout>
</template>
<script lang="ts" setup>
import HeroLayout from '~/layouts/hero-layout.vue';
</script>