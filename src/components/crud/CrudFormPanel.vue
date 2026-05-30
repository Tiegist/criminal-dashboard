<template>
  <ComponentCard :title="title">
    <div class="space-y-5">
      <div>
        <label class="app-label">{{ label }}</label>
        <input
          type="text"
          :value="modelValue"
          :placeholder="placeholder"
          class="app-input"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
      </div>
      <div class="flex flex-wrap items-center gap-3 pt-1">
        <Button size="sm" variant="primary" @click="$emit('submit')">
          <span v-if="!isEditing">
            {{ isSubmitting ? $t('common.submitting') : $t('common.submit') }}
          </span>
          <span v-else>
            {{ isUpdating ? $t('common.updating') : $t('common.update') }}
          </span>
        </Button>
        <Button
          v-if="isEditing"
          size="sm"
          variant="outline"
          @click="$emit('cancel')"
        >
          {{ $t('common.cancel') }}
        </Button>
      </div>
      <Alert v-if="successMessage" variant="success" :message="successMessage" :showLink="false" />
      <Alert v-if="errorMessage" variant="warning" :message="errorMessage" :showLink="false" />
    </div>
  </ComponentCard>
</template>

<script setup lang="ts">
import ComponentCard from '@/components/common/ComponentCard.vue'
import Button from '@/components/ui/Button.vue'
import Alert from '@/components/ui/Alert.vue'

defineProps<{
  title: string
  label: string
  placeholder?: string
  modelValue: string
  isEditing?: boolean
  isSubmitting?: boolean
  isUpdating?: boolean
  successMessage?: string
  errorMessage?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
  submit: []
  cancel: []
}>()
</script>
