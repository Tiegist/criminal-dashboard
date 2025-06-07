<template>
	<admin-layout>
		<div class="grid grid-cols-12 gap-4 md:gap-6">
			<div class="col-span-12 space-y-6 xl:col-span-7">
				<ecommerce-metrics :dashboardData="dashboardData"/>
				<monthly-target />
			</div>
			<div class="col-span-12 xl:col-span-5">
				<monthly-sale />
			</div>

			<div class="col-span-12">
				<statistics-chart />
			</div>
		</div>
	</admin-layout>
</template>

<script setup>
import AdminLayout from '../components/layout/AdminLayout.vue'
import EcommerceMetrics from '../components/ecommerce/EcommerceMetrics.vue'
import MonthlyTarget from '../components/ecommerce/MonthlySale.vue'
import MonthlySale from '../components/ecommerce/MonthlyTarget.vue'
import axios from 'axios'

import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
const store = useStore();

const dashboardData = ref([])
const apiServer = computed(() => store.state.apiServer);

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
