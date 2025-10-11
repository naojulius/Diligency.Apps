<script setup lang="ts">

</script>

<template>
    <section class="w-full py-[1rem] mx-auto bg-secondary">
        <div class="w-full h-auto container mx-auto py-[1rem] text-center
                         md:w-4/5 xl:w-3/5  md:text-left md:flex-col  
                                flex flex-col">
            <div class="w-full inter px-4 md:px-0 py-[3rem]">
                <h1 class="text-3xl md:text-4xl text-center md:text-left font-bold text-tertiary-500">
                    Postuler
                </h1>
                <h2 class="text-lg text-center md:text-left pt-4 text-tertiary/80">
                    Tu te reconnais dans notre vision ? Tu veux faire partie d’un cercle exigeant mais humain ? Envoie
                    ton profil (LinkedIn, mini-portfolio ou lien GitHub) à <b
                        class="underline cursor-pointer hover:text-tertiary/50 transition-all duration-500">recrutement@diligency.com</b>
                    Ou réserve un appel rapide pour un premier échange informel.
                </h2>
            </div>
            <div>
                <WebAgencyJobcarrierApplyCta />
            </div>
        </div>
    </section>
</template>