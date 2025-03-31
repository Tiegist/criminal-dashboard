<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
      <div class="flex items-center justify-center space-x-4">
        <div v-for="(step, index) in steps" :key="step.no" class="flex items-center">
          <div 
            class="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
            :class="currentStep >= step.no ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'"
            @click="changeStep(step.no)"
          >
            {{ step.no + 1 }}
          </div>
          <span class="ml-2" :class="currentStep === step.no ? 'font-bold' : 'text-gray-500'">{{ step.name }}</span>
          <div v-if="index < steps.length - 1" class="w-12 h-1 bg-gray-300" :class="currentStep > step.no ? 'bg-blue-600' : ''"></div>
        </div>
     </div>
     <Prisioner v-if="currentStep == 0"> </Prisioner>
     <PrisionerApperance v-if="currentStep == 1"> </PrisionerApperance>
     <PrisionerProperty v-if="currentStep == 2"> </PrisionerProperty>
  </AdminLayout>
</template>

<script>

import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

import Prisioner from '@/views/Prisioner/Prisioner.vue'
import PrisionerApperance from './PrisionerApperance.vue'
import PrisionerProperty from './PrisionerProperty.vue'

export default {
  components: {
    PageBreadcrumb, AdminLayout, Prisioner, PrisionerApperance, PrisionerProperty, 
  },
  data() {
    return {
      currentPageTitle: 'New Prisoner Form',
      steps: [
        { no: 0, name: 'Basic Information' },
        { no: 1, name: 'Apperance' },
        { no: 2, name: 'Properties' },
      ],
      currentStep: 0,
    }
  },
  methods: {
    changeStep(step) {
      this.currentStep = step
    }
  }
}

</script>


