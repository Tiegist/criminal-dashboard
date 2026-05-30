<template>
  <div class="mx-auto max-w-4xl space-y-6">
    <LoadingState v-if="loading" />

    <template v-else-if="!isProfileInfoModal">
      <!-- Hero card -->
      <div class="app-card overflow-hidden p-0">
        <div class="relative h-36 overflow-hidden bg-gradient-to-br from-brand-700 via-brand-500 to-brand-400 sm:h-44">
          <div class="absolute inset-0 opacity-20"
            style="background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px); background-size: 24px 24px;" />
          <div class="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div class="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-brand-300/30 blur-2xl" />
        </div>

        <div class="relative px-6 pb-8 pt-0">
          <div class="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:gap-8">
            <div
              class="-mt-16 flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-brand-50 shadow-theme-lg dark:border-gray-900 dark:bg-brand-500/10 sm:-mt-20 sm:h-32 sm:w-32">
              <img v-if="users.photo" :src="photoUrl" :alt="users.full_name" class="h-full w-full object-cover" />
              <span v-else class="text-3xl font-bold text-brand-600 dark:text-brand-400">{{ initials }}</span>
            </div>

            <div class="flex-1 pb-1 text-center sm:text-left">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ users.full_name || '—' }}
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">@{{ users.user_name || '—' }}</p>
              <div class="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span class="app-badge-brand">{{ roleLabel }}</span>
                <span v-if="users.age" class="app-badge bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  {{ users.age }} {{ $t('profile.age') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div class="app-card p-6 md:p-8">
        <h3 class="app-page-title mb-6">{{ $t('profile.accountDetails') }}</h3>
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div v-for="field in detailFields" :key="field.key"
            class="group flex gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-colors duration-200 hover:border-brand-200 hover:bg-brand-50/30 dark:border-gray-800 dark:bg-white/[0.02] dark:hover:border-brand-500/30 dark:hover:bg-brand-500/5">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-theme-xs dark:bg-gray-900 dark:text-brand-400">
              <component :is="field.icon" class="h-5 w-5" />
            </div>
            <div class="min-w-0 flex-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {{ field.label }}
              </dt>
              <dd class="mt-0.5 truncate text-sm font-semibold text-gray-900 dark:text-white/90">
                {{ field.value || '—' }}
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <!-- Contact -->
      <div class="app-card p-6 md:p-8">
        <h3 class="app-page-title mb-6">{{ $t('profile.contactInfo') }}</h3>
        <div
          class="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-5 dark:border-gray-800 dark:bg-white/[0.02]">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.772v2.25z" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {{ $t('profile.phone') }}
            </p>
            <p class="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">{{ users.phone_number || '—' }}</p>
          </div>
        </div>
      </div>
    </template>

    <!-- Edit form (preserved for future use) -->
    <div v-else class="app-card relative p-6 md:p-8">
      <button type="button" @click="isProfileInfoModal = false"
        class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h4 class="mb-6 text-xl font-semibold text-gray-800 dark:text-white/90">{{ $t('profile.editTitle') }}</h4>

      <form @submit.prevent>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label class="app-label">{{ $t('profile.fullName') }}</label>
            <input type="text" v-model="info.full_name" class="app-input" />
          </div>
          <div>
            <label class="app-label">{{ $t('profile.age') }}</label>
            <input type="text" v-model="info.age" class="app-input" />
          </div>
          <div>
            <label class="app-label">{{ $t('profile.username') }}</label>
            <input type="text" v-model="info.user_name" class="app-input" />
          </div>
          <div>
            <label class="app-label">{{ $t('profile.phone') }}</label>
            <input type="text" v-model="info.phone_number" class="app-input" />
          </div>
          <div class="sm:col-span-2">
            <label class="app-label">{{ $t('profile.role') }}</label>
            <input type="text" v-model="info.role" class="app-input" />
          </div>
        </div>
        <div class="mt-6 flex flex-wrap justify-end gap-3">
          <button type="button" class="app-btn app-btn-secondary" @click="isProfileInfoModal = false">
            {{ $t('common.cancel') }}
          </button>
          <button type="button" class="app-btn app-btn-primary" @click="saveProfile">
            {{ $t('common.save') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, h } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import LoadingState from '@/components/common/LoadingState.vue'

const { t } = useI18n()

const isProfileInfoModal = ref(false)
const loading = ref(true)
const users = ref({})
const roles = ref([])
const info = reactive({
  full_name: '',
  role: null,
  phone_number: '',
  user_name: '',
  age: null,
  sex: '',
})

const photoUrl = computed(() =>
  users.value.photo ? `https://kalkidan.net:2083/${users.value.photo}` : '',
)

const initials = computed(() => {
  const name = users.value.full_name || ''
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return '?'
})

const roleLabel = computed(() => {
  const roleMap = {
    1: t('profile.roles.admin'),
    2: t('profile.roles.police'),
    3: t('profile.roles.guard'),
    4: t('profile.roles.doctor'),
  }
  return roleMap[users.value.role] || '—'
})

const IconUser = () =>
  h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    }),
  ])

const IconAt = () =>
  h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25',
    }),
  ])

const IconBadge = () =>
  h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    }),
  ])

const IconCalendar = () =>
  h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    }),
  ])

const detailFields = computed(() => [
  { key: 'name', label: t('profile.fullName'), value: users.value.full_name, icon: IconUser },
  { key: 'username', label: t('profile.username'), value: users.value.user_name, icon: IconAt },
  { key: 'role', label: t('profile.role'), value: roleLabel.value, icon: IconBadge },
  { key: 'age', label: t('profile.age'), value: users.value.age, icon: IconCalendar },
])

const saveProfile = async () => {
  const userData = {
    full_name: info.full_name,
    role: info.role,
    phone_number: info.phone_number,
    user_name: info.user_name,
    age: info.age,
    sex: info.sex,
  }

  try {
    const response = await axios.post('https://kalkidan.net:2083/api/user', userData, {
      headers: { 'Content-Type': 'application/json' },
    })
    console.log('Profile saved', response.data)
    isProfileInfoModal.value = false
    fetchUser()
  } catch (error) {
    console.error(' መገለጫ ማስቀመጥ ላይ ስህተት ስላለ እባክዎ እንደገና ይሞክሩ', error)
  }
}

const fetchUser = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://kalkidan.net:2083/api/user')
    users.value = response.data
  } catch (error) {
    console.error('የተጠቃሚ መረጃ ማምጣት ላይ ስህተት', error)
  } finally {
    loading.value = false
  }
}

const fetchRole = async () => {
  try {
    const response = await axios.get('https://kalkidan.net:2083/api/user-role')
    roles.value = response.data
  } catch (error) {
    console.error('Error fetching roles', error)
  }
}

onMounted(() => {
  fetchUser()
  fetchRole()
})
</script>
