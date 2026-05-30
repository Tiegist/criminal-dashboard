<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="ፍርድ ቤቶች">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								ፍርድ ቤቶች 
							</label>
							<input type="text" v-model="name" placeholder="ይፍርድ ቤት ስም ያስገቡ"
								class="app-input" />
						</div>
					</div>

					<Button size="sm" variant="primary" @click="handleForm"> 
						<span v-if="!editValue">
							{{ adding ? 'በማስገባት ላይ' : 'አስገባ' }} 
						</span>
						<span v-else>
							{{ updating ? 'በማስተካከል ላይ' : 'አስተካክል' }} 
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
									<th scope="col" class="px-6 py-3">
										ስም
									</th>
									<th scope="col" class="px-6 py-3">
										
									</th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="court in courts" :key="court.key" class="app-table-row">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ court.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editCourt(court)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(court)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="court.name" @confirm="deleteCourt()" />
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
			currentPageTitle: 'ፍርድ ቤቶች',
			courts: [],
			court: {},
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
		addCourt() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'court', {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCourt()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateCourt() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'court/' + this.editValue, {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCourt()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if(this.editValue) {
				this.updateCourt()
			} else {
				this.addCourt()
			}
		},
		loadCourt() {
			axios
				.get(this.$store.state.apiServer + 'court')
				.then(response => {
					this.courts = response.data.data
				})
		},
		editCourt(court) {
			this.editValue = court.id
			this.name = court.name
		},
		confirmDelete(court) {
			this.court = court
			this.isModalOpen = true
		},
		deleteCourt() {
			if(!this.court.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'court/' + this.court.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCourt()
					this.isModalOpen = false
					this.court = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		}
	},
	mounted() {
		this.loadCourt()
	}
}

</script>