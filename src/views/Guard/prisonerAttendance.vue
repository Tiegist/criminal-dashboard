<template>
	<div class="min-h-screen flex flex-col xl:flex-row bg-gray-50 dark:bg-gray-900">
		<app-sidebar />
		<Backdrop />


		<div class="flex-1 transition-all duration-300 ease-in-out"
			:class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[10px]']">
			<app-header />
			<div class="p-4 mx-auto max-w-7xl md:p-6">
				<slot></slot>


				<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-8 w-full max-w-3xl mx-auto">
					<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<img src="/criminallogo.png" alt="Logo" class="w-28 h-auto mx-auto md:mx-0" />
						<h1 class="text-center md:text-left text-3xl font-bold text-gray-800 dark:text-white/90">
							የእስረኞች የየቀን መቆጣጠሪያ
						</h1>
					</div>


					<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

						<div class="relative p-4 rounded-xl bg-gray-100 dark:bg-gray-900 shadow">
							<label class="block mb-1 text-sm font-semibold text-gray-800 dark:text-gray-300">ቀን</label>
							<div class="relative">
								<!-- <flat-pickr v-model="date" :config="flatpickrConfig"
									class="h-11 w-full rounded-lg bg-white dark:bg-gray-800 px-4 pr-12 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
									placeholder="ቀን ይምረጡ" /> -->
									<span class="text-lg text-teal-500">
										{{ today }}
									</span>
								<div
									class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-lg">
									📅
								</div>
							</div>
						</div>


						<div class="relative p-4 rounded-xl bg-gray-100 dark:bg-gray-900 shadow">
							<label class="block mb-1 text-sm font-semibold text-gray-800 dark:text-gray-300">ሰአት</label>
							<div class="relative">
								<select v-model="time"
									class="h-11 w-full rounded-lg bg-white dark:bg-gray-800 px-4 pr-12 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400">
									<option value="" disabled selected>ሰአት ይምረጡ</option>
									<option value="1">ጠዋት</option>
									<option value="2">NIGHT</option>
								</select>
								<div
									class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-lg">
									⏰
								</div>
							</div>
						</div>
					</div>

					<div class="mt-8 space-y-3 max-h-64 overflow-y-auto">
						<div v-for="prison in prisoners" :key="prison.id"
							class="flex items-center justify-between p-3 rounded-md bg-gray-100 dark:bg-gray-800">
							<span class="text-gray-800 dark:text-gray-200 text-base font-medium">
								{{ prison.first_name }} {{ prison.middle_name }} {{ prison.last_name }}
							</span>
							<input type="checkbox" v-model="prison.checked"
								class="h-5 w-5 text-teal-600 rounded focus:ring-teal-500" />
						</div>
					</div>
					
						<span class="text-teal-500 text-2xl">{{  message }} </span>

					<div class="mt-8 text-center">
						<button @click="submitAttendance"
						class="w-full md:w-auto px-8 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-md transform hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
						:disabled="!isFormValid">
							✅ ይመዝግቡ
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import AppHeader from "@/components/layout/AppHeader.vue";



export default {
	components: {
		flatPickr,
		AppHeader
	},
	data() {
		return {
			prisoners: [],
			date: null,
			time: 1,
			status: null,
			flatpickrConfig: {
				dateFormat: 'Y-m-d',
				altInput: true,
				altFormat: 'F j, Y',
				wrap: true,
			},
			message: '',
			today: ''
		};
	},
	mounted() {
		this.getAllPrisoners();
	},
	computed: {
		isFormValid() {
			return this.time;
		}
	},
	watch: {
		time() { 
			this.getAttendance()
		}
	},
	methods: {
		getAllPrisoners() {
			axios.get(this.$store.state.apiServer + 'prisoner').then((res) => {
				this.prisoners = res.data.Prisioner.data.map(prison => ({ ...prison, checked: false }));
				this.getAttendance()
			});

		},
		getAttendance() {
			axios.get(this.$store.state.apiServer + 'get-attendance?time=' + this.time).then((res) => {
				let pres = res.data.data.present ?? []
				let abse = res.data.data.absent
				this.today = res.data.data.today
				this.prisoners = this.prisoners.map(prison => (
					{ ...prison, checked: pres.includes(prison.id) ? true : false }
				));
			});
		},
		submitAttendance() {
			this.message = '';
			let present = []
			let absent = []

			this.prisoners.forEach(p => {
				if(p.checked) present.push(p.id)
				else absent.push(p.id)
			})

			axios
				.post(this.$store.state.apiServer + `attendance`, {
					time: parseInt(this.time),
					date: this.date,
					present: present,
					absent: absent,
				})
				.then(response => {
					this.message = response.data.message
					this.getAllPrisoners();
				})
				.catch(error => {
					this.message = error.response.data.message
				})
		}
	}
}
</script>

<style>
/* Add any necessary styles here */
</style>
