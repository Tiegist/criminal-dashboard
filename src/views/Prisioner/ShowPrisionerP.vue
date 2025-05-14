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
                    
										<a class="font-medium text-theme-sm text-red-600 dark:text-red-500 hover:underline cursor-pointer">ያጥፉ</a>
									</td>
         
          </tr>
        </tbody>
      </table>
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