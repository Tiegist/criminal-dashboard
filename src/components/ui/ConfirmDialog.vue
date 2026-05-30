<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-99999 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" @click="$emit('update:modelValue', false)" />
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          appear
        >
          <div
            v-if="modelValue"
            class="relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xl dark:border-gray-700 dark:bg-gray-900"
          >
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white/90">{{ title || t('common.confirm') }}</h2>
            <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {{ message || t('common.confirmDelete') }}
              <span v-if="itemName" class="font-medium text-brand-600 dark:text-brand-400">{{ itemName }}</span>
            </p>
            <div class="flex justify-end gap-3 mt-6">
              <button type="button" class="app-btn app-btn-secondary" @click="$emit('update:modelValue', false)">
                {{ t('common.no') }}
              </button>
              <button type="button" class="app-btn app-btn-danger" @click="$emit('confirm')">
                {{ t('common.yes') }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  modelValue: boolean
  title?: string
  message?: string
  itemName?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
}>()

const { t } = useI18n()
</script>
