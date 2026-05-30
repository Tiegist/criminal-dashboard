<template>
  <admin-layout>
    <PageBreadcrumb pageTitleKey="pages.Profile" />
    <personal-info-card />
  </admin-layout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import PersonalInfoCard from '../../components/profile/PersonalInfoCard.vue'
</script>
