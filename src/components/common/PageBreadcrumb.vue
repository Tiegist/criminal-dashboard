<template>
  <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
    <h2 class="app-page-title">
      {{ displayTitle }}
    </h2>
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center gap-1.5">
        <li>
          <router-link
            class="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
            to="/"
          >
            {{ t('common.home') }}
            <svg
              class="stroke-current rtl:rotate-180"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </li>
        <li class="text-sm font-medium text-gray-800 dark:text-white/90">
          {{ displayTitle }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { resolvePageTitle } from '@/i18n'

const props = defineProps<{
  pageTitle?: string
  pageTitleKey?: string
}>()

const route = useRoute()
const { t, te } = useI18n()

const displayTitle = computed(() => {
  if (props.pageTitleKey && te(props.pageTitleKey)) {
    return t(props.pageTitleKey)
  }
  const fromRoute = resolvePageTitle(route.name)
  if (fromRoute) return fromRoute
  return props.pageTitle ?? ''
})
</script>
