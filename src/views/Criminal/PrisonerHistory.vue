<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="flex w-full ">
      <div class="w-1/2 mr-10 ">
        <label class="app-label">
          የእስረኛው የመቆያ ክፍል
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.prision_cell_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="prisonerCell in prisonerCells" :key="prisonerCell.id" :value="prisonerCell.id">{{
              prisonerCell.name }}</option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <div class="w-1/2">
        <label class="app-label">
          የእስረኛው አይነት
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.criminal_type_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="criminalType in criminalTypes" :key="criminalType.id" :value="criminalType.id">{{
              criminalType.name }}</option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- ///// -->
    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          አሁን የሚኖርበት ዞን
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.current_city_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="City in Cities" :key="City.id" :value="City.id">{{ City.name }}</option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <div class="w-1/2">
        <label class="app-label">
          የትምርት ደረጃ
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.educational_level_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="education in educations" :key="education.id" :value="education.id">{{ education.name }}
            </option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <!-- ////////////// -->
    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          ሀይማኖት
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.religion_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="religion in religions" :key="religion.id" :value="religion.id">{{ religion.name }}</option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div class="w-1/2 ">
        <label class="app-label">
          የቅርብ ተጠሪ
        </label>
        <input type="text" v-model="histories.closest_respondent"
          class="app-input" />
      </div>


    </div>

    <div class="flex w-full mt-5">

      <div class="w-1/2 mr-10">
        <label class="app-label">
          የቅርብ ተጠሪ መኖሪያ ከተማ
        </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="histories.closest_respondent_town_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            :class="{ 'text-gray-800 dark:text-white/90': selectInput }">
            <option value="" disabled selected></option>
            <option v-for="town in towns" :key="town.id" :value="town.id">{{ town.name }}</option>

          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <div class="w-1/2">
        <label class="app-label">
          የቅርብ ተጠሪ መኖሪያ ቀበሌ
        </label>
        <input type="text" v-model="histories.closest_respondent_district"
          class="app-input" />
      </div>
    </div>

    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          የታሰረበት ቀን
        </label>
        <div class="relative">
          <flat-pickr v-model="histories.date_time_entered" :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="Select date" />
          <span
            class="absolute text-gray-500 cursor-pointer -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
            <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill="" />
            </svg>
          </span>
        </div>
      </div>

      <div class="w-1/2">
        <label class="app-label">
          ፎቶ ያስገቡ
        </label>
        <input @change="handlePhoto" accept="image/*" type="file"
          class="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400" />
      </div>

    </div>

    <div class="flex w-full mt-5">



      <div class="w-1/2 mr-10">
        <label class="app-label">
          እስራቱን ጨርሶ የሚፈታበት ቀን
        </label>
        <div class="relative">
          <flat-pickr v-model="histories.date_of_release" :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="Select date" />
          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
            <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill="" />
            </svg>
          </span>
        </div>
      </div>
      <div class="w-1/2 ">
        <label class="app-label">
          ስራ
        </label>
        <input type="text" v-model="histories.job"
          class="app-input" />
      </div>
      <!-- ///////// -->
    </div>
    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          አሁን የሚኖርበት ቀበሌ
        </label>
        <input type="text" v-model="histories.current_district"
          class="app-input" />
      </div>
      <!-- ///// -->
      <div class="w-1/2">
        <label class="app-label">
          ሞባይል ስልክ
        </label>
        <div class="relative">
          <input v-model="histories.phone_number" placeholder="ሞባይል ስልክ (e.g., 555-000-0000)" type="tel"
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>
      </div>


    </div>
    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          የመፈቻ ምክንያት
        </label>
        <input type="text" v-model="histories.release_reason"
          class="app-input" />
      </div>


      <!-- ///// -->
      <div class="w-1/2">
        <label class="app-label">
          የቤት ስልክ
        </label>
        <div class="relative">
          <input v-model="histories.mobile_number" placeholder="የቤት ስልክ (e.g., 555-000-0000)" type="tel"
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>
      </div>

    </div>
    <div class="flex w-full mt-5">
      <div class="w-1/2 mr-10">
        <label class="app-label">
          በምህረት የሚፈታበት ቀን
        </label>
        <div class="relative">
          <flat-pickr v-model="histories.date_of_mercy_release" :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="Select date" />
          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
            <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill="" />
            </svg>
          </span>
        </div>
      </div>
      <div class="w-1/2 ">
        <label class="app-label">
          የእስር ቅጣቱ ያለቀበት ቀን
        </label>
        <div class="relative">
          <flat-pickr v-model="histories.end_date_of_arrest" :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="Select date" />
          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
            <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill="" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="">
      <div class="ml-56 mt-6">
        <Button :size="size" :variant="variant" :startIcon="startIcon" :endIcon="endIcon" :className="customClass"
          :disabled="isDisabled" @click="submitData">
          ይቀጥሉ
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
import router from '@/router'
// import { Script } from 'vm';

export default {
  components: {
    PageBreadcrumb,
    AdminLayout,
    Button,
    FlatPickr,
  },
  setup() {
    const histories = ref({
      prisioner_id: localStorage.getItem('prisoner_id'),
      photo: null,
      prision_cell_id: null,
      criminal_type_id: null,
      current_city_id: null,
      educational_level_id: null,
      religion_id: null,
      closest_respondent: '',
      closest_respondent_town_id: null,
      current_district: '',
      closest_respondent_district: '',
      job: '',
      phone_number: '',
      mobile_number: '',
      date_time_entered: '',
      end_date_of_arrest: '',
      date_of_release: '',
      release_reason: '',
      date_of_mercy_release: '',
      user_id: localStorage.getItem('user_id'),

    });

    const educations = ref([]);
    const criminalTypes = ref([]);
    const Cities = ref([]);
    const towns = ref([]);
    const religions = ref([]);
    const prisonerCells = ref([]);

    const currentPageTitle = ref('የእስረኛው መረጃ');
    const date = ref(null);
    const flatpickrConfig = {
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'F j, Y',
      wrap: true,
    };

    const fetchEducations = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/education');
        educations.value = response.data.data;
        console.log('education', educations.value);
      } catch (error) {
        console.error('Error fetching education data', error);
      }
    };

    const fetchCriminalType = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/criminalType');
        criminalTypes.value = response.data.data;
        console.log('criminal type', criminalTypes.value);
      } catch (error) {
        console.error('Error fetching criminal type data', error);
      }
    };

    const fetchCity = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/city');
        Cities.value = response.data.data;
        console.log('city', Cities.value);
      } catch (error) {
        console.error('Error fetching city data', error);
      }
    };

    const fetchTowns = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/town');
        towns.value = response.data.data;
        console.log('town', towns.value);
      } catch (error) {
        console.error('Error fetching towns:', error);
      }
    };

    const fetchReligion = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/religion');
        religions.value = response.data.data;
        console.log('religion', religions.value);
      } catch (error) {
        console.error('የሃይማኖት ውሂብ ማምጣት ላይ ስህተት', error);
      }
    };
    const fetchPrisonerCell = async () => {
      try {
        const response = await axios.get('https://kalkidan.net:2083/api/prisonerCell');
        prisonerCells.value = response.data.data;
        console.log('criminal cell', religions.value);
      } catch (error) {
        console.error('የወንጀል ሕዋስ ውሂብ ማምጣት ላይ ስህተት', error);
      }
    };

    const handlePhoto = (event) => {
      const file = event.target.files[0];
      if (file) {
        histories.value.photo = file;
        console.log('photo', histories.value.photo);
      }
    };

    const submitData = async () => {
      const formData = new FormData();


      Object.entries(histories.value).forEach(([key, value]) => {
        formData.append(key, value);
      });


      if (histories.value.photo) {
        formData.append('photo', histories.value.photo);
      }

      try {
        const response = await axios.post('https://kalkidan.net:2083/api/prision-history', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('response', response);
        localStorage.setItem('prisioner_history_id', response.data.data.id);
        router.push('/PrisonerCrimes')
      } catch (error) {
        console.error('ውሂብ ማስገባት ላይ ስህተት!', error);
      }
    };

    onMounted(() => {
      fetchEducations();
      fetchCriminalType();
      fetchCity();
      fetchTowns();
      fetchReligion();
      fetchPrisonerCell();
    });

    return {
      histories,
      educations,
      criminalTypes,
      Cities,
      towns,
      religions,
      currentPageTitle,
      date,
      flatpickrConfig,
      handlePhoto,
      submitData,
      prisonerCells,


    };
  }
}
</Script>