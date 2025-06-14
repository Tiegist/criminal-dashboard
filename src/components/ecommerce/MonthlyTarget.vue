<template>
	<div class="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
		<div class="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
			<div class="flex justify-between">
				<div>
					<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">ጾታ </h3>
					<p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
						የእስረኞች ጾታ መጠን
					</p>
				</div>
				<div>

				</div>
			</div>
			<div class="relative max-h-[195px]">
				<div id="chartTwo" class="h-full">
					<div class="radial-bar-chart">
						<VueApexCharts type="donut" height="230" :options="chartOptions" :series="series" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from 'vue';

import VueApexCharts from 'vue3-apexcharts';
import axios from 'axios';
import { useStore } from 'vuex';

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

const series = computed(() => [dashboardData.value.male_prisoners, dashboardData.value.female_prisoners])
const chartOptions = ref({
	labels: ['ወንድ', 'ሴት']
})

</script>