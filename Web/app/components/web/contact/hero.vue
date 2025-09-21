<template>
    <div class="relative w-full h-screen bg-primary px-4 lg:px-10 2xl:px-35">
        <WebContactBackground />
        <div class="h-full w-full flex flex-col items-center justify-center gap-2 mt-20 bg-secondary z-10">
            <div class="text-5xl font-bold text-secondary z-10">Contactez-nous!</div>
            <div class="text-xl font-regular text-tertiary/50">Gardons contact pour plus d'information!</div>
            <div class="space-y-5">
                <div class="flex flex-row gap-4">
                    <input type="text" placeholder="Nom"
                        class="h-12 w-full border-2 border-tertiary rounded bg-secondary/10 p-2">
                    <input type="text" placeholder="Prénom"
                        class="h-12 w-full border-2 border-tertiary rounded bg-secondary/10 p-2">
                </div>
                <input type="email" placeholder="Votre adresse email"
                    class="h-12 w-full border-2 border-tertiary rounded bg-secondary/10 p-2">
                <textarea type="email" placeholder="Message"
                    class="min-h-52 w-full border-2 border-tertiary rounded bg-secondary/10 p-2"></textarea>
                <button
                    class="transition-all duration-300 h-14 bg-tertiary text-secondary w-full rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
                    <span class="font-semibold">Envoyer le message</span>
                    <Icon name="lucide:send" class="size-7 fill-accent" />
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>