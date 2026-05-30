<template>
  <AdminLayout>
    <PageBreadcrumb pageTitleKey="pages.usersList" />

    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="app-page-title">{{ $t('pages.usersList') }}</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ users.length }} {{ $t('common.items') }}
        </p>
      </div>
    </div>

    <div class="app-table-wrap">
      <div class="max-w-full overflow-x-auto custom-scrollbar">
        <table class="app-table min-w-full">
          <thead class="app-table-head">
            <tr>
              <th class="px-5 py-3.5 text-left w-12">#</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.fullName') }}</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.username') }}</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.gender') }}</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.phone') }}</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.age') }}</th>
              <th class="px-5 py-3.5 text-left">{{ $t('staff.role') }}</th>
              <th class="px-5 py-3.5 text-right">{{ $t('common.action') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="users.length === 0">
              <td colspan="8" class="px-6 py-10">
                <EmptyState :title="$t('common.noData')" />
              </td>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id ?? index" class="app-table-row">
              <td class="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">{{ index + 1 }}</td>
              <td class="px-5 py-4 font-medium text-gray-800 dark:text-white/90">{{ user.full_name }}</td>
              <td class="px-5 py-4 text-gray-600 dark:text-gray-400">{{ user.user_name }}</td>
              <td class="px-5 py-4">
                <span class="app-badge-brand">{{ user.sex == 1 ? $t('staff.male') : $t('staff.female') }}</span>
              </td>
              <td class="px-5 py-4 text-gray-600 dark:text-gray-400">{{ user.phone_number }}</td>
              <td class="px-5 py-4 text-gray-600 dark:text-gray-400">{{ user.age }}</td>
              <td class="px-5 py-4">
                <span v-if="user.role == 1" class="app-badge-brand">{{ $t('dashboard.admin') }}</span>
                <span v-else-if="user.role == 2" class="app-badge-brand">{{ $t('dashboard.police') }}</span>
                <span v-else-if="user.role == 3" class="app-badge-brand">{{ $t('dashboard.guard') }}</span>
                <span v-else-if="user.role == 4" class="app-badge-success">{{ $t('dashboard.doctor') }}</span>
              </td>
              <td class="px-5 py-4">
                <div class="flex justify-end gap-3">
                  <button
                    type="button"
                    class="app-link-edit"
                    @click="router.push({ name: 'UserRegister', query: { user_id: user.id } })"
                  >
                    {{ $t('common.edit') }}
                  </button>
                  <button type="button" class="app-link-delete" @click="confirmDelete(user.id)">
                    {{ $t('common.delete') }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="links?.length" class="mt-6 flex justify-center">
      <div class="app-pagination">
        <span
          v-for="page in links"
          :key="page.label"
          @click="page.url && fetchUsers(page.url)"
          :class="[
            'app-pagination-item',
            page.url ? 'cursor-pointer app-pagination-inactive' : 'cursor-not-allowed opacity-40',
            page.active ? 'app-pagination-active' : '',
          ]"
          v-html="page.label"
        />
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import axios from 'axios'
import router from '@/router'
import { useStore } from 'vuex'

const store = useStore()
const apiServer = computed(() => store.state.apiServer)

const users = ref([])
const paginationInfo = ref({})
const links = computed(() => paginationInfo.value.links)

const fetchUsers = (url = '') => {
  paginationInfo.value = {}

  url = url === '' ? apiServer.value + 'users' : url

  axios.get(url).then((res) => {
    users.value = res.data.data.data
    paginationInfo.value = res.data.data
  })
}

const confirmDelete = (userId) => {
  const confirmed = window.confirm('Are you sure you want to delete this user?')
  if (confirmed) {
    axios
      .delete(`${apiServer.value}user/${userId}`)
      .then(() => {
        fetchUsers()
      })
      .catch((error) => {
        console.error('Error deleting user:', error)
        alert('Failed to delete user. Please try again.')
      })
  }
}

onMounted(() => fetchUsers())
</script>
