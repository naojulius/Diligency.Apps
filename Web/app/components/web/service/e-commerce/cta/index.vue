<template>
    <div class="h-92">
        <div :class="['size-full relative', 'bg-[url(/images/hero/pme.jpg)] bg-cover bg-no-repeat']">
            <div class="absolute top-0 right-0 size-full bg-black/30 z-0"></div>
            <div class="size-full flex flex-col md:flex-row items-center justify-center gap-2 px-10">
                <WebServiceECommerceCtaCreateWebShow />
                <WebServiceECommerceCtaReserveCall />
            </div>
        </div>
    </div>
</template>