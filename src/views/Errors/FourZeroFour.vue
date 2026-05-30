<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-gray-50 dark:bg-gray-900"
  >
    <common-grid-shape />
    <div class="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
      <h1 class="mb-4 text-6xl font-bold text-brand-600 dark:text-brand-400">
        404
      </h1>

      <img src="/images/error/404.svg" alt="404" class="mx-auto dark:hidden" />
      <img src="/images/error/404-dark.svg" alt="404" class="hidden mx-auto dark:block" />

      <p class="mt-8 mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
        {{ t('errors.notFoundMessage') }}
      </p>

      <router-link to="/" class="app-btn-secondary inline-flex">
        {{ t('errors.goHome') }}
      </router-link>
    </div>
    <p class="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
      &copy; {{ currentYear }} {{ t('app.name') }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CommonGridShape from '../../components/common/CommonGridShape.vue'

const { t } = useI18n()
const currentYear = ref(new Date().getFullYear())
</script>
