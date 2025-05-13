<template>
  <div>
    <div class="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 mt-6">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">Appearance</h4>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Citizenship</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.citizenship }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Face</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.face }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">forehead</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.forehead }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">height</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.height }} </p>
            </div>
        
            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">ear</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.ear.name }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">eye</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.eye.name }} </p>
            </div>


            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">nose</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.nose.name }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">teeth</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.teeth.name }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">hair</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.hair.name }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">lip</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.lip.name }} </p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">unique Appearance</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.unique_appearance }} </p>
            </div>
            

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Extra Description</p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90"> {{ props.history.prisoner_apperance.extra_description }} </p>
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
