<template>
    <div class="w-full">
        <h3 class="text-lg font-semibold mb-4">Navigation</h3>
        <div class="flex gap-4">
            <ul class="flex-1 space-y-2">
                <li v-for="(item, index) in leftColumn" :key="index">
                    <a :href="item.link as string" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
            <ul class="flex-1 space-y-2">
                <li v-for="(item, index) in rightColumn" :key="index">
                    <a :href="item.link as string" class="text-gray-300 hover:text-white transition-fast">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface MenuLink {
    text: String;
    link: String;
}

import { MenusList } from '~/config/local-api/menus-list';
const extractLinks = (menus: typeof MenusList): MenuLink[] => {
    let links: MenuLink[] = [];

    menus.forEach(menu => {
        links.push({ text: menu.text, link: menu.link });

        if (menu.children && menu.children.length) {
            links = links.concat(extractLinks(menu.children));
        }
    });
    links.sort((a, b) => a.text.localeCompare(b.text as any));
    return links;
}
const linkList: MenuLink[] = extractLinks(MenusList)
const half = Math.ceil(linkList.length / 2);
const leftColumn = linkList.slice(0, half);
const rightColumn = linkList.slice(half);

</script>