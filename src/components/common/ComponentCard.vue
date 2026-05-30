<template>
  <div
    :class="[
      'app-card overflow-hidden',
      className,
    ]"
  >
    <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-800">
      <h3 class="text-base font-semibold text-gray-800 dark:text-white/90">
        {{ title }}
      </h3>
      <p v-if="desc" class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ desc }}
      </p>
    </div>

    <div class="p-4 sm:p-6">
      <div class="space-y-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  className?: string
  desc?: string
}>()
</script>
