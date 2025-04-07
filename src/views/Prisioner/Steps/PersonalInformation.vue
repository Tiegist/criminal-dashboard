<template>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
		<div class="space-y-4">
			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Phone Number </label>
				<input type="text" v-model="prisonerPersonalInfo.phone_number" placeholder="Job"
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>


			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Closest Respondent </label>
				<input type="text" v-model="prisonerPersonalInfo.closest_respondent" placeholder="Closest Respondent"
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>

			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Current District </label>
				<input type="text" v-model="prisonerPersonalInfo.current_district" placeholder="Current District "
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>

			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Educational Level </label>
				<div class="relative z-20 bg-transparent">
					<select v-model="prisonerPersonalInfo.educational_level_id"
						class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
						<option v-for="educationalLevel in educationalLevels" :key="educationalLevel.id" :value="educationalLevel.id">{{ educationalLevel.name }}</option>
					</select>
					<span
						class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
						<svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>
			</div>



			<p class="text text-red-600"> {{ errorMessage }} </p>
			<button :class="[
				'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
				sizeClasses[size],
				variantClasses[variant],
				className,
				{ 'cursor-not-allowed opacity-50': disabled },
			]" @click="registerPrisonerApperance" :disabled="disabled">
				<span v-if="startIcon" class="flex items-center"> </span>
				{{ !saving ? 'Save & Continue' : 'Saving...' }}
				<span v-if="endIcon" class="flex items-center">

				</span>
			</button>

		</div>
		<div class="space-y-4">
			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Mobile Number </label>
				<input type="text" v-model="prisonerPersonalInfo.mobile_number" placeholder="Mobile Number"
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>

			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Closest Respondent Town </label>
				<div class="relative z-20 bg-transparent">
					<select v-model="prisonerPersonalInfo.closest_respondent_town_id"
						class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
						<option v-for="town in towns" :key="town.id" :value="town.id">{{ town.name }}</option>
					</select>
					<span
						class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
						<svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>
			</div>


			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Ccurrent City </label>
				<div class="relative z-20 bg-transparent">
					<select v-model="prisonerPersonalInfo.current_city_id"
						class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
						<option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
					</select>
					<span
						class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
						<svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>
			</div>




		</div>
		<div class="space-y-4">

			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Job </label>
				<input type="text" v-model="prisonerPersonalInfo.job" placeholder=" Job"
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>


			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Closest Respondent District </label>
				<input type="text" v-model="prisonerPersonalInfo.closest_respondent_district" placeholder="Closest Respondent District"
					class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
			</div>


	
			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Religion </label>
				<div class="relative z-20 bg-transparent">
					<select v-model="prisonerPersonalInfo.religion_id"
						class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
						<option v-for="religion in religions" :key="religion.id" :value="religion.id">{{ religion.name }}</option>
					</select>
					<span
						class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
						<svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const emit = defineEmits(['prisonerPersonalInfoSaved']);

const store = useStore();
const apiServer = computed(() => store.state.apiServer);

const religions = ref([])
const towns = ref([])
const cities = ref([])
const educationalLevels = ref([])

const saving = ref(false);
const errorMessage = ref('');

const prisonerPersonalInfo = ref({
	phone_number: '+25112112211',
	closest_respondent: 'Sintayehu Girma',
	closest_respondent_district: 'Piyassa',
	religion_id: 1,
	mobile_number: '091221122',
	closest_respondent_town_id: 1,
	current_district: 'Kospi',
	job: 'Driver',
	current_city_id: 1,
	educational_level_id: 1,
})

const fetchReligion = async () => { axios.get(apiServer.value + 'religion').then(response => { religions.value = response.data.data; }) }
const fetchTowns = async () => { axios.get(apiServer.value + 'town').then(response => { towns.value = response.data.data; }) }
const fetchCities = async () => { axios.get(apiServer.value + 'city').then(response => { cities.value = response.data.data; }) }
const fetchEducationalLevels = async () => { axios.get(apiServer.value + 'education').then(response => { educationalLevels.value = response.data.data; }) }

const registerPrisonerApperance = async () => {
	if (saving.value == true) return;

	errorMessage.value = ''
	saving.value = true

	axios
		.post(apiServer.value + 'prisoner/personal-info', {
			prison_history_id: route.query.prison_history_id,
			phone_number: prisonerPersonalInfo.value.phone_number,
			closest_respondent: prisonerPersonalInfo.value.closest_respondent,
			closest_respondent_district: prisonerPersonalInfo.value.closest_respondent_district,
			religion_id: prisonerPersonalInfo.value.religion_id,
			mobile_number: prisonerPersonalInfo.value.mobile_number,
			closest_respondent_town_id: prisonerPersonalInfo.value.closest_respondent_town_id,
			current_district: prisonerPersonalInfo.value.current_district,
			job: prisonerPersonalInfo.value.job,
			current_city_id: prisonerPersonalInfo.value.current_city_id,
			educational_level_id: prisonerPersonalInfo.value.educational_level_id,
		})
		.then(response => {
			saving.value = false
			emit('prisonerPersonalInfoSaved');
		})
		.catch(error => {
			errorMessage.value = error.response.data.message
			saving.value = false
		})
}
onMounted(() => {
	fetchReligion();
	fetchTowns();
	fetchCities();
	fetchEducationalLevels();
});

const currentPageTitle = ref('የታራሚዎቺ መረጃ ምዝገባ Third ቅጽ  ')
interface ButtonProps {
	size?: 'sm' | 'md'
	variant?: 'primary' | 'outline'
	startIcon?: object
	endIcon?: object
	className?: string
	disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
	size: 'md',
	variant: 'primary',
	className: '',
	disabled: false,
})

const sizeClasses = {
	sm: 'px-6  py-3 text-sm',
	md: 'px-12  py-3.5 text-sm',
}

const variantClasses = {
	primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
	outline:
		'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
}
</script>