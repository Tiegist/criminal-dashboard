<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="ወረዳዎችን መቆጣጠር">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								የወረዳ ስም
							</label>
							<input type="text" v-model="name" placeholder="Enter Town Name"
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

						<div v-if="region_id">
							<label class="app-label">
								ዞን ምረጥ
							</label>
							<div class="relative z-20 bg-transparent">
								<select
									v-model="city_id"
									class="app-select"
									:class="{ 'text-gray-800 dark:text-white/90': true }"
									>
									
									<option v-for="city in cities.filter(c => c.region_id == region_id)"  :value="city.id" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
										{{ city.name }}
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
									<th scope="col" class="px-6 py-3"> ዞን </th>
									<th scope="col" class="px-6 py-3"> ተግባር </th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="town in towns" class="app-table-row">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ town.name }}
									</th>
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ town?.city?.region?.name }}
									</th>

									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ town?.city?.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editTown(town)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(town)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="town.name" @confirm="deleteTown()" />
	</AdminLayout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import ComponentCard from '@/components/common/ComponentCard.vue'
import Alert from '@/components/ui/Alert.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import axios from 'axios'

export default {
	data() {
		return {
			currentPageTitle: 'ወረዳ',
			towns: [],
			town: {},
			name: '',
			city_id: null,
			region_id: null,
			adding: false,
			successMessage: '',
			errorMessage: '',
			editValue: null,
			updating: false,
			isModalOpen: false,

			regions: [],
			cities: [],
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
		addTown() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'town', {
					name: this.name,
					city_id: this.city_id,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.region_id = null
					this.city_id = null
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadTowns()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateTown() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'town/' + this.editValue, {
					name: this.name,
					city_id: this.city_id,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.region_id = null
					this.city_id = null
					this.city_id = null
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadTowns()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if(this.editValue) {
				this.updateTown()
			} else {
				this.addTown()
			}
		},
		loadTowns() {
			axios
				.get(this.$store.state.apiServer + 'town')
				.then(response => {
					this.towns = response.data.data
				})
		},
		editTown(town) {
			this.editValue = town.id
			this.name = town.name
			this.region_id = town?.city?.region_id
			this.city_id = town.city_id
		},
		confirmDelete(town) {
			this.town = town
			this.isModalOpen = true
		},
		deleteTown() {
			if(!this.town.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'town/' + this.town.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadTowns()
					this.isModalOpen = false
					this.town = {}
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
		loadCities() {
			axios
				.get(this.$store.state.apiServer + 'city')
				.then(response => {
					this.cities = response.data.data
				})
		},
	},
	mounted() {
		this.loadTowns()
		this.loadRegions()
		this.loadCities()
	}
}

</script>