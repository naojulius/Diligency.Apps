<template>
    <section class="py-5 md:py-20">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div>
                            Pourquoi une application web ?
                        </div>
                    </div>
                </div>
                <div class="text-xl text-gray-500 font-regular w-full ">
                    Dès qu’un site web doit faire plus que présenter, vous avez besoin d’une application. Une
                    application
                    web intervient là où les sites vitrines atteignent leurs limites : dès qu’il faut gérer des
                    utilisateurs, automatiser des processus, sécuriser des données ou connecter des services. Chez
                    Diligency, nous concevons des plateformes digitales sur-mesure : robustes, évolutives et pensées
                    métier.
                    Marketplace, portail client, système de réservation ou CRM sur navigateur — si votre projet exige
                    plus
                    qu’un simple affichage, nous le structurons et le développons comme une vraie application.
                </div>
            </div>
            <div class="w-full py-2 flex flex-col md:flex-row justify-start gap-5 md:gap-10">
                <WebServiceWebAppWebUsage />
                <WebServiceWebAppWebAdvantage />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>