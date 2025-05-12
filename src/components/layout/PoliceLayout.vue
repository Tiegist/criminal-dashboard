<template>
    <div class="min-h-screen xl:flex">
      <app-sidebarP />
      <BackdropP />
      <div
        class="flex-1 transition-all duration-300 ease-in-out"
        :class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]']"
      >
        <app-headerP />
        <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import AppSidebarP from './AppSidebarP.vue'
  import AppHeaderP from './AppHeaderP.vue'
  import { useSidebar } from '@/composables/useSidebar'
  import BackdropP from './BackdropP.vue'
  const { isExpanded, isHovered } = useSidebar()
  </script>
  