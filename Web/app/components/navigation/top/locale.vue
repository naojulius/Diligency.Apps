<template>
    <div ref="dropdownRef" class="dropdown relative  hidden md:inline-flex">
        <button @click="show = !show"
            class="w-40 inline-flex justify-center items-center gap-2 py-3 px-6 text-md text-secondary rounded-lg  cursor-pointer font-semibold text-center transition-all duration-500 hover:text-secondary-700 ">
            <Icon name="lucide:languages" class="size-6 fill-accent" />
            {{ locales.find(x => x.code == locale).name }}
            <svg class="dropdown-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
        </button>
        <div id="dropdown-default" v-if="show"
            class="dropdown-menu rounded-lg shadow-lg bg-white absolute top-full w-full mt-0 open transition-all duration-300"
            aria-labelledby="dropdown-default">
            <ul class="">
                <li v-for="(locale, index) in locales" class="p-1">
                    <button @click="setCurrentLocale(locale.code)"
                        class="hover:bg-secondary text-tertiary font-semibold h-10 w-full rounded-lg">
                        {{ locale.name }} </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n()
const show = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const setCurrentLocale = (_locale: "fr" | "en") => {
    show.value = false
    setLocale(_locale)
}

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        show.value = false
    }
}
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>