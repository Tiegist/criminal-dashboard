<template>
	<table v-if="all_crimes.length > 0" class="mb-10">
		<thead>
			<tr>
				<th>ቁጥር</th>
				<th>ወንጀል </th>
				<th>ገለጻ</th>
			</tr>
		</thead>
		<tbody>

			<tr v-for="crime, i in all_crimes" :key="i">
				<td>{{ i + 1 }}</td>
				<td>{{crimes.find(t => t.id == crime.crime_id)?.name}}</td>
				<td>{{ crime.crime_description }}</td>
			</tr>
		</tbody>
	</table>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div class="space-y-6">
			<div>
				<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
					ወንጀል
				</label>
				<div class="relative z-20 bg-transparent">
					<select v-model="single.crime_id"
						class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
						<option value="" disabled selected> ወንጀል </option>
						<option v-for="crime in crimes" :key="crime.id" :value="crime.id">{{ crime.name }}</option>
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

			<div class="space-y-6">
				<div>
					<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
						ማብራሪያ
					</label>
					<textarea type="text" :rows="6" v-model="single.crime_description" placeholder=""
						class="dark:bg-dark-900 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"></textarea>
				</div>

			</div>
			<p class="text-red-600 mt-5">{{ errorMessage }}</p>

			<button :class="[
				'inline-flex items-center bg-teal-600 justify-center font-medium gap-2 rounded-lg transition mr-30',
				sizeClasses[size],
				variantClasses[variant],
				className,
				{ 'cursor-not-allowed opacity-50': disabled },
			]" @click="addSingle()" :disabled="disabled">
				<span v-if="startIcon" class="flex items-center">

				</span>
				ያስገቡ
				<span v-if="endIcon" class="flex items-center">

				</span>
			</button>

			<button :class="[
				'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
				sizeClasses[size],
				variantClasses[variant],
				className,
				{ 'cursor-not-allowed opacity-50': disabled },
			]" @click="registerPrisionerCrime" :disabled="disabled">
				<span v-if="startIcon" class="flex items-center">

				</span>
				<span v-if="!editMode"> {{ 'ይመዝግቡ ' }} </span>
				<span v-if="editMode"> {{ 'ይመዝግቡ ' }} </span>
				<span v-if="endIcon" class="flex items-center">

				</span>
			</button>

		</div>

	</div>

</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import router from '@/router'
import flatPickr from 'vue-flatpickr-component'
import axios from 'axios'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const store = useStore();
const apiServer = computed(() => store.state.apiServer);
const saving = ref(false);
const errorMessage = ref('');
const route = useRoute();
const editMode = computed(() => route.query.prison_history_id);

const crimes = ref([]);
let single = ref({
	crime_id: null,
	crime_description: '',
})

const emit = defineEmits(['prisonerCrimeSaved']);


let all_crimes = ref([]);

const fetchCrimes = async () => { axios.get(apiServer.value + 'crime').then(response => { crimes.value = response.data.data; }) }

function addSingle() {
	if (single.value.crime_id == null) {
		errorMessage.value = 'እባክዎት የምርጫ መስክ ይሙሉ'
		return
	}

	if (single.value.crime_description == '') {
		errorMessage.value = 'እባክዎት የማብራሪያ መስክ ይሙሉ'
		return
	}

	all_crimes.value.push(single.value)
	single.value = {
		crime_id: null,
		crime_description: '',
	}
}

const registerPrisionerCrime = () => {
	if (saving.value == true) return;

	if (all_crimes.value.length == 0) {
		emit('prisonerCrimeSaved');
		return
	}

	errorMessage.value = ''
	saving.value = true

	axios
		.post(apiServer.value + 'prisoner/crime', {
			prison_history_id: route.query.prison_history_id,
			all_crimes: all_crimes.value,
		})
		.then(response => {
			saving.value = false
			emit('prisonerCrimeSaved');
		})
		.catch(error => {
			errorMessage.value = error.response.data.message
			saving.value = false
		})
}

const fetchPrisonerHistory = async () => {
	axios
		.get(apiServer.value + 'prisoner-history/' + route.query.prison_history_id)
		.then(response => {
			all_crimes.value = response.data.data.prisioner_crimes
			router.replace({ query: { ...route.query, prisioner_id: response.data.data.prisioner_id } });
		})
}

onMounted(() => {
	fetchCrimes();
	if (route.query.prison_history_id) {
		fetchPrisonerHistory()
	}
});

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

const flatpickrConfig = {
	dateFormat: 'Y-m-d',
	altInput: true,
	altFormat: 'F j, Y',
	wrap: true,
}
const sizeClasses = {
	sm: 'px-6  py-3 text-sm',
	md: 'px-12  py-3.5 text-sm',
}

const variantClasses = {
	primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
	outline:
		'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
}

// const onClick = () => {
//   if (!props.disabled && props.onClick) {
//     props.onClick()
//   }
// }
// const time = ref(null)
// const gotoNext=()=>{
// router.push('/')
// }
</script>