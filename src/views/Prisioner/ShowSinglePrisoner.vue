<template>
    <AdminLayout>
<div class="flex">

<div 

  :class="[
    'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/2 mx-auto',
    className,
  ]"
>
  <!-- Card Header -->
  <div class="px-6 py-5">
  የታራሚው ተጨማሪ መረጃ 
  </div>

  <!-- Card Body -->
   <img :src="matchedHistory.photo" alt="no image">
  <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
    <div class="space-y-5">
      
    <div class="">
      <p class="text-base  text-blue-800 dark:text-white/90">
    <span class="font-bold mr-30 text-gray-800">የቅርብ ተጠሪ :</span>{{ matchedHistory.closest_respondent }}
      </p>
      <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
     <span class="font-bold mr-17 text-gray-800">  የቅርብ ተጠሪ መኖሪያ ከተማ :</span> {{ matchedHistory.closest_respondent_town?.name }}
    </p>
  </div>
  <div class="mt-5">
     <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
   <span class="font-bold mr-19 text-gray-800">የቅርብ ተጠሪ መኖሪያ ቀበሌ :</span>{{ matchedHistory.closest_respondent_district }}
     </p>

     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-27 text-gray-800">የእስረኛዉ አይነት  :</span> {{ matchedHistory.criminal_type?.name }}
     </p>
    </div>
    <div class="">
     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-28 text-gray-800">አሁን የሚኖርበት ዞን:</span> {{ matchedHistory.current_city?.name }}
     </p>

     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
 <span class="font-bold mr-25 text-gray-800">አሁን የሚኖርበት ቀበሌ:</span>  {{ matchedHistory.current_district }}
     </p>
    </div>
    <div class="">
     <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
    <span class="font-bold mr-20 text-gray-800">በምህረት የተፈታበት ቀን</span>{{ matchedHistory.date_of_mercy_release }}
     </p>
     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
    <span class="font-bold mr-39 text-gray-800"> እስራቱን ጨርሶ የሚፈታበት ቀን:</span>  {{ matchedHistory.date_of_release }}
     </p>
     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
    <span class="font-bold mr-39 text-gray-800"> የታሰረበት ቀን:</span>  {{ matchedHistory.date_time_entered }}
     </p>
    </div>
    <div class="">
     <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
    <span class="font-bold mr-34 text-gray-800"> የትምህርት ደረጃ :</span>  {{ matchedHistory.educational_level?.name }}
     </p>

     <p  class="mt-5 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-22 text-gray-800"> የእስር ቅጣቱ ያለቀበት ቀን:</span>  {{ matchedHistory.end_date_of_arrest }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-22 text-gray-800"> ብሄር :</span>  {{ matchedHistory.ethnic_group?.name }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-49 text-gray-800">ስራ :</span>  {{ matchedHistory.job }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-42 text-gray-800"> የቤት ስልክ:</span>  {{ matchedHistory.mobile_number }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-38 text-gray-800">ሞባይል ስልክ:</span>  {{ matchedHistory.phone_number }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-22 text-gray-800"> የእስረኛው የመቆያ ክፍል :</span>  {{ matchedHistory.prision_cell_id }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-22 text-gray-800"> የመፈቻ ምክንያት :</span>  {{ matchedHistory.release_reason }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-42 text-gray-800"> ሀይማኖት :</span>  {{ matchedHistory.religion?.name }}
     </p>
   </div>
   <div>
    <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-26 text-gray-800"> መረጃዉን የሞላዉ ፖሊስ :</span>  {{ matchedHistory.user?.user_name }}
     </p>
   </div>
   <div>
    <!-- <p  class="mt-1 text-sm text-blue-800 dark:text-white/90">
      <span class="font-bold mr-22 text-gray-800"> ብሄር :</span>  {{ matchedHistory.verdict_court?.name }}
     </p> -->
   </div>
   <Button size="sm" variant="outline" @click="fetchmatchedHistoryInfo(matchedHistory.id)">ተጨማሪ መረጃ ይመልከቱ </Button>
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
export default {
    components: {
    PageBreadcrumb,
    AdminLayout,
    Button,
    FlatPickr,
  },
  setup(){
    const PrisionerInfo = ref([]);
    const singlePrisioner = ref([])
    const singlePrisionerApperance = ref([])
    const showPrisoiner = ref(false)
    const showPrisoinerInfo = ref(false)
    const showMore = ref(false)
    const matchedHistory = ref([])
    // const fetchPrisioner = ()=>{
    //     axios.get('http://127.0.0.1:8000/api/prisioner').then((res)=>{
            
    //         PrisionerInfo.value = res.data.Prisioner
    //         console.log('Prisioner Infro',PrisionerInfo.value)
    //     })
    // };
    const fetchmatchedHistoryInfo = (id)=>{
      localStorage.setItem('priosoner_history_id',id)
      router.push('/ShowSinglePrisonerApperance')
    }
    const fetchSinglePrisionerInfo = (id)=>{
      const prisoner_id =  localStorage.getItem('prisoner_id')
axios.get(`http://127.0.0.1:8000/api/prision-history`).then((res)=>{
  singlePrisioner.value = res.data.data
  console.log('single prisioner info',singlePrisioner.value)
  matchedHistory.value = singlePrisioner.value.find(item=>item.prisioner_id== prisoner_id)
  console.log('matchedHistory',matchedHistory.value)
  if(matchedHistory){
    singlePrisioner.value = matchedHistory
    console.log('single prisioner',singlePrisioner.value )
  }
  console.log('prisioner',singlePrisioner.value)
  //localStorage.setItem('prisoner_id',res.data.Prisioner.id)
  // console.log('single prisioner',singlePrisioner.value )
  showPrisoiner.value = true
  //fetchSinglePrisionerInfo(id)
})
    };
//     const fetchSinglePrisionerApperance = (id)=>{
//     const prisoner_id =  localStorage.getItem('prisoner_id')
//    // const prisioner_history_id = localStorage.getItem('prisioner_history_id')
//       console.log('prisoner_id',prisoner_id)
//       console.log('prisioner_history_id',prisioner_history_id)
// axios.get(`http://127.0.0.1:8000/api/prisionerapperance/`).then((res)=>{
//   singlePrisionerApperance.value = res.data.prisionerApperance
//  const mathedApperance =  singlePrisioner.value.find(item=>item.prisioner_history_id == prisioner_history_id)
//   console.log('single prisioner',singlePrisioner.value )
//   if(mathedApperance){
//     singlePrisioner.value = mathedApperance
//     console.log('single prisioner',singlePrisioner.value )
//   }

 
//   console.log('single prisioner info',singlePrisionerApperance.value)
//  // showPrisoinerInfo.value = true
// })
//     };
    // const toggleShow = ()=>{
    //   showMore.value = !showMore.value
    // }
    onMounted(()=>{
     const prisoner_id = localStorage.getItem('prisoner_id')
        console.log('prisoner_id',localStorage.getItem('prisoner_id'))
        fetchSinglePrisionerInfo()
       // fetchSinglePrisionerInfo(prisoner_id)
        //fetchPrisioner()
      
    });
    
    return {
//fetchPrisioner,
//PrisionerInfo,
fetchSinglePrisionerInfo,
//fetchSinglePrisionerInfo,
//singlePrisioner,
//showPrisoiner,
//showPrisoinerInfo,
singlePrisioner,
matchedHistory,
fetchmatchedHistoryInfo

//toggleShow,
//showMore
};
  
}
}
</script>

<style>

</style>