<template>
  <AdminLayoutMedical>

    <div class="flex">

      <div :class="[
        'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/3',
        className,
      ]">
        <!-- Card Header -->
        <div class="px-6 py-5">
          የታራሚው የህክምና መረጃ

        </div>

        <!-- Card Body -->
        <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div class="space-y-5">

            <div class="">
              <p class="text-base  text-blue-800 dark:text-white/90 w-96">
                <!-- {{ medicalInfo.disease_type.name }} -->
                <span class="font-bold mr-10 text-gray-800">የህመሙ አይነት : </span>
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90 w-96">
                <span class="font-bold mr-21 text-gray-800 e-40">የሆስፒታል ስም :</span> {{ medicalInfo.hospital_name }}
              </p>
            </div>
            <div class="mt-5">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90 w-96">
                <span class="font-bold mr-38 text-gray-800 w-96">የዶክተሩ ስም :</span>{{ medicalInfo.doctor_name }}
              </p>

              <p class="mt-5 text-sm text-blue-800 dark:text-white/90 w-96">
                <span class="font-bold mr-29 text-gray-800 w-96">የዶክተሩ አድራሻ :</span> {{ medicalInfo.doctor_address }}
              </p>
            </div>
            <div class="">
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90 w-96">
                <span class="font-bold mr-29 text-gray-800 w-96">የብር መጠን :</span> {{ medicalInfo.medical_expense }}
              </p>
            </div>
            <div class="">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90 w-96">
                <span class="font-bold mr-20 text-gray-800 w-96">ቀን</span>{{ medicalInfo.date }}
              </p>


            </div>
          </div>
        </div>

      </div>

      <div v-if="showPrisoinerInfo" :class="[
        'rounded-2xl ml-5 border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/2',
        className,
      ]">
        <!-- Card Body -->
      </div>

    </div>

  </AdminLayoutMedical>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminLayoutMedical from '@/components/layout/AdminLayoutMedical.vue';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';

const medicalInfo = ref([]);
const singlePrisioner = ref([])
const singlePrisionerInfo = ref([])
const showPrisoiner = ref(false)
const showPrisoinerInfo = ref(false)
const showMore = ref(false)
const fetchPrisioner = () => {
  axios.get('http://127.0.0.1:8000/api/prisoner').then((res) => {

    singlePrisionerInfo.value = res.data.Prisioner
    console.log('Prisioner Infro', singlePrisionerInfo.value)
  })
};
const fetchMedical = () => {
  axios.get('http://127.0.0.1:8000/api/medical').then((res) => {

    medicalInfo.value = res.data.data[0]
    console.log('med', medicalInfo.value)
  })
};

onMounted(() => {
  fetchPrisioner()
  fetchMedical()
});




</script>

<style></style>