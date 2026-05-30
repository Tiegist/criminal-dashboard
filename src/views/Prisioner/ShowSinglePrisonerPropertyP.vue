<template>
  <PoliceLayout>
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
                <span class="font-bold mr-11 text-gray-800">የንብረት አይነት :</span>{{ matchedHistory.type?.type }}
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-25 text-gray-800"> ብዛት :</span> {{ matchedHistory.amount }}
              </p>
            </div>
            <div class="mt-5">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-5 text-gray-800">እቃዉ የተመዘገበበት ቀን :</span>{{ matchedHistory.date_received }}
              </p>

              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-6 text-gray-800">እቃዉ የተመለሰበት ቀን :</span> {{ matchedHistory.date_returned }}
              </p>
            </div>
            <div class="">
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-28 text-gray-800">ገለጻ :</span> {{ matchedHistory.description }}
              </p>
            </div>


            <Button size="sm" variant="outline" @click="redirectToPrisionerCrime">የታራሚዉን ወንጀሎች ይመልከቱ </Button>
          </div>
        </div>

      </div>



    </div>
  </PoliceLayout>
</template>

<script>
import { ref, onMounted } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import PoliceLayout from '@/components/layout/PoliceLayout.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router'
export default {
  components: {
    PageBreadcrumb,
    PoliceLayout,
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
    //     axios.get('https://kalkidan.net:2083/api/prisioner').then((res)=>{

    //         PrisionerInfo.value = res.data.Prisioner
    //         console.log('Prisioner Infro',PrisionerInfo.value)
    //     })
    // };
    const redirectToPrisionerCrime = (id) => {
      localStorage.setItem('priosoner_history_id', prisonerHistoryID.value)
      router.push('/ShowSinglePrisonerCrimes')
    }
    const fetchSinglePrisionerApperance = (id) => {
      const priosoner_history_id = localStorage.getItem('priosoner_history_id')
      prisonerHistoryID.value = priosoner_history_id
      axios.get(`https://kalkidan.net:2083/api/prisionerProperty`).then((res) => {
        singlePrisioner.value = res.data.prisionerProperty
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
    // axios.get(`https://kalkidan.net:2083/api/prisionerapperance/`).then((res)=>{
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
      fetchSinglePrisionerApperance()
      // fetchSinglePrisionerInfo(prisoner_id)
      //fetchPrisioner()

    });

    return {
      //fetchPrisioner,
      //PrisionerInfo,
      fetchSinglePrisionerApperance,
      redirectToPrisionerCrime,
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