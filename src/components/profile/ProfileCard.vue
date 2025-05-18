<template>
  <div>
    <div class="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div class="flex flex-col items-center w-full gap-6 xl:flex-row">
          <div
            class="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800"
          >
            <img src="/images/user/owner.jpg" alt="user" />
          </div>
          <div class="order-3 xl:order-2">
            <h4
              class="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left"
            >
            
              {{ props.prisoner.first_name  + ' ' + props.prisoner.middle_name + ' ' + props.prisoner.last_name }}
            </h4>
            <div
              class="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ props.prisoner.sex  == 1 ? 'Male' : 'Female'  }}</p>
              <div class="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ props.prisoner.prisioner_unique_number }}</p>
            </div>
  
          </div>

          <div class="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-right">

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Mother Name
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.prisoner.mother_name }}</p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Date of Birth
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.prisoner.date_of_birth }}</p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Birth Destrict
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.prisoner.birth_district }}</p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Birth Town
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.prisoner?.birth_town?.name }}</p>
            </div>

            <div>
              <p class="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Ethnic Group
              </p>
              <p class="text-sm font-medium text-gray-800 dark:text-white/90">{{ props.prisoner?.ethnic_group?.name }}</p>
            </div>
          </div>
        </div>
        <button @click="addNewStory(props.prisoner.id)" class="edit-button absolute right-20">
          <svg
            class="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          አዲስ የወንጀል ታሪክ | ማህደር 
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'
import router from '@/router'

const isProfileInfoModal = ref(false)

const props = defineProps(['prisoner'])

const addNewStory = (prisoner_id) => {
  router.push({name: 'prisonerForm', query: {prisoner: prisoner_id}});
}


const saveProfile = () => {
  // Implement save profile logic here
  console.log('Profile saved')
  isProfileInfoModal.value = false
}
</script>
