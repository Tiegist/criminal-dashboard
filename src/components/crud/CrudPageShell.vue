<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitleKey="pageTitleKey" :pageTitle="pageTitle" />
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5 xl:col-span-4">
        <slot name="form" />
      </div>
      <div class="lg:col-span-7 xl:col-span-8">
        <slot name="table" />
      </div>
    </div>
    <slot name="modal" />
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'

defineProps<{
  pageTitleKey?: string
  pageTitle?: string
}>()
</script>
