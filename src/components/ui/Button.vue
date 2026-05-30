<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium gap-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 active:scale-[0.98]',
      sizeClasses[size],
      variantClasses[variant],
      className,
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    @click="onClick"
    :disabled="disabled"
    :type="type"
  >
    <span v-if="startIcon" class="flex items-center">
      <component :is="startIcon" />
    </span>
    <slot></slot>
    <span v-if="endIcon" class="flex items-center">
      <component :is="endIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'outline' | 'danger' | 'ghost'
  startIcon?: object
  endIcon?: object
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  variant: 'primary',
  className: '',
  disabled: false,
  type: 'button',
})

const sizeClasses = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
}

const variantClasses = {
  primary:
    'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 focus:ring-brand-500/20 disabled:bg-brand-300',
  outline:
    'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
  danger:
    'bg-error-500 text-white shadow-theme-xs hover:bg-error-600 focus:ring-error-500/20 disabled:bg-error-300',
  ghost:
    'text-brand-600 hover:bg-brand-50 focus:ring-brand-500/10 dark:text-brand-400 dark:hover:bg-brand-500/10',
}

const onClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}
</script>
