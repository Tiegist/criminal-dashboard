<template>
  <div class="w-1/3 mx-auto mt-10">
    <div class="flex">
      <img src="/criminallogo.png" alt="" class="w-1/2 mx-auto">
      <h1 class="text-center text-2xl font-bold text-gray-800 dark:text-white/90 mt-20">የእስረኞቺ የየቀን መቆጣጠሪያ</h1>
    </div>
    <div class="flex">
      <div class="w-1/2 mr-10 flex">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 mr-3">ቀን</label>
        <div class="relative">
          <flat-pickr
            v-model="date"
            :config="flatpickrConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="ቀን ይምረጡ"
          />
        </div>
      </div>
      <div class="mr-10 flex">
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 mr-3">ሰአት</label>
        <div class="relative z-20 bg-transparent">
          <select v-model="time"  class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option value="" disabled selected></option>
            <option value="1">ጠዋት</option>
            <option value="2">ቀን</option>
          </select>
        </div>
      </div>
    </div>
    <div v-for="prison in prisoners" :key="prison.id" class="mt-10 w-1/3 mx-auto">
      <div class="flex">
        <ol class="mr-10">{{ prison.first_name }} {{ prison.middle_name }} {{ prison.last_name }}</ol>
        <input type="checkbox" v-model="prison.checked">
      </div>
    </div>
    <button @click="submitAttendance" class="ml-40 mt-10 mx-auto inline-flex items-center bg-teal-600 justify-center font-medium px-10 text-white py-2 gap-2 rounded-lg transition" :disabled="!isFormValid">
      ይመዝግቡ 
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    flatPickr
  },
  data() {
    return {
      prisoners: [],
      date: null,
      time: null,
      status: null,
      flatpickrConfig: {
        dateFormat: 'Y-m-d',
        altInput: true,
        altFormat: 'F j, Y',
        wrap: true,
      },
    };
  },
  mounted() {
    this.getAllPrisoners();
  },
  computed: {
    isFormValid() {
      return this.date && this.time;
    }
  },
  methods: {
   getAllPrisoners() {
      axios.get('http://127.0.0.1:8000/api/prisoner').then((res) => {
        this.prisoners = res.data.Prisioner.map(prison => ({ ...prison, checked: false }));
        console.log('prisoners', this.prisoners);
      });
    },
  
  submitAttendance() {
    const attendanceData = this.prisoners.map(prison => ({
      date: this.date,
      status: prison.checked ? 1 : 2, // 1 if present, 2 if absent
      time: parseInt(this.time) ,
      prisioner_id: prison.id,
    }));
    console.log('Attendance data:', attendanceData);
try {
     axios.post(`http://127.0.0.1:8000/api/attendance`, attendanceData)
  .then(response => {
    console.log('Attendance updated:', response.data);
  })
  }catch (error) {
    console.error('Error submitting attendance:', error);
  }
}
}
}
</script>

<style>
/* Add any necessary styles here */
</style>


