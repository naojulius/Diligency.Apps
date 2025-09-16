<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
            <span>{{ $t('home.expertise.title') }}</span>
        </div>
        <div
            class="py-4 text-left relative z-10 text-gray-500 font-regular w-full md:w-[700px] text-xl text-gray-500 font-regular">
            {{ $t('home.expertise.subtitle') }}
        </div>
        <div class="w-full">
            <WebHomeExpertiseList />
        </div>
    </section>
</template>