<template>
	<div
		class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">አቴንዳንስ</h3>

			<div class="relative h-fit">

			</div>
		</div>

			<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">ወንድ</h3>

		<div class="max-w-full overflow-x-auto custom-scrollbar">
			<div id="chartOne" class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
				<VueApexCharts v-if="keys.length > 0" type="bar" height="380" :options="chartOptions"
					:series="series" />
			</div>
		</div>
			<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">ሴት</h3>
    

		<div class="max-w-full overflow-x-auto custom-scrollbar">
			<div id="chartOne" class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
				<VueApexCharts v-if="keys.length > 0" type="bar" height="380" :options="chartOptions"
					:series="fseries" />
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

const values = computed(() => props.dashboardData.crime_counts.valuess ?? [])
const keys = computed(() => props.dashboardData.attendances.dates ?? [])

const series = computed(() => props.dashboardData.attendances.male_info);
const fseries = computed(() => props.dashboardData.attendances.female_info);

const chartOptions = computed(() => {
	return {
		 chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: props.dashboardData.attendances.dates,
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val 
                }
              }
            }
	}
});

</script>