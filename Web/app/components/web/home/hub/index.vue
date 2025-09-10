<template>
    <section class="py-20">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div>Le Hub</div>
                        <div>Comprendre avant de commander</div>
                    </div>
                </div>
                <div class="py-5 text-xl text-gray-500 font-regular w-full md:w-[700px]">
                    Explorez nos articles, études de cas, guides et démonstrations. Un espace dédié à l’intelligence
                    digitale, sans jargon inutile.
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card" v-for="i in 3">
                    <div class="flex items-center mb-4">
                        <img src="/images/hero/000.jpg" alt="Portrait de Thomas Moreau"
                            class="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <div class="font-semibold">Thomas Moreau</div>
                            <div class="text-sm text-text-secondary">CTO, FinTech Solutions</div>
                        </div>
                    </div>
                    <blockquote class="text-text-secondary italic mb-4">
                        "Application de trading développée en 12 semaines. Performance exceptionnelle, zéro bug critique
                        depuis le lancement."
                    </blockquote>
                </div>
            </div>

            <div class="w-full py-10">
                <WebHomeHubCta />
            </div>
        </div>
    </section>
</template>