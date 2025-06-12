<template>
  <PoliceLayout>
    <div class="flex">

      <div :class="[
        'rounded-2xl border border-gray-200 px-3 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/2 mx-auto',
        className,
      ]">
        <!-- Card Header -->
        <div class="px-6 py-5">
          የታራሚው ገጽታ
        </div>

        <!-- Card Body -->

        <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div class="space-y-5 px-20">
            <div v-if="!isEditing">
              <div class="">
                <p class="text-base  text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-10 text-gray-800">የጸጉር አይነት :</span>{{ matchedHistory.hair?.name }}
                </p>
                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-18 text-gray-800"> አፍንጫ :</span> {{ matchedHistory.nose?.name }}
                </p>
              </div>
              <div class="mt-5">
                <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-23 text-gray-800">አይን:</span>{{ matchedHistory.eye?.name }}
                </p>

                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-22 text-gray-800">ጥርስ:</span> {{ matchedHistory.teeth?.name }}
                </p>
              </div>
              <div class="">
                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-20 text-gray-800">ክንፈር:</span> {{ matchedHistory.lip?.name }}
                </p>

                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-24 text-gray-800">ጆሮ:</span> {{ matchedHistory.ear?.name }}
                </p>
              </div>
              <div class="">
                <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-23 text-gray-800">ቁመት</span>{{ matchedHistory.height }}
                </p>
                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-16 text-gray-800"> የፊት ግጽታ :</span> {{ matchedHistory.face }}
                </p>
                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-22 text-gray-800"> ግንባር:</span> {{ matchedHistory.forehead }}
                </p>
              </div>
              <div class="">
                <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-16 text-gray-800"> ልዩ ምልክት :</span> {{ matchedHistory.unique_appearance }}
                </p>

                <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-15 text-gray-800 "> ተጨማሪ ገለጻ :</span> {{ matchedHistory.extra_description }}
                </p>
              </div>
              <div>
                <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                  <span class="font-bold mr-24 text-gray-800"> ዜግነት:</span> {{ matchedHistory.citizenship }}
                </p>
              </div>
              <Button size="sm" variant="outline" @click="isEditing = true">ያስተካክሉ </Button>
            </div>

            <div v-else>
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div class="space-y-4">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ቁመት </label>
                    <input type="text" v-model="editedAppearance.height" placeholder="ቁመት"
                      class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                  </div>
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> መልክ </label>
                    <input type="text" v-model="editedAppearance.face" placeholder="መልክ"
                      class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                  </div>
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ግንባር </label>
                    <input type="text" v-model="editedAppearance.forehead" placeholder=" ግንባር"
                      class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> አፍንጫ </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.nose_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="(nose, index) in noses" :key="index" :value="nose.id">{{ nose.name }}</option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>


                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> የጸጉር አይነት </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.hair_type_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="hair in hairs" :key="hair.id" :value="hair.id">{{ hair.name }}</option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>


                  <p class="text text-red-600"> {{ errorMessage }} </p>
                  <!-- <button :class="[
        'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
        sizeClasses[size],
        variantClasses[variant],
        className,
        { 'cursor-not-allowed opacity-50': disabled },
      ]" @click="registereditedAppearance" :disabled="disabled">
        <span v-if="startIcon" class="flex items-center"> </span>
        {{ !saving ? 'Save & Continue' : 'Saving...' }}
        <span v-if="endIcon" class="flex items-center">

        </span>
      </button> -->

                </div>
                <div class="space-y-4">
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> የአይኑ ቀለም </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.eye_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="(eye, index) in eyes" :key="index" :value="eye.id">{{ eye.name }}</option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>


                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ጥርስ </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.teeth_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="(teeth, index) in teeths" :key="index" :value="teeth.id">{{ teeth.name }}
                        </option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ከንፈር </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.lip_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="(lip, index) in lips" :key="index" :value="lip.id">{{ lip.name }}</option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>


                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ልዩ ምልክት </label>
                    <input type="text" v-model="editedAppearance.unique_appearance" placeholder="  ልዩ ምልክት "
                      class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                  </div>

                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ዜግነት </label>
                    <input type="text" v-model="editedAppearance.citizenship" placeholder="ዜግነት"
                      class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                  </div>

                </div>
                <div class="space-y-4">


                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ጆሮ </label>
                    <div class="relative z-20 bg-transparent">
                      <select v-model="editedAppearance.ear_id"
                        class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                        <option v-for="(ear, index) in ears" :key="index" :value="ear.id">{{ ear.name }}</option>
                      </select>
                      <span
                        class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ተጨማሪ ገለጻ </label>
                    <textarea type="text" :rows="10" v-model="editedAppearance.extra_description"
                      placeholder="extra_description"
                      class="dark:bg-dark-900 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"></textarea>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" @click="saveChanges">ይመዝግቡ </Button>
              <Button size="sm" variant="outline" @click="isEditing = false">ያጥፉ </Button>
            </div>
            <Button size="sm" variant="outline" @click="redirectToPrisionerProperty">የታራሚዉን ንብረት ይመልከቱ </Button>
          </div>
        </div>

      </div>



    </div>
  </PoliceLayout>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import PoliceLayout from '@/components/layout/PoliceLayout.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router'
import { useStore } from 'vuex';
export default {
  components: {
    PageBreadcrumb,
    PoliceLayout,
    Button,
    FlatPickr,
  },
  setup() {
    const store = useStore();
    const apiServer = computed(() => store.state.apiServer);
    const PrisionerInfo = ref([]);
    const singlePrisioner = ref([])
    const singlePrisionerApperance = ref([])
    const showPrisoiner = ref(false)
    const showPrisoinerInfo = ref(false)
    const showMore = ref(false)
    const matchedHistory = ref([])
    const prisonerHistoryID = ref(null)
    const isEditing = ref(false);
    const editedAppearance = ref({});
    const noses = ref([])
    const hairs = ref([])
    const eyes = ref([])
    const teeths = ref([])
    const lips = ref([])
    const ears = ref([])
    // const fetchPrisioner = ()=>{
    //     axios.get('http://127.0.0.1:8000/api/prisioner').then((res)=>{

    //         PrisionerInfo.value = res.data.Prisioner
    //         console.log('Prisioner Infro',PrisionerInfo.value)
    //     })
    // };
    const redirectToPrisionerProperty = (id) => {
      localStorage.setItem('priosoner_history_id', prisonerHistoryID.value)
      router.push('/ShowSinglePrisonerProperty')
    }
    const fetchSinglePrisionerApperance = (id) => {
      const priosoner_history_id = localStorage.getItem('priosoner_history_id')
      prisonerHistoryID.value = priosoner_history_id
      console.log('prisonerHistoryID', prisonerHistoryID.value)
      axios.get(`http://127.0.0.1:8000/api/prisionerapperance`).then((res) => {
        singlePrisioner.value = res.data.prisionerApperance
        console.log('single prisioner apperance', singlePrisioner.value)
        matchedHistory.value = singlePrisioner.value.find(item => item.prision_history_id == priosoner_history_id)
        console.log('matchedApperacne', matchedHistory.value)
        if (matchedHistory) {
          singlePrisioner.value = matchedHistory
          console.log('single prisioner apperance', singlePrisioner.value)
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
    const saveChanges = () => {
      axios.put(`http://127.0.0.1:8000/api/prisionerapperance/${matchedHistory.value.id}`, editedAppearance.value)
        .then(() => {
          matchedHistory.value = editedAppearance.value; // Update displayed data
          isEditing.value = false; // Exit edit mode
        })
        .catch(error => {
          console.error("ገጽታዉን ማስተካክል ላይ ስህተት አለ!", error);
        });
    };
    const fetchhair = async () => { axios.get(apiServer.value + 'hair').then(response => { hairs.value = response.data.data; }) }
    const fetchEye = async () => { axios.get(apiServer.value + 'eye').then(response => { eyes.value = response.data.data; }) }
    const fetchTeeth = async () => { axios.get(apiServer.value + 'teeth').then(response => { teeths.value = response.data.data; }) }
    const fetchLip = async () => { axios.get(apiServer.value + 'lip').then(response => { lips.value = response.data.data; }) }
    const fetchEar = async () => { axios.get(apiServer.value + 'ear').then(response => { ears.value = response.data.data; }) }
    const fetchNose = async () => { axios.get(apiServer.value + 'nose').then(response => { noses.value = response.data.data; }) }

    onMounted(() => {
      const prisoner_id = localStorage.getItem('priosoner_history_id')
      console.log('prisoner_history_id', localStorage.getItem('priosoner_history_id'))
      fetchSinglePrisionerApperance()
      // fetchSinglePrisionerInfo(prisoner_id)
      //fetchPrisioner()

      fetchhair();
      fetchNose();
      fetchEye();
      fetchTeeth();
      fetchLip();
      fetchEar();

    });

    return {
      //fetchPrisioner,
      //PrisionerInfo,
      fetchSinglePrisionerApperance,
      //fetchSinglePrisionerInfo,
      //singlePrisioner,
      //showPrisoiner,
      //showPrisoinerInfo,
      singlePrisioner,
      matchedHistory,
      redirectToPrisionerProperty,
      editedAppearance,
      saveChanges,
      isEditing,
      hairs,
      noses,
      eyes,
      teeths,
      lips,
      ears,

      fetchhair,
      fetchEye,
      fetchTeeth,
      fetchLip,
      fetchEar,
      fetchNose,



      //toggleShow,
      //showMore
    };

  }
}
</script>

<style></style>