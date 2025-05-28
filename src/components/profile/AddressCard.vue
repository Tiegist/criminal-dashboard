<template>
  <div>
    <div class="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">Address</h4>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Current District</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.current_district }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Current City/State</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">
                {{ props.history.current_city.name }}
              </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Closeset Correspondent City
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.history.closest_respondent_town.name }}</p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Closeset Correspondent District
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.history.closest_respondent_district }}</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const isProfileAddressModal = ref(false)

const props = defineProps(['history'])

const saveProfile = () => {
  // Implement save profile logic here
  console.log('Profile saved')
  isProfileInfoModal.value = false
}
</script>

<style></style>
