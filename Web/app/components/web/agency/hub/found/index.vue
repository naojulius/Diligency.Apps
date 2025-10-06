<template>
    <section class="w-full bg-primary py-[0rem] mx-auto">
        <div class="w-full h-auto container mx-auto py-[0rem]
                         text-left md:flex-row  
                                flex flex-col">
            <div class="w-full inter px-4 py-[2rem]">
                <div class="overflow-hidden bg-primary ">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div class="lg:pt-4">
                                <div class="lg:max-w-lg">
                                    <p
                                        class="mt-2 pb-2 text-3xl font-semibold tracking-tight text-pretty text-tertiary sm:text-5xl inter text-center md:text-left">
                                        Ce que vous y trouverez
                                    </p>
                                    <p class="text-lg text-tertiary/90 inter font-thin text-center md:text-left">
                                        Nous diffusons des contenus utiles : analyses sur la création digitale, cas
                                        concrets de projets, guides téléchargeables et démonstrations ciblées. Une
                                        manière claire et accessible de valoriser notre approche en IA, UX/UI et
                                        performance.
                                    </p>
                                    <div class="mt-10 w-full space-y-8 text-base/7 text-tertiary">
                                        <div class="relative" v-for="(hub, index) in Text.hubdata" :key="index">
                                            <div class="inline-flex  gap-2 text-gray-900">
                                                <Icon :name="hub.icon" class="size-11 text-accent/70" />
                                                <div class="inter text-md text-tertiary w-2/3">
                                                    {{ hub.text }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                                alt="Product screenshot"
                                class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 cursor-pointer hover:opacity-90"
                                width="2432" height="1442" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Text } from '../../Text';
</script>