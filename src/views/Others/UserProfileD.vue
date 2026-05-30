<template>
  <AdminLayoutMedical>
    <PageBreadcrumb pageTitleKey="pages.ProfileD" />
    <personal-info-cardp />
  </AdminLayoutMedical>
</template>

<script setup>
import AdminLayoutMedical from '../../components/layout/AdminLayoutMedical.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import PersonalInfoCardp from '../../components/profile/PersonalInfoCardP.vue'
</script>
