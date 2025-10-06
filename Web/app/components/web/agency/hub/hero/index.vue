<template>
    <PageLayout custom-class="h-auto">
        <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
            <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
                <div
                    class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                        <span>
                            Le Hub Diligency
                        </span>
                    </h1>
                    <h2 class="text-center text-xl text-secondary z-10">
                        Bienvenue dans notre Hub. Ici, on partage nos idées, nos méthodes, nos démonstrations. Le Hub,
                        c’est notre façon d’éduquer, de structurer le flou digital, et de vous donner les clés pour
                        décider intelligemment. C’est aussi une preuve de ce que nous savons faire : transformer du
                        savoir en action concrète, lisible, utile.
                    </h2>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '~/layouts/page-layout.vue';
</script>