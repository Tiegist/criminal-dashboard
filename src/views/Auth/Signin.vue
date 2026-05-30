<template>
  <FullScreenLayout>
    <div class="absolute top-6 right-6 z-20">
      <LanguageSwitcher />
    </div>
    <div class="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div
        class="relative flex flex-col justify-center w-full min-h-screen lg:flex-row dark:bg-gray-900"
      >
        <div class="flex flex-col flex-1 w-full lg:w-1/2">
          <div class="flex flex-col justify-center flex-1 w-full max-w-md px-6 mx-auto py-10">
            <div class="mb-8 sm:mb-10">
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white/90 sm:text-3xl">
                {{ $t('auth.signIn') }}
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ $t('auth.signInSubtitle') }}
              </p>
            </div>
            <form @submit.prevent="handleSubmit">
              <div class="space-y-5">
                <div>
                  <label for="username" class="app-label">
                    {{ $t('auth.username') }}<span class="text-error-500">*</span>
                  </label>
                  <input
                    v-model="username"
                    type="text"
                    id="username"
                    name="username"
                    :placeholder="$t('auth.usernamePlaceholder')"
                    class="app-input"
                  />
                </div>
                <div>
                  <label for="password" class="app-label">
                    {{ $t('auth.password') }}<span class="text-error-500">*</span>
                  </label>
                  <div class="relative">
                    <input
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      id="password"
                      :placeholder="$t('auth.passwordPlaceholder')"
                      class="app-input pr-11"
                    />
                    <span
                      @click="togglePasswordVisibility"
                      class="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400"
                    >
                      <svg v-if="!showPassword" class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z" fill="#98A2B3"/>
                      </svg>
                      <svg v-else class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709Z" fill="#98A2B3"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <label for="keepLoggedIn" class="flex items-center text-sm font-normal text-gray-700 cursor-pointer select-none dark:text-gray-400">
                    <div class="relative">
                      <input v-model="keepLoggedIn" type="checkbox" id="keepLoggedIn" class="sr-only" />
                      <div
                        :class="keepLoggedIn ? 'border-brand-500 bg-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'"
                        class="mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"
                      >
                        <span :class="keepLoggedIn ? '' : 'opacity-0'">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                    {{ $t('auth.keepLoggedIn') }}
                  </label>
                  <router-link to="/reset-password" class="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400">
                    {{ $t('auth.forgotPassword') }}
                  </router-link>
                </div>
                <div>
                  <p v-if="message" class="mb-3 text-sm text-error-500">{{ message }}</p>
                  <button type="submit" class="app-btn-primary w-full" :disabled="loading">
                    {{ !loading ? $t('auth.signIn') : $t('common.signingIn') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="relative items-center hidden w-full min-h-screen lg:w-1/2 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 dark:from-brand-900 dark:to-gray-900 lg:grid">
          <div class="flex items-center justify-center z-1">
            <CommonGridShape />
            <div class="flex flex-col items-center max-w-xs px-6">
              <router-link to="/" class="block mb-6">
                <img width="231" height="48" src="../../assets/criminallogo.png" alt="Logo" />
              </router-link>
              <p class="text-center text-2xl font-semibold text-white/80 sm:text-3xl">
                {{ $t('app.name') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FullScreenLayout>
</template>

<script>
import axios from 'axios'
import CommonGridShape from '@/components/common/CommonGridShape.vue'
import FullScreenLayout from '@/components/layout/FullScreenLayout.vue'
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'

export default {
  data() {
    return {
      username: 'admin@criminal.com',
      password: 'password',
      showPassword: false,
      keepLoggedIn: false,
      loading: false,
      message: '',
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    handleSubmit() {
      this.loading = true
      this.message = ''
      axios.post(this.$store.state.apiServer + 'login', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        let token = response.data.token
        let user_id = response.data.user_id
        let role = response.data.role
        localStorage.setItem('token', token)
        localStorage.setItem('user_id', user_id)
        localStorage.setItem('role', role)
        
        this.applyHeader(token,role)
      })
      .catch(error => {
        this.loading = false
        this.message = error.response.data.message
      })
    },
    applyHeader(token,role) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.defaults.withCredentials = true
if(role === 1){
  this.$router.push({ name: 'Dashboard'})
}
else if(role === 2){
  this.$router.push({ name: 'ProfileP'})
   }
    else if(role === 3){
      this.$router.push({ name: 'prisonerAttendance'})
    }
    else if(role === 4){
      this.$router.push({ name: 'ProfileD'})
    }
  },
  },
  components: { 
    CommonGridShape,
    FullScreenLayout,
    LanguageSwitcher,
  },
  mounted() {
    this.$store.dispatch('applyHeader')
  }
}
</script>
