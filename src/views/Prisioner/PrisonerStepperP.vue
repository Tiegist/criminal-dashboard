<template>
  <PoliceLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="flex items-center justify-center space-x-4 mb-10">
      <div v-for="(step, index) in steps" :key="step.no" class="flex items-center">
        <div class="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          :class="currentStep >= step.no ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'"
          @click="changeStep(step.no)">
          {{ step.no + 1 }}
        </div>
        <span class="ml-2" :class="currentStep === step.no ? 'font-bold' : 'text-gray-500'">{{ step.name }}</span>
        <div v-if="index < steps.length - 1" class="w-12 h-1 bg-gray-300"
          :class="currentStep > step.no ? 'bg-blue-600' : ''"></div>
      </div>
    </div>
    <BasicInformation @prisonerSaved="changeStep(1)" v-if="currentStep == 0"> </BasicInformation>
    <PrisionerApperance @prisonerApperanceSaved="changeStep(2)" v-if="currentStep == 1"> </PrisionerApperance>
    <PersonalInformation @prisonerPersonalInfoSaved="changeStep(3)" v-if="currentStep == 2"> </PersonalInformation>
    <PrisionerProperty @prisonerPropertySaved="changeStep(4)" v-if="currentStep == 3"> </PrisionerProperty>
    <PrisonerCrimes @prisonerCrimeSaved="gotoProfile" v-if="currentStep == 4"> </PrisonerCrimes>


  </PoliceLayout>
</template>

<script>

import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

import Prisioner from '@/views/Prisioner/Prisioner.vue'
import PrisionerApperance from './Steps/PrisionerApperance.vue'
import PrisionerProperty from './PrisionerProperty.vue'
import BasicInformation from './Steps/BasicInformation.vue'
import PersonalInformation from './Steps/PersonalInformation.vue'
import PrisonerCrimes from '../Criminal/PrisonerCrimes.vue'
import PoliceLayout from '@/components/layout/PoliceLayout.vue'

export default {
  components: {
    PageBreadcrumb, PoliceLayout, Prisioner, PrisionerApperance, PrisionerProperty, BasicInformation, PersonalInformation, PrisonerCrimes,
  },
  data() {
    return {
      currentPageTitle: 'የታራሚዎች ቅጽ',
      steps: [
        { no: 0, name: 'ዋና ዋና መረጃወች' },
        { no: 1, name: 'የሰዉነት ገጽታ' },
        { no: 2, name: 'የእስረኞቺ ተጨማሪ መረጃዎቺ' },
        { no: 3, name: 'ንብረቶች' },
        { no: 4, name: 'ወንጀሎች' },
      ],
      currentStep: 0,
    }
  },
  methods: {
    changeStep(step) {
      this.currentStep = step
    },
    gotoProfile() {
      this.$router.push({
        name: 'ShowSinglePrisoner',
        query: { prisoner: this.$route.query.prisioner_id },
      })
    },
    mounted() {

    }
  }
}

</script>
