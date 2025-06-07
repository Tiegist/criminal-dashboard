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
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Total Deposit</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Total Withdraw</p>
              </th>
              <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Current Balance</p>
              </th>

            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="(hist, index) in cashHistory" :key="index" class="border-t border-gray-100 dark:border-gray-800">
              <td class="sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ index + 1 }}</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400"><span class="ml-2">{{ hist.name }} </span>
                </p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ hist.total_deposit }} ETB</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ hist.total_withdrawal }} ETB</p>
              </td>
              <td class="px-5 py-4 sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ hist.balance }} ETB </p>
              </td>

              <!-- <td class="px-5 py-4 sm:px-6">
                <a @click="fetchSinglecashHistory(medical.id)"
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

const cashHistory = ref([]);
const singlePrisioner = ref([])
const singlecashHistory = ref([])
const showPrisoiner = ref(false)
const showPrisoinerInfo = ref(false)
const showMore = ref(false)


const fetchCashHistory = (url = '') => {

  url = url === '' ? apiServer.value + 'prisoner-cash-total' : url;

  axios.get(url).then((res) => {

    cashHistory.value = res.data.data

  })
};


onMounted(() => {
  fetchCashHistory()
});




</script>

<style></style>