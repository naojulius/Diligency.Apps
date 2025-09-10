<template>
    <section class="py-24 relative">
        <!-- Gradient Background -->
        <div class="absolute h-[36.5rem] w-full top-0 bg-gradient-to-t from-secondary-500 to-tertiary-500 -z-10"></div>

        <div class="px-4 md:px-10 2xl:px-35">
            <!-- Section Header -->
            <div class="mb-12">
                <div class="text-4xl font-semibold flex gap-3 text-secondary">
                    <div class="min-w-[10px] max-w-[10px] bg-secondary-600 rounded-full"></div>
                    <div>
                        <div>Deux formules.</div>
                        <div>Un même engagement de qualité</div>
                    </div>
                </div>
                <p class="text-gray-300 text-2xl leading-7 w-full md:w-[700px] py-10">
                    Choisissez l’accompagnement qui correspond à votre niveau de maturité digitale
                </p>
            </div>

            <!-- Cards -->
            <div class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                <div v-for="(plan, idx) in plans" :key="idx"
                    class="flex flex-col w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300 p-8 xl:p-12">
                    <!-- Header -->
                    <div class="border-b border-gray-200 pb-9 mb-9 text-center">
                        <div class="w-16 h-16 rounded-full bg-secondary-50 mx-auto flex justify-center items-center">
                            <Icon :name="plan.icon" class="w-10 h-10 text-accent" />
                        </div>
                        <h3 class="text-2xl font-bold my-7 text-tertiary-500">{{ plan.title }}</h3>
                    </div>

                    <!-- Features -->
                    <ul class="space-y-6 text-left text-lg text-gray-600">
                        <li v-for="(feature, i) in plan.features" :key="i" class="flex items-center space-x-3.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            <span>{{ feature }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="py-10">
                <WebHomeOfferCta />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const plans = [
    {
        icon: "lucide:heart-plus",
        title: 'Essentiel',
        price: '0',
        features: ['Cadrage', 'Création', 'Consulting final']
    },
    {
        icon: "lucide:crown",
        title: 'Premium',
        price: '29',
        features: [
            'Tout Essentiel inclus',
            '+ 10h incluses',
            'Support 7j/7',
            'Maintenance 2 mois'
        ]
    }
];
</script>
