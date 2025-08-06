<template>
  <div
    class="group lg:hidden flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl p-2 aspect-square"
    @click="toggleMenu"
  >
    <div class="space-y-2" ref="menuIcon">
      <span
        :class="[
          'block h-1 w-10 origin-center rounded-full bg-secondary transition-transform ease-in-out',
          isHumberger ? 'translate-y-1.5 rotate-45' : ''
        ]"
      ></span>
      <span
        :class="[
          'block h-1 w-8 origin-center rounded-full bg-accent-200 transition-all ease-in-out',
          isHumberger ? 'w-10 -translate-y-1.5 -rotate-45' : ''
        ]"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { gsap } from 'gsap'
import { UseMenuStore } from '~/stores/menu.store';

const menuIcon = ref<HTMLDivElement | null>(null)
const menuStore = UseMenuStore()
const isHumberger = computed(() => menuStore.isHumberger)
const toggleMenu = () => {
  let state = !isHumberger.value;
  menuStore.SetHumberger(state)
}

watch(isHumberger, (open) => {
  if (menuIcon.value) {
    gsap.to(menuIcon.value, {
      rotation: open ? 90 : 0,
      duration: 0.3,
      ease: 'power2.inOut',
    })
  }
})
</script>
