<template>
	<admin-layout>
		<div class="grid grid-cols-12 gap-4 md:gap-6">
			<div class="col-span-12 space-y-6 xl:col-span-7">
				<ecommerce-metrics v-if="loaded" :dashboardData="dashboardData"/>
				<monthly-sale v-if="loaded" :dashboardData="dashboardData"/>
			</div>
			<div class="col-span-12 xl:col-span-5">
				<monthly-target />
			</div>

			
			<div class="col-span-12">
				<statistics-chart />
			</div>
			<div class="col-span-12">
				<CrimeCount v-if="loaded":dashboardData="dashboardData" />
			</div>
		</div>
	</admin-layout>
</template>

<script setup>
import AdminLayout from '../components/layout/AdminLayout.vue'
import EcommerceMetrics from '../components/ecommerce/EcommerceMetrics.vue'
import MonthlyTarget from '../components/ecommerce/MonthlyTarget.vue'
import MonthlySale from '../components/ecommerce/MonthlySale.vue'
import CrimeCount from '../components/ecommerce/CrimeCount.vue'

import axios from 'axios'

import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
const store = useStore();

const dashboardData = ref([])
const apiServer = computed(() => store.state.apiServer);

const loaded = computed(() => Object.keys(dashboardData.value).length > 0)
const fetchDashboard = () => {
	axios
		.get(apiServer.value + 'dashboard')
		.then(response => {
			dashboardData.value = response.data.data
		})
}

onMounted(() => {
	fetchDashboard()
})
</script>
