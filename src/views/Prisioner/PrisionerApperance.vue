<template>
    <AdminLayout>
      <PageBreadcrumb :pageTitle="currentPageTitle" />
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
        <input
          type="text"
         v-model="model.prisionerapperance.nose"
          placeholder=" አፍንጫ "
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
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
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የተወለደበት ቀን 
        </label>
        <input
          type="text"
         
          placeholder="ጾታ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div> -->
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የተወለደበት ቀን 
        </label>
        <div class="relative">
          <flat-pickr
             v-model="model.prisionerapperance.date_of_birth"
            :config="flatpickrTimeConfig"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            placeholder="ቀን ይምረጡ "
          />
          <span
            class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
          >
            <svg
              class="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div> -->
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ጾታ
        </label>
        <input
          type="text"
         
          placeholder="ጾታ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div> -->
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
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የተወለደበት ከተማ 
        </label>
        <input
          type="text"
         
          placeholder="የተወለደበት ከተማ "
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div> -->
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          የተወለደበት ከተማ 
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.birth_town_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected> የተወለደበት ከተማ </option>
            <option  v-for="town in Towns" :key="town.id " :value="town.id">{{town.name}}</option>
  
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
      </div> -->
  
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
          <!-- <ComponentCard title="Default Inputs">
            <DefaultInputs />
          </ComponentCard>
          <ComponentCard title="Select Inputs">
            <SelectInput />
          </ComponentCard>
          <ComponentCard title="Inputs States">
            <TextArea />
          </ComponentCard>
          <ComponentCard title="Inputs States">
            <InputState />
          </ComponentCard> -->
        </div>
        <div class="space-y-6">
          <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የአይኑ ቀለም
         
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.eye_color"
          placeholder="የአይኑ ቀለም"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
         ጥርስ
          
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.teeth"
          placeholder="ጥርስ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ከንፈር  
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.lip"
          placeholder="ከንፈር "
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ጆሮ 
        </label>
        <input
          type="text"
         v-model="model.prisionerapperance.ear"
          placeholder="ጆሮ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
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
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          ብሄር 
        </label>
        <div class="relative z-20 bg-transparent">
          <select
           v-model="model.prisionerapperance.ethnic_group_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            
          >
            <option value="" disabled selected> ብሄር </option>
            <option  v-for="ethnic in ethnicGroups" :key="ethnic.id " :value="ethnic.id">{{ethnic.name}}</option>
  
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
      </div> -->
      <!-- <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
         ብሄር
        </label>
        <input
          type="text"
         
          placeholder="ብሄር"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div> -->
  
          <!-- <ComponentCard title="Inputs Group"> <InputGroup /> </ComponentCard>
          <ComponentCard title="File Input"> <FileInput /> </ComponentCard>
          <ComponentCard title="Checkboxes">
            <CheckboxInput />
          </ComponentCard>
          <ComponentCard title="Dropzone">
            <Dropzone />
          </ComponentCard> -->
        </div>
      </div>
    </AdminLayout>
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
//   const prisonerId = ref([])
const hairs = ref([])
  const model = ref({
    prisionerapperance:{
        prision_history_id:localStorage.getItem('prisioner_history_id'),
        hair_type_id:null,
        height:null,
        face:' ',
        forehead:' ',
        nose:'',
        eye_color:'',
        teeth:'',
        lip:'',
        ear:'',
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
//   const fetchEthnic = async ()=>{
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/ethincgroup');
//       ethnicGroups.value = res.data.data
//       console.log('response',  ethnicGroups.value); 
//     } catch (error) {
//       console.error('Error fetching data:', error); 
//     }
//   }
//   const fetchTown = async ()=>{
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/town');
//       Towns.value = res.data.data
//       console.log('response',  Towns.value); 
//     } catch (error) {
//       console.error('Error fetching data:', error); 
//     }
//   }
  const registerPrisionerApperance = async()=>{
    const formData = new FormData();
    formData.append('prision_history_id',model.value.prisionerapperance.prision_history_id);
    formData.append('hair_type_id',model.value.prisionerapperance.hair_type_id);
    formData.append('height',model.value.prisionerapperance.height);
    formData.append('face',model.value.prisionerapperance.face);
    formData.append('forehead',model.value.prisionerapperance.forehead);
    formData.append('nose',model.value.prisionerapperance.nose);
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
  
  
  