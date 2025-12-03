<template>
    <div class="w-full">
        <div class="flex justify-between gap-4 text-xl text-center md:text-left">
            <!-- Left column -->
            <ul class="flex-1 space-y-2">
                <li v-for="(item, index) in leftColumn" :key="index">
                    <a :href="item.link" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text[locale] }}
                    </a>
                </li>
            </ul>

            <!-- Right column -->
            <ul class="flex-1 space-y-2">
                <li v-for="(item, index) in rightColumn" :key="index">
                    <a :href="item.link" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text[locale] }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UseFooterStore } from '~/stores/footer.store'
import { useMenuStore } from '~/stores/menu/menu.store'
import type { AppLocale } from '~/types/interfaces/app-locale'
import type { MenuLink } from '~/types/interfaces/common/menu-link'
import type { Menu } from '~/types/interfaces/menu'

const store = UseFooterStore()
const menuStore = useMenuStore()
const { locale } = useI18n()

/**
 * Recursively extract all visible menu links
 */
function extractLinks(menus: Menu[]): MenuLink[] {
    const links: MenuLink[] = []

    menus.forEach((menu) => {
        if (menu.visible) {
            links.push({
                text: menu.name as AppLocale,
                link: menu.link ?? '#',
            })

            if (menu.children?.length) {
                links.push(...extractLinks(menu.children))
            }
        }
    })

    return links
}

/**
 * Compute the two columns dynamically
 */
const leftColumn = computed(() => {
    const links = extractLinks(menuStore.menusList || [])
    const half = Math.ceil(links.length / 2)
    return links.slice(0, half)
})

const rightColumn = computed(() => {
    const links = extractLinks(menuStore.menusList || [])
    const half = Math.ceil(links.length / 2)
    return links.slice(half)
})
</script>
