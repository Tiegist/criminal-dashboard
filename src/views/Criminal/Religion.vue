<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="የሀይማኖቶች መጨመሪያ እና ማሻሻያ">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								ሀይማኖት
							</label>
							<input type="text" v-model="name" placeholder="ሀይማኖት ያስገቡ"
								class="app-input" />
						</div>

						<div>
							<label class="app-label">
								ኮድ
							</label>

							<input type="text" v-model="code" placeholder="ኮድ ያስገቡ"
								class="app-input" />
						</div>

					</div>

					<Button size="sm" variant="primary" @click="handleForm">
						<span v-if="!editValue">
							{{ adding ? 'እያስገቡ ነዉ ' : 'ያስገቡ ' }}
						</span>
						<span v-else>
							{{ updating ? 'እያስተካከሉ ነው ' : 'ያስተካክሉ ' }}
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
									<th scope="col" class="px-6 py-3"> ስም </th>
									<th scope="col" class="px-6 py-3"> ኮድ </th>
									<th scope="col" class="px-6 py-3"> ድርጊቶቸ </th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="religion in religions"
									class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ religion.name }}
									</th>
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ religion.code }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editReligion(religion)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(religion)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="religion.name" @confirm="deleteReligion()" />
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
			currentPageTitle: 'ሀይማኖቶች',
			religions: [],
			religion: {},
			name: '',
			code: '',
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
		addReligion() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'religion', {
					name: this.name,
					code: this.code,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.code = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadReligions()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateReligion() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'religion/' + this.editValue, {
					name: this.name,
					code: this.code,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.code = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadReligions()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if (this.editValue) {
				this.updateReligion()
			} else {
				this.addReligion()
			}
		},
		loadReligions() {
			axios
				.get(this.$store.state.apiServer + 'religion')
				.then(response => {
					this.religions = response.data.data
				})
		},
		editReligion(religion) {
			this.editValue = religion.id
			this.name = religion.name
			this.code = religion.code
		},
		confirmDelete(religion) {
			this.religion = religion
			this.isModalOpen = true
		},
		deleteReligion() {
			if (!this.religion.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'religion/' + this.religion.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadReligions()
					this.isModalOpen = false
					this.religion = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		}
	},
	mounted() {
		this.loadReligions()
	}
}

</script>