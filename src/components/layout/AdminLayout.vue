<template>
  <div class="min-h-screen xl:flex bg-gray-50/80 dark:bg-gray-950">
    <app-sidebar />
    <Backdrop />
    <div
      class="flex-1 transition-all duration-300 ease-in-out min-w-0"
      :class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]']"
    >
      <app-header />
      <main class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 lg:p-8">
        <div class="slide-up-enter-active animate-[slideUp_0.35s_ease-out]">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
import { useSidebar } from '@/composables/useSidebar'
import Backdrop from './Backdrop.vue'
const { isExpanded, isHovered } = useSidebar()
</script>
