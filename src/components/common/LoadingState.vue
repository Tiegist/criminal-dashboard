<template>
  <div class="flex flex-col items-center justify-center py-16 px-6">
    <div class="relative w-12 h-12 mb-4">
      <div class="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
      <div class="absolute inset-0 rounded-full border-2 border-brand-500 border-t-transparent animate-spin"></div>
    </div>
    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ message || t('common.loading') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  message?: string
}>()

const { t } = useI18n()
</script>
