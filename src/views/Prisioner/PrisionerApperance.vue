<template>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div class="space-y-6">
          <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ቁመት
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.height"
          placeholder="ቁመት"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          መልክ
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.face"
          placeholder="መልክ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
         ግንባር 
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.forehead"
          placeholder=" ግንባር"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          አፍንጫ
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.nose_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>አፍንጫ</option>
            <option  v-for="(nose,index) in noses" :key="index" :value="index">{{nose.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ልዩ ምልክት  
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.unique_appearance"
          placeholder="  ልዩ ምልክት "
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
   <!-- ///// -->
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የጸጉር አይነት 
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.hair_type_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>የጸጉር አይነት </option>
            <option  v-for="hair in hairs " :key="hair.id" :value="hair.id">{{hair.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

  
      <button
      :class="[
        'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
        sizeClasses[size],
        variantClasses[variant],
        className,
        { 'cursor-not-allowed opacity-50': disabled },
      ]"
      @click="registerPrisionerApperance"
      :disabled="disabled"
    >
      <span v-if="startIcon" class="flex items-center">
       
      </span>
     ይቀጥሉ 
      <span v-if="endIcon" class="flex items-center">
       
      </span>
    </button>

        </div>
        <div class="space-y-6">

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የአይኑ ቀለም
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.eye_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>የአይኑ ቀለም</option>
            <option  v-for="(eye,index) in eyes" :key="index" :value="index">{{eye.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ጥርስ
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.teeth_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>ጥርስ</option>
            <option  v-for="(teeth,index) in teeths" :key="index" :value="index">{{teeth.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ከንፈር
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.lip_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>ከንፈር</option>
            <option  v-for="(lip,index) in lips" :key="index" :value="index">{{lip.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ጆሮ
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.ear_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected>ጆሮ</option>
            <option  v-for="(ear,index) in ears" :key="index" :value="index">{{ear.name}}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
          >
            <svg
              class="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ዜግነት 
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.citizenship"
          placeholder="ዜግነት"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
  
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref ,reactive, onMounted} from 'vue'
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
  import AdminLayout from '@/components/layout/AdminLayout.vue'
  import flatPickr from 'vue-flatpickr-component'
  import axios from 'axios'
  import router from '@/router'
//   const sexes = ref([]);
//   const ethnicGroups = ref([]);
//   const Towns = ref([]);
  const noses = ref([])
const hairs = ref([])
const eyes = ref([])
const teeths = ref([])
const lips = ref([])
const ears = ref([])
  const model = ref({
    prisionerapperance:{
        prision_history_id:localStorage.getItem('prisioner_history_id'),
        hair_type_id:null,
        height:null,
        face:' ',
        forehead:' ',
        nose_id:'',
        eye_id:'',
        teeth_id:'',
        lip_id:'',
        ear_id:'',
        unique_appearance:'',
        citizenship:''
  
  
  
    }
  })
  const fetchhair = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/hair');
      hairs.value = res.data.data
      console.log('response',  hairs.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }


  const fetchEye = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/eye');
      eyes.value = res.data.data
      console.log('response',  eyes.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }

  const fetchTeeth = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/teeth');
      teeths.value = res.data.data
      console.log('response',  teeths.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }
  const fetchLip = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/lip');
      lips.value = res.data.data
      console.log('response',  lips.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }

  const fetchEar = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/ear');
      ears.value = res.data.data
      console.log('response',  ears.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }
//   const fetchEthnic = async ()=>{
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/ethincgroup');
//       ethnicGroups.value = res.data.data
//       console.log('response',  ethnicGroups.value); 
//     } catch (error) {
//       console.error('Error fetching data:', error); 
//     }
//   }
  const fetchNose = async ()=>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/nose');
      noses.value = res.data.data
      console.log('nose',  noses.value); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  }
  const registerPrisionerApperance = async()=>{
    const formData = new FormData();
    formData.append('prision_history_id',model.value.prisionerapperance.prision_history_id);
    formData.append('hair_type_id',model.value.prisionerapperance.hair_type_id);
    formData.append('height',model.value.prisionerapperance.height);
    formData.append('face',model.value.prisionerapperance.face);
    formData.append('forehead',model.value.prisionerapperance.forehead);
    formData.append('nose_id',model.value.prisionerapperance.nose_id);
    formData.append('eye_color',model.value.prisionerapperance.eye_color);
    formData.append('teeth',model.value.prisionerapperance.teeth);
    formData.append('lip',model.value.prisionerapperance.lip);
    formData.append('ear',model.value.prisionerapperance.ear);
    formData.append('unique_appearance',model.value.prisionerapperance.unique_appearance);
    formData.append('citizenship',model.value.prisionerapperance.citizenship);
    
    const response = await axios.post('http://127.0.0.1:8000/api/prisionerapperance',formData,{
      'headers':{
        'Content-Type':'multipart/form-data'
      }
    })
    // console.log('registered prisonerapperance', response.data);
    
    
    // localStorage.setItem('prisoner_id', response.data.prisioner.id); 
    
    model.value.prisionerapperance.prision_history_id  = '';
    model.value.prisionerapperance.hair_type_id  = null;
    model.value.prisionerapperance.height  = '';
    model.value.prisionerapperance.face  = '';
    model.value.prisionerapperance.forehead  = '';
    model.value.prisionerapperance.nose  = '';
    model.value.prisionerapperance.eye_color  = '';
    model.value.prisionerapperance.teeth  = '';
    model.value.prisionerapperance.lip  = '';
    model.value.prisionerapperance.ear  = '';
    model.value.prisionerapperance.unique_appearance  = '';
    model.value.prisionerapperance.citizenship  = '';
    router.push('/PrisionerProperty')
  }
  onMounted(()=>{
  
    fetchhair();
    fetchNose();
    fetchEye();
    fetchTeeth();
    fetchLip();
    fetchEar();
  });
  const currentPageTitle = ref('የታራሚዎቺ መረጃ ምዝገባ ሁለተኛ ቅጽ  ')
  interface ButtonProps {
    size?: 'sm' | 'md'
    variant?: 'primary' | 'outline'
    startIcon?: object
    endIcon?: object
    className?: string
    disabled?: boolean
  }
  
  const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'primary',
    className: '',
    disabled: false,
  })
  
  const flatpickrConfig = {
    dateFormat: 'Y-m-d',
    altInput: true,
    altFormat: 'F j, Y',
    wrap: true,
  }
  const sizeClasses = {
    sm: 'px-6  py-3 text-sm',
    md: 'px-12  py-3.5 text-sm',
  }
  
  const variantClasses = {
    primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
    outline:
      'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
  }
  
  // const onClick = () => {
  //   if (!props.disabled && props.onClick) {
  //     props.onClick()
  //   }
  // }
  // const time = ref(null)
  // const gotoNext=()=>{
  // router.push('/')
  // }
  </script>
  
  
  