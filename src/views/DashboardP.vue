<template>
  <Police-layout>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-6 xl:col-span-7">
        <ecommerce-metrics />
        <monthly-target />
      </div>
      <div class="col-span-12 xl:col-span-5">
        <monthly-sale />
      </div>

      <div class="col-span-12">
        <statistics-chart />
      </div>
    </div>
  </police-layout>
</template>

<script>
import PoliceLayout from '../components/layout/PoliceLayout.vue'
import EcommerceMetrics from '../components/ecommerce/EcommerceMetrics.vue'
import MonthlyTarget from '../components/ecommerce/MonthlySale.vue'
import MonthlySale from '../components/ecommerce/MonthlyTarget.vue'

export default {
  components: {
    PoliceLayout,
    EcommerceMetrics,
    MonthlyTarget,
    MonthlySale,
  },
  name: 'Dashboard',
}
</script>
