<template>
	<div
		class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">የየወሩ እስረኞች</h3>

			<div class="relative h-fit">

			</div>
		</div>

		<div class="max-w-full overflow-x-auto custom-scrollbar">
			<div id="chartOne" class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
				<VueApexCharts v-if="keys.length > 0" type="bar" height="280" :options="chartOptions"
					:series="series" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DropdownMenu from '../common/DropdownMenu.vue';
import VueApexCharts from 'vue3-apexcharts';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
	dashboardData: {
		type: Object,
		default: () => ({ dashboardData: [] })
	}
})

const values = computed(() => props.dashboardData.monthly_arrests.valuess ?? [])
const keys = computed(() => props.dashboardData.monthly_arrests.keyss ?? [])

const series = computed(() => [
	{
		name: 'Monthly Arrests',
		data: values.value,
	},
]);

const chartOptions = computed(() => {
	return {
		colors: ['#465fff'],
		chart: {
			fontFamily: 'Outfit, sans-serif',
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '39%',
				borderRadius: 5,
				borderRadiusApplication: 'end',
			},
		},
		dataLabels: {
			enabled: true,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: keys.value ?? [],
			axisBorder: {
				show: true,
			},
			axisTicks: {
				show: true,
			},
		},
		legend: {
			show: true,
			position: 'top',
			horizontalAlign: 'left',
			fontFamily: 'Outfit',
			markers: {
				radius: 99,
			},
		},
		yaxis: {
			title: {
				text: 'Number of Arrests',
			},
			min: 0,
			labels: {
				formatter: function (value) {
					return value;
				},
			},
		},
		grid: {
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			x: {
				show: false,
			},
			y: {
				formatter: function (val) {
					return val.toString();
				},
			},
		},
	}
});

</script>