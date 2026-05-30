<template>
  <Police-layout>
    <PageBreadcrumb pageTitleKey="pages.ProfileP" />
    <personal-info-cardp />
  </Police-layout>
</template>

<script setup>
import PoliceLayout from '../../components/layout/PoliceLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import PersonalInfoCardp from '../../components/profile/PersonalInfoCardP.vue'
</script>
