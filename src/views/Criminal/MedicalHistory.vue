<template>
    <AdminLayoutMedical>
      <PageBreadcrumb :pageTitle="currentPageTitle" />
        <div class="flex w-full">
        <div class="w-1/2 mr-10">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የህመሙ አይነት 
          </label>
          <div class="relative z-20 bg-transparent">
            <select
              v-model="medical.disease_type_id"
              class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              :class="{ 'text-gray-800 dark:text-white/90': selectInput }"
            >
              <option value="" disabled selected></option>
              <option v-for="diseaseType in diseaseTypes" :key="diseaseType.id" :value="diseaseType.id">{{ diseaseType.name }}</option>
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
            የሆስፒታል ስም
          </label>
          <input
            type="text"
           v-model="medical.hospital_name"
         
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
        </div>
    </div>
  

  
      <div class="flex w-full mt-5">
        <div class="w-1/2 mr-10">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
        ቀን 
        </label>
        <div class="relative">
          <flat-pickr
    
          v-model="medical.date"
            :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="ቀን ይምረጡ"
          />
          <span
            class="absolute text-gray-500 cursor-pointer -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
          >
            <svg
              class="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="w-1/2 mr-10">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የዶክተሩ ስም 
          </label>
          <input
            type="text"
           v-model="medical.doctor_name"
         
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
        </div>
      </div>

      <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የዶክተሩ አድራሻ 
          </label>
          <input
            type="text"
           v-model="medical.doctor_address"
         
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
        </div>

        <div class="w-1/2 mr-10">
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የብር መጠን
          </label>
          <input
            type="number"
           v-model="medical.medical_expense"
         
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
          />
        </div>
    </div>
    <div class="">
      <div class=" mt-6">
        <Button
        class="w-1/7"
          :size="size"
          :variant="variant"
          :startIcon="startIcon"
          :endIcon="endIcon"
          :className="customClass"
          :disabled="isDisabled"
          @click="submitData"
        >
        ይቀጥሉ
        </Button>
      </div>
    </div>
    </AdminLayoutMedical>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
  import AdminLayoutMedical from '@/components/layout/AdminLayoutMedical.vue';
  import Button from '@/components/ui/Button.vue';
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import axios from 'axios';
  // import { Script } from 'vm';
  
  export default {
    components: {
      PageBreadcrumb,
      AdminLayoutMedical,
      Button,
      FlatPickr,
    },
    setup() {
      const medical = ref({
        user_id: localStorage.getItem('user_id'),
        disease_type_id: null,
        hospital_name: '',
        doctor_name: '',
        date: '',
        doctor_address: '',
        medical_expense: '',
        prision_history_id: 3
  
      });
  
      const diseaseTypes = ref([]);

      const currentPageTitle = ref('የእስረኞች የህክምና መረጃ ቅጽ');
      const date = ref(null);
      const flatpickrConfig = {
        dateFormat: 'Y-m-d',
        altInput: true,
        altFormat: 'F j, Y',
        wrap: true,
      };
  
      const fetchDiseasetype = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/disease-type');
          diseaseTypes.value = response.data.data;
          console.log('diseaseType', diseaseTypes.value);
        } catch (error) {
          console.error('Error fetching disease type data', error);
        }
      };
  const submitData = async () => {
    const formData = new FormData();
    
  
    Object.entries(medical.value).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/medical', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response', response);
      // localStorage.setItem('cashtype_id', response.data.data.id);
      // Navigate to the next page
      // Use this.$router.push('/criminalinfo') inside a component or use a router instance
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  onMounted(() => {
    fetchDiseasetype();

  });
  
  return {
    currentPageTitle,
    date,
    flatpickrConfig,
    submitData,
    diseaseTypes,
    medical
  };
  }
  }
  </Script>