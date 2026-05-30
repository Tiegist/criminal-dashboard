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
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center overflow-y-auto z-99999 p-4"
        role="dialog"
        aria-modal="true"
      >
        <div
          v-if="fullScreenBackdrop"
          class="fixed inset-0 h-full w-full bg-gray-900/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
          @click="$emit('close')"
        />
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          appear
        >
          <div v-if="isOpen" class="relative z-10 w-full max-w-lg">
            <slot name="body"></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ModalProps {
  fullScreenBackdrop?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  fullScreenBackdrop: true,
  open: true,
})

defineEmits(['close'])

const isOpen = computed(() => props.open !== false)
</script>
