<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10 md:py-20 relative w-full h-auto">
        <img src="/images/calendar/calendar.jpg" class="absolute top-0 left-0 size-full opacity-60">
        <div class="w-full flex flex-col md:flex-row">
            <div>
                <p class="text-4xl font-bold  text-tertiary opacity-90 text-center md:text-left">
                    <span class="bg-secondary border-1 border-tertiary">
                        Gagnez du temps.
                    </span>
                    <br />
                    <span class="bg-secondary border-1 border-tertiary px-1 -ml-2">
                        Et des clients.
                    </span>
                </p>
                <p class="text-xl mb-8 opacity-90 text-tertiary text-center md:text-left py-5  w-full md:w-[700px]">
                    Votre équipe est déjà débordée ? On vous fait gagner 10h/semaine avec une solution conçue pour
                    durer. Lancez votre projet avec un appel stratégique gratuit.
                </p>
            </div>
            <div class="w-full py-5 flex flex-col gap-2 items-center justify-center px-4 opacity-90 ">
                <WebHomeConversionReserveCall />
                <WebHomeConversionApplyProject />
            </div>
        </div>
    </section>
</template>