<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10 bg-primary">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
            <span>À qui s'adresse ce service ?</span>
        </div>
        <div class="py-4 text-left relative z-10 text-gray-500 font-regular w-full md:w-[700px] text-lg font-regular">
            Ce service s’adresse aux structures qui souhaitent gagner en efficacité grâce à la technologie, en
            automatisant leurs processus internes, en connectant leurs outils métiers et en tirant parti du potentiel de
            l’intelligence artificielle.
        </div>
        <div class="w-full pt-10">
            <WebServiceItIaForList />
        </div>
    </section>
</template>