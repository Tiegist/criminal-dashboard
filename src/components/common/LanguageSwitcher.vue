<template>
  <div class="relative" ref="dropdownRef">
    <button
      type="button"
      :aria-label="t('language.label')"
      class="flex items-center gap-2 h-10 px-3 text-sm font-medium text-gray-700 transition-colors duration-200 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:border-gray-600"
      @click="toggleDropdown"
    >
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span class="hidden sm:inline">{{ currentLabel }}</span>
      <ChevronDownIcon :class="['w-4 h-4 transition-transform duration-200', { 'rotate-180': isOpen }]" />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-theme-lg dark:border-gray-700 dark:bg-gray-900"
      >
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          class="flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150"
          :class="locale === option.value
            ? 'bg-brand-50 text-brand-600 font-medium dark:bg-brand-500/10 dark:text-brand-400'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'"
          @click="selectLocale(option.value)"
        >
          {{ option.label }}
          <svg v-if="locale === option.value" class="w-4 h-4 text-brand-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDownIcon } from '@/icons'
import { setStoredLocale, type SupportedLocale } from '@/i18n'

const { locale, t } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const options = computed(() => [
  { value: 'am' as SupportedLocale, label: t('language.amharic') },
  { value: 'en' as SupportedLocale, label: t('language.english') },
])

const currentLabel = computed(() =>
  locale.value === 'am' ? t('language.amharic') : t('language.english')
)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectLocale(value: SupportedLocale) {
  locale.value = value
  setStoredLocale(value)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
