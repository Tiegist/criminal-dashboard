<template>
	<AdminLayout>
		<PageBreadcrumb pageTitleKey="pages.Crimes" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard :title="$t('pages.Crimes')">
					<div>
						<label class="app-label">{{ $t('pages.Crimes') }}</label>
						<input type="text" v-model="name" :placeholder="$t('placeholders.enterCrimeType')" class="app-input" />
					</div>
					<Button size="sm" variant="primary" @click="handleForm" class="mt-4">
						<span v-if="!editValue">{{ adding ? $t('common.submitting') : $t('common.submit') }}</span>
						<span v-else>{{ updating ? $t('common.updating') : $t('common.update') }}</span>
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
									<th scope="col" class="px-6 py-3.5">{{ $t('common.name') }}</th>
									<th scope="col" class="px-6 py-3.5 text-right">{{ $t('common.action') }}</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="crimes.length === 0">
									<td colspan="2" class="px-6 py-10"><EmptyState :title="$t('common.noData')" /></td>
								</tr>
								<tr v-for="crime in crimes" :key="crime.key" class="app-table-row">
									<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ crime.name }}</th>
									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editcrime(crime)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(crime)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="crime.name" @confirm="deletecrime()" />
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
			crimes: [],
			crime: {},
			name: '',
			adding: false,
			successMessage: '',
			errorMessage: '',
			editValue: null,
			updating: false,
			isModalOpen: false,
		}
	},
	components: { AdminLayout, PageBreadcrumb, ComponentCard, EmptyState, ConfirmDialog, Alert, Button },
	methods: {
		addcrime() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios.post(this.$store.state.apiServer + 'crime', { name: this.name })
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadcrime()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updatecrime() {
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios.put(this.$store.state.apiServer + 'crime/' + this.editValue, { name: this.name })
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadcrime()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			this.editValue ? this.updatecrime() : this.addcrime()
		},
		loadcrime() {
			axios.get(this.$store.state.apiServer + 'crime').then(response => { this.crimes = response.data.data })
		},
		editcrime(crime) {
			this.editValue = crime.id
			this.name = crime.name
		},
		confirmDelete(crime) {
			this.crime = crime
			this.isModalOpen = true
		},
		deletecrime() {
			if (!this.crime.hasOwnProperty('id')) return
			axios.delete(this.$store.state.apiServer + 'crime/' + this.crime.id)
				.then(response => {
					this.successMessage = response.data.message
					setTimeout(() => this.successMessage = '', 4000)
					this.loadcrime()
					this.isModalOpen = false
					this.crime = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
	},
	mounted() { this.loadcrime() },
}
</script>
