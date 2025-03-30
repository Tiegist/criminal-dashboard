<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
      <div class="flex w-full">
      <div class="w-1/2 mr-10">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የእስረኛው ሁኔታ 
        </label>
        <div class="relative z-20 bg-transparent">
          <select
            v-model="crimes.status"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }"
          >
            <option value="" disabled selected></option>
            <option v-for="criminalStatu in criminalStatus" :key="criminalStatu.id" :value="criminalStatu.id">{{ criminalStatu.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>


<div class="w-1/2 mr-10">
      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
        የወንጀሉ አይነት
      </label>
      <div class="relative z-20 bg-transparent">
        <select
          v-model="crimes.crime_id"
          class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          :class="{ 'text-gray-800 dark:text-white/90': selectInput }"
        >
          <option value="" disabled selected></option>
          <option v-for="crimes in crimess" :key="crimes.id" :value="crimes.id">{{ crimes.name }}</option>
        </select>
        <span
          class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
        >
          <svg
            class="stroke-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
              stroke=""
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>

      <div class="w-1/2 mr-10">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የወንጀሉ ገለጻ
        </label>
        <input
          type="text"
         v-model="crimes.crime_description"
       
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
  <div class="ml-40">
    <div class="ml-96 mt-6">
      <Button
        :size="size"
        :variant="variant"
        :startIcon="startIcon"
        :endIcon="endIcon"
        :className="customClass"
        :disabled="isDisabled"
        @click="submitData"
      >
        Next
      </Button>
    </div>
  </div>
  </AdminLayout>
</template>
<script>
import { ref, onMounted } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
// import { Script } from 'vm';

export default {
  components: {
    PageBreadcrumb,
    AdminLayout,
    Button,
    FlatPickr,
  },
  setup() {
    const crimes = ref({
      status: '',
      crime_id: '',
      crime_description: null,
      prision_history_id: localStorage.getItem('prisioner_history_id')

    });

    const crimess = ref([]);
    const criminalStatus = ref([]);


    const currentPageTitle = ref('crime');
    const date = ref(null);
    const flatpickrConfig = {
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'F j, Y',
      wrap: true,
    };

    const fetchCriminalStatus = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/criminal-status');
        criminalStatus.value = response.data;
        console.log('criminalStatus', criminalStatus.value);
      } catch (error) {
        console.error('Error fetching criminalStatus type data', error);
      }
    };
    const fetchcrime = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/crime');
        crimess.value = response.data.data;
        console.log('crimes', crimess.value);
      } catch (error) {
        console.error('Error fetching crimes type data', error);
      }
    };
const submitData = async () => {
  const formData = new FormData();
  

  Object.entries(crimes.value).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/Prisioner_crime', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('response', response);
  //   localStorage.setItem('cashtype_id', response.data.data.id);
    // Navigate to the next page
    // Use this.$router.push('/criminalinfo') inside a component or use a router instance
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

onMounted(() => {

  fetchCriminalStatus();
  fetchcrime();
});

return {
  currentPageTitle,
  date,
  flatpickrConfig,
  submitData,
  criminalStatus,
  crimess,
  crimes
};
}
}
</Script>