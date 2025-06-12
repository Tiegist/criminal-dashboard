<template>
  <AdminLayout>
    <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="max-w-full overflow-x-auto custom-scrollbar">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class=" text-left w-1/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">-</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የእስረኛው ስም</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የህመሙ አይነት</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የሆስፒታሉ ስም</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የዶክተሩ ስም </p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የታከመበት ቀን </p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የዶክተሩ አድራሻ</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የብር መጠን</p>
              </th>
              <!-- <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">actions</p>
              </th> -->
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="(medical, index) in MedicalInfo" :key="index"
              class="border-t border-gray-100 dark:border-gray-800">
              <td class="sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ index + 1 }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400"><span class="ml-2">{{
                  MedicalInfo[0].prisoner_history.prisoner.first_name }}</span> <span class="ml-2">{{
                      MedicalInfo[0].prisoner_history.prisoner.middle_name }}</span> <span class="ml-2">{{
                      MedicalInfo[0].prisoner_history.prisoner.last_name }}</span> </p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.disease_type.name }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.hospital_name }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.doctor_name }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.date }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.doctor_address }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ medical.medical_expense }}</p>
              </td>
              <!-- <td class="px-5 py-4 sm:px-6">
                <a @click="fetchSingleMedicalInfo(medical.id)"
                  class="font-medium text-theme-sm text-green-600 dark:text-green-500 hover:underline cursor-pointer">ተጨማሪ
                </a>
                |
                <a
                  class="font-medium text-theme-sm text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">ያስተካክሉ</a>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex w-12/12 mx-auto">

      <div class="flex flex-wrap justify-center items-center mt-6 space-x-2">
        <span v-for="page in (links ?? [])" :key="page.label" @click="page.url && fetchMedical(page.url)" :class="['px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
          page.url ? 'cursor-pointer hover:bg-gray-700 hover:text-white' : 'cursor-not-allowed text-gray-500',
          page.active ? 'bg-teal-500 text-white' : 'text-gray-300 border border-gray-600'
        ]" v-html="page.label">
        </span>
      </div>


    </div>

  </AdminLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router'
import { useStore } from 'vuex';

const store = useStore();
const apiServer = computed(() => store.state.apiServer);

const MedicalInfo = ref([]);
const singlePrisioner = ref([])
const singleMedicalInfo = ref([])
const showPrisoiner = ref(false)
const showPrisoinerInfo = ref(false)
const showMore = ref(false)

const paginationInfo = ref({});
const links = computed(() => paginationInfo.value.links);

const fetchMedical = (url = '') => {
  paginationInfo.value = {}

  url = url === '' ? apiServer.value + 'medical' : url;

  axios.get(url).then((res) => {

    MedicalInfo.value = res.data.data.data
    paginationInfo.value = res.data.data;

  })
};


onMounted(() => {
  fetchMedical()
});




</script>

<style></style>