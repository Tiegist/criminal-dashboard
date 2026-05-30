<template>
  <div class="app-table-wrap">
    <div
      v-if="title || showCount"
      class="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800"
    >
      <div>
        <h3 v-if="title" class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ title }}</h3>
        <p v-if="showCount" class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {{ count }} {{ $t('common.items') }}
        </p>
      </div>
      <slot name="toolbar" />
    </div>
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="app-table">
        <thead class="app-table-head">
          <tr>
            <th scope="col" class="px-6 py-3.5">{{ $t('common.name') }}</th>
            <th scope="col" class="px-6 py-3.5 text-right">{{ $t('common.action') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="empty">
            <td colspan="2" class="px-6 py-10">
              <EmptyState :title="$t('common.noData')" />
            </td>
          </tr>
          <slot v-else />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmptyState from '@/components/common/EmptyState.vue'

defineProps<{
  title?: string
  count?: number
  empty?: boolean
  showCount?: boolean
}>()
</script>
