<template>
    <section class="w-full bg-primary py-[0rem] mx-auto">
        <div class="w-full h-auto container mx-auto py-[1rem] text-center
                         md:w-4/5 xl:w-3/5  md:text-left md:flex-row  
                                flex flex-col">
            <div class="w-full inter px-4 py-[1rem]">
                <h1 class="text-3xl md:text-4xl text-center md:text-left font-bold text-tertiary-500">
                    Profils recherchés
                </h1>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col "
                        v-for="(profile, index) in Text.profile" :key="index">
                        <div
                            class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-secondary-400 text-accent-500 flex-shrink-0">
                            <Icon :name="profile.icon" size="42" />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-tertiary text-2xl inter font-bold mb-2">{{ profile.name }}</h2>
                            <p class="leading-relaxed text-tertiary/80 text-base inter">{{ profile.description }}</p>
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