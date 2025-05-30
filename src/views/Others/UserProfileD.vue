<template>
  <AdminLayoutMedical>
    <PageBreadcrumb :pageTitle="currentPageTitle" />

    <div
      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
    >
      <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">የግል መረጃ</h3>
      <!-- <profile-cardp /> -->
      <personal-info-cardp />
      <!-- <address-card /> -->
    </div>
  </AdminLayoutMedical>
</template>

<script setup>
import AdminLayoutMedical from '../../components/layout/AdminLayoutMedical.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import { ref } from 'vue'
//import ProfileCardp from '../../components/profile/ProfileCardp.vue'
import PersonalInfoCardp from '../../components/profile/PersonalInfoCardP.vue'
// import AddressCard from '../../components/profile/AddressCard.vue'
const currentPageTitle = ref(' የግል መረጃ ')
</script>
