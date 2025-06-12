<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="space-y-4">
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ቁመት </label>
        <input type="text" v-model="prisonerApperance.height" placeholder="ቁመት"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> መልክ </label>
        <input type="text" v-model="prisonerApperance.face" placeholder="መልክ"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ግንባር </label>
        <input type="text" v-model="prisonerApperance.forehead" placeholder=" ግንባር"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> አፍንጫ </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.nose_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="(nose, index) in noses" :key="index" :value="nose.id">{{ nose.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> የጸጉር አይነት </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.hair_type_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="hair in hairs" :key="hair.id" :value="hair.id">{{ hair.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>


      <p class="text text-red-600"> {{ errorMessage }} </p>
      <button :class="[
        'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
        sizeClasses[size],
        variantClasses[variant],
        className,
        { 'cursor-not-allowed opacity-50': disabled },
      ]" @click="registerPrisonerApperance" :disabled="disabled">
        <span v-if="startIcon" class="flex items-center"> </span>

        <span v-if="!editMode"> {{ !saving ? 'ይመዝግቡና ይቀጥሉ ' : 'እየመዘገቡ ነው...' }} </span>
        <span v-if="editMode"> {{ !saving ? 'ያስተካክሉና ይቀጥሉ ' : 'እያስተካከሉ ነው...' }} </span>

        <span v-if="endIcon" class="flex items-center">

        </span>
      </button>

    </div>
    <div class="space-y-4">
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> የአይኑ ቀለም </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.eye_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="(eye, index) in eyes" :key="index" :value="eye.id">{{ eye.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ጥርስ </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.teeth_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="(teeth, index) in teeths" :key="index" :value="teeth.id">{{ teeth.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ከንፈር </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.lip_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="(lip, index) in lips" :key="index" :value="lip.id">{{ lip.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ልዩ ምልክት </label>
        <input type="text" v-model="prisonerApperance.unique_appearance" placeholder="  ልዩ ምልክት "
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ዜግነት </label>
        <input type="text" v-model="prisonerApperance.citizenship" placeholder="ዜግነት"
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
      </div>

    </div>
    <div class="space-y-4">


      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ጆሮ </label>
        <div class="relative z-20 bg-transparent">
          <select v-model="prisonerApperance.ear_id"
            class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
            <option v-for="(ear, index) in ears" :key="index" :value="ear.id">{{ ear.name }}</option>
          </select>
          <span
            class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
            <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> ተጨማሪ ገለጻ </label>
        <textarea type="text" :rows="10" v-model="prisonerApperance.extra_description" placeholder="extra_description"
          class="dark:bg-dark-900 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const emit = defineEmits(['prisonerApperanceSaved']);

const store = useStore();
const apiServer = computed(() => store.state.apiServer);
const editMode = computed(() => route.query.prison_history_id);

const noses = ref([])
const hairs = ref([])
const eyes = ref([])
const teeths = ref([])
const lips = ref([])
const ears = ref([])

const saving = ref(false);
const errorMessage = ref('');

const prisonerApperance = ref({
  hair_type_id: null,
  height: null,
  face: '',
  forehead: '',
  nose_id: null,
  eye_id: null,
  teeth_id: null,
  lip_id: null,
  ear_id: null,
  unique_appearance: '',
  citizenship: '',
  extra_description: '',
})

const fetchhair = async () => { axios.get(apiServer.value + 'hair').then(response => { hairs.value = response.data.data; }) }
const fetchEye = async () => { axios.get(apiServer.value + 'eye').then(response => { eyes.value = response.data.data; }) }
const fetchTeeth = async () => { axios.get(apiServer.value + 'teeth').then(response => { teeths.value = response.data.data; }) }
const fetchLip = async () => { axios.get(apiServer.value + 'lip').then(response => { lips.value = response.data.data; }) }
const fetchEar = async () => { axios.get(apiServer.value + 'ear').then(response => { ears.value = response.data.data; }) }
const fetchNose = async () => { axios.get(apiServer.value + 'nose').then(response => { noses.value = response.data.data; }) }

const registerPrisonerApperance = async () => {
  if (saving.value == true) return;

  errorMessage.value = ''
  saving.value = true


  axios
    .post(apiServer.value + 'prisoner/apperance', {
      prison_history_id: route.query.prison_history_id,
      hair_type_id: prisonerApperance.value.hair_type_id,
      height: prisonerApperance.value.height,
      face: prisonerApperance.value.face,
      forehead: prisonerApperance.value.forehead,
      nose_id: prisonerApperance.value.nose_id,
      eye_id: prisonerApperance.value.eye_id,
      teeth_id: prisonerApperance.value.teeth_id,
      lip_id: prisonerApperance.value.lip_id,
      ear_id: prisonerApperance.value.ear_id,
      unique_appearance: prisonerApperance.value.unique_appearance,
      citizenship: prisonerApperance.value.citizenship,
      extra_description: prisonerApperance.value.extra_description,
    })
    .then(response => {
      saving.value = false
      emit('prisonerApperanceSaved');
    })
    .catch(error => {
      errorMessage.value = error.response.data.message
      saving.value = false
    })
}
const fetchPrisonerHistory = async () => {
  axios
    .get(apiServer.value + 'prisoner-history/' + route.query.prison_history_id)
    .then(response => {
      prisonerApperance.value.hair_type_id = response.data.data.prisoner_apperance.hair_type_id
      prisonerApperance.value.height = response.data.data.prisoner_apperance.height
      prisonerApperance.value.face = response.data.data.prisoner_apperance.face
      prisonerApperance.value.forehead = response.data.data.prisoner_apperance.forehead
      prisonerApperance.value.nose_id = response.data.data.prisoner_apperance.nose_id
      prisonerApperance.value.eye_id = response.data.data.prisoner_apperance.eye_id
      prisonerApperance.value.teeth_id = response.data.data.prisoner_apperance.teeth_id
      prisonerApperance.value.lip_id = response.data.data.prisoner_apperance.lip_id
      prisonerApperance.value.ear_id = response.data.data.prisoner_apperance.ear_id
      prisonerApperance.value.unique_appearance = response.data.data.prisoner_apperance.unique_appearance
      prisonerApperance.value.citizenship = response.data.data.prisoner_apperance.citizenship
      prisonerApperance.value.extra_description = response.data.data.prisoner_apperance.extra_description
    })
}

onMounted(() => {
  fetchhair();
  fetchNose();
  fetchEye();
  fetchTeeth();
  fetchLip();
  fetchEar();

  if (route.query.prison_history_id) {
    fetchPrisonerHistory()
  }
});

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

const sizeClasses = {
  sm: 'px-6  py-3 text-sm',
  md: 'px-12  py-3.5 text-sm',
}

const variantClasses = {
  primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
  outline:
    'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
}
</script>
