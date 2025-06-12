<template>
  <AdminLayout>
    <div class="flex">

      <div :class="[
        'rounded-2xl border border-gray-200 px-3 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/2 mx-auto',
        className,
      ]">
        <!-- Card Header -->
        <div class="px-6 py-5">
          የታራሚው ንብረት
        </div>

        <!-- Card Body -->

        <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div class="space-y-5 px-20">

            <div class="">
              <p class="text-base  text-blue-800 dark:text-white/90">
                <span class="font-bold mr-11 text-gray-800">ቀን:</span>{{ matchedHistory.date }}
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-25 text-gray-800"> ብዛት :</span> {{ matchedHistory.amount }}
              </p>
            </div>
            <div class="mt-5">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-5 text-gray-800">ገቢ/ወጪ:</span>{{ matchedHistory.type }}
              </p>


            </div>


            <!--   
   <Button size="sm" variant="outline" @click="redirectToPrisionerCrime">የታራሚዉን ወንጀሎቺ ይመልከቱ </Button> -->
          </div>
        </div>

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
export default {
  components: {
    PageBreadcrumb,
    AdminLayout,
    Button,
    FlatPickr,
  },
  setup() {
    const PrisionerInfo = ref([]);
    const singlePrisioner = ref([])
    const singlePrisionerApperance = ref([])
    const showPrisoiner = ref(false)
    const showPrisoinerInfo = ref(false)
    const showMore = ref(false)
    const matchedHistory = ref([])
    const prisonerHistoryID = ref(null)
    // const fetchPrisioner = ()=>{
    //     axios.get('http://127.0.0.1:8000/api/prisioner').then((res)=>{

    //         PrisionerInfo.value = res.data.Prisioner
    //         console.log('Prisioner Infro',PrisionerInfo.value)
    //     })
    // };

    const fetchSinglePrisionerCash = (id) => {
      const priosoner_history_id = localStorage.getItem('priosoner_history_id')
      prisonerHistoryID.value = priosoner_history_id
      axios.get(`http://127.0.0.1:8000/api/Prisioners_cashe`).then((res) => {
        singlePrisioner.value = res.data.data
        console.log('single prisioner property', singlePrisioner.value)
        matchedHistory.value = singlePrisioner.value.find(item => item.prision_history_id == priosoner_history_id)
        console.log('matchedProperty', matchedHistory.value)
        if (matchedHistory) {
          singlePrisioner.value = matchedHistory
          console.log('single prisioner property', singlePrisioner.value)
        }
        console.log('prisioner', singlePrisioner.value)
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
    onMounted(() => {
      const prisoner_id = localStorage.getItem('priosoner_history_id')
      console.log('prisoner_history_id', localStorage.getItem('priosoner_history_id'))
      fetchSinglePrisionerCash()
      // fetchSinglePrisionerInfo(prisoner_id)
      //fetchPrisioner()

    });

    return {
      //fetchPrisioner,
      //PrisionerInfo,
      fetchSinglePrisionerCash,
      //fetchSinglePrisionerInfo,
      //singlePrisioner,
      //showPrisoiner,
      //showPrisoinerInfo,
      // singlePrisioner,
      matchedHistory,
      prisonerHistoryID
      //toggleShow,
      //showMore
    };

  }
}
</script>

<style></style>