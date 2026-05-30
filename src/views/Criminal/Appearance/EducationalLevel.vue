<template>
	<AdminLayout>
		<PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5 xl:col-span-4">
				<ComponentCard title="የትምህርት ደረጃ">
					<div class="space-y-6">
						<div>
							<label class="app-label">
								የትምህርት ደረጃ 
							</label>
							<input type="text" v-model="name" placeholder="የትምህርት ደረጃ ያስገቡ"
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
								<tr v-for="educational_level in educational_levels" :key="educational_level.key" class="app-table-row">
									<th scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{{ educational_level.name }}
									</th>

									<td class="px-6 py-4">
										<div class="flex justify-end gap-3">
											<button type="button" @click="editEducationalLevel(educational_level)" class="app-link-edit">{{ $t('common.edit') }}</button>
											<button type="button" @click="confirmDelete(educational_level)" class="app-link-delete">{{ $t('common.delete') }}</button>
										</div>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>
		<ConfirmDialog v-model="isModalOpen" :item-name="educational_level.name" @confirm="deleteEducationalLevel()" />
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
			currentPageTitle: 'የትምህርት ደረጃ',
			educational_levels: [],
			educational_level: {},
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
		addEducationalLevel() {
			this.adding = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.post(this.$store.state.apiServer + 'education', {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.adding = false
					setTimeout(() => this.successMessage = '', 4000)
					this.loadEducationalLevel()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.adding = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		updateEducationalLevel() {
			this.adding = false
			this.updating = true
			this.successMessage = ''
			this.errorMessage = ''
			axios
				.put(this.$store.state.apiServer + 'education/' + this.editValue, {
					name: this.name,
				})
				.then(response => {
					this.successMessage = response.data.message
					this.name = ''
					this.updating = false
					this.editValue = null
					setTimeout(() => this.successMessage = '', 4000)
					this.loadEducationalLevel()
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					this.updating = false
					setTimeout(() => this.errorMessage = '', 4000)
				})
		},
		handleForm() {
			if(this.editValue) {
				this.updateEducationalLevel()
			} else {
				this.addEducationalLevel()
			}
		},
		loadEducationalLevel() {
			axios
				.get(this.$store.state.apiServer + 'education')
				.then(response => {
					this.educational_levels = response.data.data
				})
		},
		editEducationalLevel(educational_level) {
			this.editValue = educational_level.id
			this.name = educational_level.name
		},
		confirmDelete(educational_level) {
			this.educational_level = educational_level
			this.isModalOpen = true
		},
		deleteEducationalLevel() {
			if(!this.educational_level.hasOwnProperty('id')) return

			axios
				.delete(this.$store.state.apiServer + 'education/' + this.educational_level.id)
				.then(response => {
					this.successMessage = response.data.message
                    // console.log('hairtype',this.response.data.data[0])
					setTimeout(() => this.successMessage = '', 4000)
					this.loadEducationalLevel()
					this.isModalOpen = false
					this.educational_level = {}
				})
				.catch(error => {
					this.errorMessage = error.response.data.message
					setTimeout(() => this.errorMessage = '', 4000)
				})
		}
	},
	mounted() {
		this.loadEducationalLevel()
	}
}

</script>