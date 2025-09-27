<template>
    <PageLayout custom-class="h-auto">
        <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
            <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
                <div
                    class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                        <span>
                            À propos de Diligency
                        </span>
                    </h1>
                    <h2 class="text-center text-xl text-secondary z-10">
                        Diligency est une agence digitale indépendante fondée sur une conviction forte : l’efficacité
                        digitale naît d’un équilibre entre rigueur, modernité et compréhension métier. Nous accompagnons
                        les
                        PME, cabinets, structures ambitieuses et entrepreneurs exigeants dans la création de plateformes
                        web, d’applications sur mesure et de systèmes digitaux fiables. Notre nom est notre promesse :
                        livrer avec diligence, précision et intégrité.
                    </h2>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '~/layouts/page-layout.vue';
</script>