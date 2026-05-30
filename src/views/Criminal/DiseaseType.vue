<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="የበሽታ አይነት መጨመሪያ እና ማሻሻያ">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								የበሽታ አይነት
							</label>
							<input type="text" v-model="name" placeholder="የበሽታ አይነት ያስገቡ "
								class="app-input" />
						</div>
					</div>

					<Button size="sm" variant="primary" @click="handleForm">
						<span v-if="!editValue">
							{{ adding ? 'እየጨመሩ ነው...' : 'ይጨምሩ' }}
						</span>
						<span v-else>
							{{ updating ? 'እያስተካከሉ ነው...' : 'ያስተካክሉ' }}
						</span>
					</Button>
					<Alert v-if="successMessage" variant="success" :message="successMessage" :showLink="false" />
					<Alert v-if="errorMessage" variant="warning" :message="errorMessage" :showLink="false" />
				</ComponentCard>
			</div>

			<div class="lg:col-span-7 xl:col-span-8">
				<div class="app-table-wrap">
				<div class="max-w-full overflow-x-auto custom-scrollbar">


						<table class="app-table">
							<thead class="app-table-head">
								<tr>
									<th scope="col" class="px-6 py-3">
										ስም
									</th>
									<th scope="col" class="px-6 py-3">
										ድርጊቶች
									</th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="disease_type in disease_types" :key="disease_type.key"
									class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ disease_type.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editDiseaseType(disease_type)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(disease_type)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="disease_type.name" @confirm="deleteDiseaseType()" />
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
			currentPageTitle: 'የበሽታ አይነት',
			disease_types: [],
			disease_type: {},
			name: '',
			adding: false,
			successMessage: '',
			errorMessage: '',
			editValue: null,
			updating: false,
			isModalOpen: false,
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
		addDiseaseType() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'disease-type', {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadDiseaseTypes()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateDiseaseType() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'disease-type/' + this.editValue, {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadDiseaseTypes()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if (this.editValue) {
				this.updateDiseaseType()
			} else {
				this.addDiseaseType()
			}
		},
		loadDiseaseTypes() {
			axios
				.get(this.$store.state.apiServer + 'disease-type')
				.then(response => {
					this.disease_types = response.data.data
				})
		},
		editDiseaseType(disease_type) {
			this.editValue = disease_type.id
			this.name = disease_type.name
		},
		confirmDelete(disease_type) {
			this.disease_type = disease_type
			this.isModalOpen = true
		},
		deleteDiseaseType() {
			if (!this.disease_type.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'disease-type/' + this.disease_type.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadDiseaseTypes()
					this.isModalOpen = false
					this.disease_type = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		}
	},
	mounted() {
		this.loadDiseaseTypes()
	}
}

</script>