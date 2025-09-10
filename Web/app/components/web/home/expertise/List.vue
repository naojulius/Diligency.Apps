<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg"
            v-for="(i)  in 4">
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-fast">
                    <Icon name="lucide:mouse-pointer-click" class="h-16 w-16 text-accent-200" />
                </div>
                <h3 class="text-xl font-semibold mb-3">Applications Web</h3>
                <p class="text-text-secondary mb-4">Solutions sur mesure, évolutives et performantes pour digitaliser
                    vos processus métier.</p>
                <div class="opacity-0 group-hover:opacity-100 transition-fast">
                    <div class="text-sm text-accent font-medium">React • Node.js • Cloud</div>
                </div>
            </div>
        </div>
    </div>
</template>