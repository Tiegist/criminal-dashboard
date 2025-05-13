<template>
  <AdminLayout>
    <div
    class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"
  >
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th class="px-5 py-3 text-left w-3/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">ስም </p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የአባት ስም </p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የአያት ስም </p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">የ/ወ/መ/ፍ/ቁጥር</p>
            </th>
            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">actions</p>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr
            v-for="(user, index) in PrisionerInfo"
            :key="index"
            class="border-t border-gray-100 dark:border-gray-800"
          >
          <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.first_name }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.middle_name }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.last_name }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.prisioner_unique_number }}</p>
            </td>
            <td class="px-5 py-4 sm:px-6">
										<a @click="fetchSinglePrisioner(user.id)" class="font-medium text-theme-sm text-green-600 dark:text-green-500 hover:underline cursor-pointer">ተጨማሪ </a>
                    |
										<a class="font-medium text-theme-sm text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">ያስተካክሉ</a>
										|
										<a class="font-medium text-theme-sm text-red-600 dark:text-red-500 hover:underline cursor-pointer">ያጥፉ</a>
									</td>
         
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex w-12/12 mx-auto">

    <div 
  v-if="showPrisoiner"
      :class="[
        'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/3 mx-auto',
        className,
      ]"
    >
      <!-- Card Header -->
      <div class="px-6 py-5">
       የታራሚው ዝርዝር መረጃ 
  
      </div>
  
      <!-- Card Body -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div class="space-y-5">
          
        <div class="">
          <p class="text-base  text-blue-800 dark:text-white/90">
        <span class="font-bold mr-10 text-gray-800">የማረ/ቤት መ/መ/ቁጥር : </span>{{ singlePrisioner.prisioner_unique_number }}
          </p>
          <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
         <span class="font-bold mr-21 text-gray-800">የ/ወ/መ/ፍ/ቁጥር :</span> {{ singlePrisioner.prision_unique_number }}
        </p>
      </div>
      <div class="mt-5">
         <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
       <span class="font-bold mr-38 text-gray-800">ስም :</span>{{ singlePrisioner.first_name }}
         </p>
  
         <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
          <span class="font-bold mr-29 text-gray-800">የአባት ስም  :</span> {{ singlePrisioner.middle_name }}
         </p>
        </div>
        <div class="">
         <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
          <span class="font-bold mr-29 text-gray-800">የአያት ስም :</span> {{ singlePrisioner.last_name }}
         </p>
  
         <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
     <span class="font-bold mr-29 text-gray-800">የእናት ስም :</span>  {{ singlePrisioner.mother_name }}
         </p>
        </div>
        <div class="">
         <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
        <span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀን</span>{{ singlePrisioner.date_of_birth }}
         </p>
  
         <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
        <span class="font-bold mr-39 text-gray-800"> ጾታ :</span>  {{ singlePrisioner.sex }}
         </p>
        </div>
        <div class="">
         <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
        <span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀበሌ :</span>  {{ singlePrisioner.birth_district }}
         </p>
  
         <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
          <span class="font-bold mr-17 text-gray-800">የተወለደበት ከተማ :</span>  {{ singlePrisioner.birth_town.name }}
         </p>
       </div>
       <div>
        <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
          <span class="font-bold mr-37 text-gray-800"> ብሄር :</span>  {{ singlePrisioner.ethnic_group?.name }}
         </p>
       </div>
       <div class="flex">
        <div>
          <Button size="sm" variant="outline" @click="fetchSinglePrisionerInfo(singlePrisioner.id)">ተጨማሪ መረጃ ይመልከቱ </Button>
        </div>
        <div>
          <Button size="sm" variant="outline" @click="fetchSinglePrisionerInfo(singlePrisioner.id)">መረጃ ያስተካክሉ</Button>
        </div>
       </div>
        </div>
      </div>
    
    </div>

   
    
    </div>

  </AdminLayout>
</template>

<script >
import { ref, onMounted } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router'
import { useRoute, useRouter } from 'vue-router';

export default {
    components: {
    PageBreadcrumb,
    AdminLayout,
    Button,
    FlatPickr,
  },
  setup(){
    const route = useRoute();

    const PrisionerInfo = ref([]);
    const singlePrisioner = ref([])
    const singlePrisionerInfo = ref([])
    const showPrisoiner = ref(false)
    const showPrisoinerInfo = ref(false)
    const showMore = ref(false)
    const fetchPrisioner = ()=>{
        axios.get('http://127.0.0.1:8000/api/prisoner').then((res)=>{
            
            PrisionerInfo.value = res.data.Prisioner
            console.log('Prisioner Infro',PrisionerInfo.value)
        })
    };
    const fetchSinglePrisioner = (prisoner_id)=>{

      router.push({name: 'ShowSinglePrisoner', query: { prisoner: prisoner_id }});
    // axios.get(`http://127.0.0.1:8000/api/prisioner/${prisoner_id}`).then((res)=>{
    //   singlePrisioner.value = res.data.Prisioner
    //   console.log('prisioner_id',res.data.Prisioner.id)
    //   localStorage.setItem('prisoner_id',res.data.Prisioner.id)
    //   console.log('single prisioner',singlePrisioner.value )
    //   showPrisoiner.value = true
    //   //fetchSinglePrisionerInfo(id)
    // })

    };
    const fetchSinglePrisionerInfo = (id)=>{
      localStorage.setItem('prisoner_id',id)
    router.push('/ShowSinglePrisoner')
//       console.log('prisoner_id',prisoner_id)
// axios.get(`http://127.0.0.1:8000/api/prision-history/${prisoner_id}`).then((res)=>{
//   singlePrisionerInfo.value = res.data.data
//   console.log('single prisioner info',singlePrisionerInfo.value)
//   showPrisoinerInfo.value = true
// })
    };
    const toggleShow = ()=>{
      showMore.value = !showMore.value
    }
    onMounted(()=>{
        fetchPrisioner()
        //fetchSinglePrisioner()
    });
    
    return {
fetchPrisioner,
PrisionerInfo,
fetchSinglePrisioner,
fetchSinglePrisionerInfo,
singlePrisioner,
showPrisoiner,
showPrisoinerInfo,
singlePrisionerInfo,
toggleShow,
showMore
};
  
}
}
</script>

<style>

</style>