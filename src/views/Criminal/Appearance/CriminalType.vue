<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="የእስረኛ አይነቶች">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								የእስረኛ አይነቶች 
							</label>
							<input type="text" v-model="name" placeholder="የእስረኛ አይነቶች"
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
										ተግባር
									</th>

								</tr>
							</thead>
							<tbody>
								<tr v-for="criminal_type in criminal_types" :key="criminal_type.key" class="app-table-row">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ criminal_type.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editCriminalType(criminal_type)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(criminal_type)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="criminal_type.name" @confirm="deleteCriminalType()" />
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
			currentPageTitle: 'የእስረኛ አይነቶች',
			criminal_types: [],
			criminal_type: {},
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
		addCriminalType() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'criminalType', {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCriminalType()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateCriminalType() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'criminalType/' + this.editValue, {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCriminalType()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if(this.editValue) {
				this.updateCriminalType()
			} else {
				this.addCriminalType()
			}
		},
		loadCriminalType() {
			axios
				.get(this.$store.state.apiServer + 'criminalType')
				.then(response => {
					this.criminal_types = response.data.data
				})
		},
		editCriminalType(criminal_type) {
			this.editValue = criminal_type.id
			this.name = criminal_type.name
		},
		confirmDelete(criminal_type) {
			this.criminal_type = criminal_type
			this.isModalOpen = true
		},
		deleteCriminalType() {
			if(!this.criminal_type.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'criminalType/' + this.criminal_type.id)
				.then(response => {
					this.successMessage = response.data.message
                    // console.log('hairtype',this.response.data.data[0])
					setTimeout(() => this.successMessage = '', 4000)
					this.loadCriminalType()
					this.isModalOpen = false
					this.criminal_type = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		}
	},
	mounted() {
		this.loadCriminalType()
	}
}

</script>