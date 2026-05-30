<template>
	<LayoutComponent>
		<div>
			<div class="flex">
				<div class="app-search-panel w-full">
					<h2 class="app-search-title text-center mb-8">📋 የታራሚ መረጃ ይፈልጉ</h2>

					<div class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-4 gap-6">

							<div>
								<label class="app-label">ስም</label>
								<input type="text" v-model="prisoner.first_name" class="app-input">
							</div>

							<div>
								<label class="app-label">የአባት ስም</label>
								<input type="text" v-model="prisoner.middle_name" class="app-input">
							</div>

							<div>
								<label class="app-label">የአያት ስም</label>
								<input type="text" v-model="prisoner.last_name" class="app-input">
							</div>

							<div>
								<label class="app-label">የእናት ስም</label>
								<input type="text" v-model="prisoner.mother_name" class="app-input">
							</div>

							<div>
								<label class="app-label">እድሜ</label>
								<input type="tel" v-model="prisoner.date_of_birth" class="app-input">
							</div>

							<div>
								<label class="app-label">ጾታ</label>
								<select v-model="prisoner.sex" class="app-select">
									<option v-for="option in sexes" :key="option.id" :value="option.id">
										{{ option.name }}
									</option>
								</select>
							</div>

							<div v-if="isAdmin">
								<label class="app-label">ሀይማኖት</label>
								<select v-model="prisoner.religion_id" class="app-select">
									<option v-for="religion in religions" :key="religion.id" :value="religion.id">
										{{ religion.name }}
									</option>
								</select>
							</div>

							<div v-if="isAdmin">
								<label class="app-label">የወንጀል አይነት</label>
								<select v-model="prisoner.crime_id" class="app-select">
									<option v-for="crime in crimes" :key="crime.id" :value="crime.id">
										{{ crime.name }}
									</option>
								</select>
							</div>

						</div>
						<div class="pt-6">
							<div class="flex justify-between w-3/4 mx-auto">
								<button @click="fetchPrisioner('', true)" class="app-btn-primary flex-1 py-3">
									🔎 {{ searching ? 'Searching' : 'ይፈልጉ' }}
								</button>
								<button @click="clearSearch()" class="app-btn-secondary flex-1 py-3 ml-4">
									ይሰርዙ
								</button>
							</div>
							<div v-if="errorMessage" class="text-error-600 text-center font-semibold mt-4 dark:text-error-400">
								{{ errorMessage }}
							</div>
							<div v-if="successMessage" class="text-success-600 text-center font-semibold mt-4 dark:text-success-400">
								{{ successMessage }}
							</div>
							<div v-if="noResults" class="text-amber-600 text-center font-semibold mt-4 dark:text-amber-400">
								😕 በዚህ መረጃ ውስጥ የታሰረ ሰው አልተገኘም።
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="app-table-wrap mt-8">
			<div class="max-w-full overflow-x-auto custom-scrollbar">
				<table class="app-table min-w-full">
					<thead class="app-table-head">
						<tr>
							<th class="px-5 py-3.5 text-left">ስም</th>
							<th class="px-5 py-3.5 text-left">የአባት ስም</th>
							<th class="px-5 py-3.5 text-left">የአያት ስም</th>
							<th class="px-5 py-3.5 text-left">የ/ወ/መ/ፍ/ቁጥር</th>
							<th class="px-5 py-3.5 text-right">ድርጊቶች</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="PrisionerInfo.length === 0">
							<td colspan="5" class="px-6 py-10">
								<EmptyState :title="$t('common.noResults')" />
							</td>
						</tr>
						<tr v-for="(user, index) in PrisionerInfo" :key="index" class="app-table-row">
							<td class="px-5 py-4 sm:px-6">
								<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.first_name }}</p>
							</td>
							<td class="px-5 py-4 sm:px-6">
								<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.middle_name }}</p>
							</td>
							<td class="px-5 py-4 sm:px-6">
								<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.last_name }}</p>
							</td>
							<td class="px-5 py-4 sm:px-6">
								<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.prisioner_unique_number }}</p>
							</td>
							<td class="px-5 py-4 sm:px-6 text-right">
								<button type="button" @click="fetchSinglePrisioner(user.id)" class="app-link-edit cursor-pointer">ተጨማሪ</button>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="flex flex-wrap justify-center items-center mt-6 pb-4 gap-1">
					<span v-for="page in (links ?? [])" :key="page.label" @click="page.url && fetchPrisioner(page.url)"
						:class="['app-pagination-item',
							page.url ? 'cursor-pointer app-pagination-inactive' : 'cursor-not-allowed opacity-50',
							page.active ? 'app-pagination-active' : 'app-pagination-inactive'
						]" v-html="page.label">
					</span>
				</div>
			</div>
		</div>
		<div class="flex w-12/12 mx-auto">

			<div v-if="showPrisoiner" :class="[
				'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/3 mx-auto',
				className,
			]">
				<!-- Card Header -->
				<div class="px-6 py-5">
					የታራሚው ዝርዝር መረጃ

				</div>

				<!-- Card Body -->
				<div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
					<div class="space-y-5">

						<div class="">
							<p class="text-base  text-blue-800 dark:text-white/90">
								<span class="font-bold mr-10 text-gray-800">የማረ/ቤት መ/መ/ቁጥር : </span>{{
									singlePrisioner.prisioner_unique_number }}
							</p>
							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-21 text-gray-800">የ/ወ/መ/ፍ/ቁጥር :</span> {{
									singlePrisioner.prision_unique_number }}
							</p>
						</div>
						<div class="mt-5">
							<p class="mt-1 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-38 text-gray-800">ስም :</span>{{ singlePrisioner.first_name }}
							</p>

							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-29 text-gray-800">የአባት ስም :</span> {{
									singlePrisioner.middle_name }}
							</p>
						</div>
						<div class="">
							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-29 text-gray-800">የአያት ስም :</span> {{
									singlePrisioner.last_name }}
							</p>

							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-29 text-gray-800">የእናት ስም :</span> {{
									singlePrisioner.mother_name }}
							</p>
						</div>
						<div class="">
							<p class="mt-1 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀን</span>{{
									singlePrisioner.date_of_birth }}
							</p>

							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-39 text-gray-800"> ጾታ :</span> {{ singlePrisioner.sex }}
							</p>
						</div>
						<div class="">
							<p class="mt-1 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀበሌ :</span> {{
									singlePrisioner.birth_district }}
							</p>

							<p class="mt-5 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-17 text-gray-800">የተወለደበት ከተማ :</span> {{
									singlePrisioner.birth_town.name }}
							</p>
						</div>
						<div>
							<p class="mt-1 text-sm text-blue-800 dark:text-white/90">
								<span class="font-bold mr-37 text-gray-800"> ብሄር :</span> {{
									singlePrisioner.ethnic_group?.name }}
							</p>
						</div>
						<div class="flex">
							<div>
								<Button size="sm" variant="outline"
									@click="fetchSinglePrisionerInfo(singlePrisioner.id)">ተጨማሪ መረጃ ይመልከቱ
								</Button>
							</div>
							<div>
								<Button size="sm" variant="outline"
									@click="fetchSinglePrisionerInfo(singlePrisioner.id)">መረጃ
									ያስተካክሉ</Button>
							</div>
						</div>
					</div>
				</div>

			</div>



		</div>

	</LayoutComponent>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import AdminLayoutMedical from '@/components/layout/AdminLayoutMedical.vue';
import EmptyState from '@/components/common/EmptyState.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import PoliceLayout from '@/components/layout/PoliceLayout.vue';



const route = useRoute();
const store = useStore();
const apiServer = computed(() => store.state.apiServer);

const isAdmin = computed(() => store.getters.isAdmin);
const isDoctor = computed(() => store.getters.isDoctor);

let LayoutComponent = PoliceLayout

const paginationInfo = ref({});
const links = computed(() => paginationInfo.value.links);
const PrisionerInfo = ref([]);
const singlePrisioner = ref([]);
const singlePrisionerInfo = ref([]);
const sexes = ref([]);
const showPrisoiner = ref(false);
const showPrisoinerInfo = ref(false);
const showMore = ref(false);
const religions = ref([]);
const crimes = ref([])
const errorMessage = ref('');
const successMessage = ref('');
const noResults = ref(false);
const searching = ref(false)


const prisoner = ref({
	first_name: '',
	middle_name: '',
	last_name: '',
	date_of_birth: '',
	mother_name: '',
	sex: null,
	eye_id: '',
	religion_id: null,
	crime_id: null,
});

const fetchCrimes = async () => { axios.get(apiServer.value + 'crime').then(response => { crimes.value = response.data.data; }) }
const fetchReligion = async () => {
	try {
		const response = await axios.get(apiServer.value + 'religion');
		religions.value = response.data.data;
	} catch (error) {
		console.error('ሃይማኖቶችን ማምጣት ላይ ስህተት!', error);
	}
}

const fetchSex = async () => {
	axios
		.get(apiServer.value + 'sexes')
		.then(response => {
			sexes.value = response.data;
		})
}

const clearSearch = function () {
	prisoner.value = {
		first_name: '',
		middle_name: '',
		last_name: '',
		date_of_birth: '',
		mother_name: '',
		sex: null,
		eye_id: '',
		religion_id: null,
		crime_id: null,
	}

	fetchPrisioner()
}

const fetchPrisioner = async (url = '', search = false) => {
	paginationInfo.value = {}
	PrisionerInfo.value = []
	errorMessage.value = ''
	successMessage.value = ''

	url = url === '' ? apiServer.value + 'prisoner' : url;
	const filters = {};

	if (search) {
		searching.value = true
		if (prisoner.value.first_name) filters.first_name = prisoner.value.first_name;
		if (prisoner.value.middle_name) filters.middle_name = prisoner.value.middle_name;
		if (prisoner.value.last_name) filters.last_name = prisoner.value.last_name;
		if (prisoner.value.mother_name) filters.mother_name = prisoner.value.mother_name;
		if (prisoner.value.sex) filters.sex = prisoner.value.sex;
		if (prisoner.value.date_of_birth) filters.date_of_birth = prisoner.value.date_of_birth;
		if (prisoner.value.crime_id) filters.crime_id = prisoner.value.crime_id;
		if (prisoner.value.religion_id) filters.religion_id = prisoner.value.religion_id;
	}

	axios
		.get(url, { params: filters })
		.then(response => {

			paginationInfo.value = response.data.Prisioner;
			PrisionerInfo.value = response.data.Prisioner.data;

			if (search) {
				if (PrisionerInfo.value.length == 0) {

					errorMessage.value = '❌ ምንም ውጤት አልተገኘም!'
				} else {
					successMessage.value = paginationInfo.value.total + ' ከመዝገብህ ጋር የሚዛመዱ ውጤቶች ተገኝተዋል'
				}
			}
		}).catch(error => {
			errorMessage.value = error.response?.data?.message ?? '❌ ፍለጋውን ማከናወን አልተቻለም። እባክዎን አንደገና ይሞክሩ።'
		}).finally(() => {
			searching.value = false
		})
};

const fetchSinglePrisioner = (prisoner_id) => {
	router.push({ name: 'ShowSinglePrisoner', query: { prisoner: prisoner_id } });
};

const fetchSinglePrisionerInfo = (id) => {
	localStorage.setItem('prisoner_id', id);
	router.push('/ShowSinglePrisoner');
};

const toggleShow = () => {
	showMore.value = !showMore.value;
};

onMounted(() => {
	fetchPrisioner();
	fetchReligion();
	fetchSex();
	fetchCrimes();
});



</script>
