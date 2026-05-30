<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="ዞኖችን መቆጣጠር">
					<div class="space-y-6">
						<div>
							<label class="app-label">
										የዞን ስም
							</label>
							<input type="text" v-model="name" placeholder="Enter City Name"
								class="app-input" />
						</div>

						<div>
							<label class="app-label">
								ክልል ምረጥ
							</label>
							<div class="relative z-20 bg-transparent">
								<select
									v-model="region_id"
									class="app-select"
									:class="{ 'text-gray-800 dark:text-white/90': true }"
									>
									
									<option v-for="region in regions"  :value="region.id" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
										{{ region.name }}
									</option>
								</select>
								<span class="absolute z-30 text-gray-700 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400" > <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg> </span>
							</div>
						</div>

					</div>

					<Button size="sm" variant="primary" @click="handleForm"> 
						<span v-if="!editValue">
							{{ adding ? 'እየጨመረ ነው' : 'ጨምር' }} 
						</span>
						<span v-else>
							{{ updating ? 'እያስተካከለ ነው' : 'አስተካክል' }} 
						</span>
					</Button>
					<Alert
						v-if="successMessage"
						variant="success"
						:message="successMessage"
						:showLink="false"
					/>
					<Alert
						v-if="errorMessage"
						variant="warning"
						:message="errorMessage"
						:showLink="false"
					/>
				</ComponentCard>
			</div>

			<div class="lg:col-span-7 xl:col-span-8">
				<div class="app-table-wrap">
				<div class="max-w-full overflow-x-auto custom-scrollbar">


						<table class="app-table">
							<thead class="app-table-head">
								<tr>
									<th scope="col" class="px-6 py-3"> ስም </th>
									<th scope="col" class="px-6 py-3"> ክልል </th>
									<th scope="col" class="px-6 py-3"> ተግባር </th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="city in cities" class="app-table-row">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ city.name }}
									</th>
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ city?.region?.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editCity(city)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(city)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="city.name" @confirm="deleteCity()" />
	</AdminLayout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import Alert from '@/components/ui/Alert.vue'
import Button from '@/components/ui/Button.vue'
import axios from 'axios'

export default {
	data() {
		return {
			currentPageTitle: 'ዞንዎች',
			cities: [],
			city: {},
			name: '',
			region_id: null,
			adding: false,
			successMessage: '',
			errorMessage: '',
			editValue: null,
			updating: false,
			isModalOpen: false,

			regions: [],
		}
	},
	components: {AdminLayout,
		PageBreadcrumb,
		ComponentCard,
		Button,
		Alert,
		EmptyState,
		ConfirmDialog,
	},
	methods: {
		addCity() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'city', {
					name: this.name,
					region_id: this.region_id,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.region_id = null
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCities()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateCity() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'city/' + this.editValue, {
					name: this.name,
					region_id: this.region_id,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.region_id = null
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCities()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if(this.editValue) {
				this.updateCity()
			} else {
				this.addCity()
			}
		},
		loadCities() {
			axios
				.get(this.$store.state.apiServer + 'city')
				.then(response => {
					this.cities = response.data.data
				})
		},
		editCity(city) {
			this.editValue = city.id
			this.name = city.name
			this.region_id = city.region_id
		},
		confirmDelete(city) {
			this.city = city
			this.isModalOpen = true
		},
		deleteCity() {
			if(!this.city.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'city/' + this.city.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCities()
					this.isModalOpen = false
					this.city = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		loadRegions() {
			axios
				.get(this.$store.state.apiServer + 'region')
				.then(response => {
					this.regions = response.data.data
				})
		},
	},
	mounted() {
		this.loadCities()
		this.loadRegions()
	}
}

</script>