<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div class="space-y-6">
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            ሙሉ ስም
          </label>
          <input type="text" v-model="model.users.full_name" placeholder=" ሙሉ ስም "
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            የይለፍ ቃል
          </label>
          <input type="password" v-model="model.users.password" placeholder=" የይለፍ ቃል "
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            በድጋሜ የይለፍ ቃል ያስገቡ
          </label>
          <input type="password" placeholder="በድጋሜ የይለፍ ቃል ያስገቡ"
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>

        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            እድሜ
          </label>
          <input type="text" v-model="model.users.age" placeholder="እድሜ"
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>


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
            ጾታ
          </label>
          <div class="relative z-20 bg-transparent">
            <select v-model="model.users.sex"
              class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
              <option value="" disabled selected>ጾታ</option>
              <option v-for="sex in sexes" :key="sex.id" :value="sex.id">{{ sex.name }}</option>
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
          <span class="text-red-500"> {{ errorMessage }} </span>
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

        <button :class="[
          'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
          sizeClasses[size],
          variantClasses[variant],
          className,
          { 'cursor-not-allowed opacity-50': disabled },
        ]" @click="registerUser" :disabled="disabled">
          <span v-if="startIcon" class="flex items-center">

          </span>
          መዝግብ
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
            አድራሻ

          </label>
          <input type="text" v-model="model.users.address" placeholder="አድራሻ "
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>
        <div>
          <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
            ስልክ ቁጥር

          </label>
          <input type="text" v-model="model.users.phone_number" placeholder="ስልክ ቁጥር "
            class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
        </div>
        <div class="space-y-6">
          <div>
            <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              ልዩ ስም
            </label>
            <input type="text" v-model="model.users.user_name" placeholder=" ልዩ ስም "
              class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
          </div>
          <div>
            <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              ድርሻ
            </label>
            <div class="relative z-20 bg-transparent">
              <select v-model="model.users.role"
                class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border 'text-gray-800 dark:text-white/90' border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                <option value="" disabled selected> ድርሻ </option>
                <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>

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
            <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              ፎቶ
            </label>
            <input @change="handlephoto" type="file"
              class="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400" />
          </div>
          <!-- <div>
      <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
       ፊርማ 
      </label>
      <input
      @change="handleSignature" 
        type="file"
        class="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400"
      />
    </div> -->
        </div>


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
import { ref, reactive, onMounted } from 'vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import router from '@/router'
import flatPickr from 'vue-flatpickr-component'
import axios from 'axios'
import { useRoute } from 'vue-router'
const route = useRoute();
const errorMessage = ref('')
const sexes = ref([]);
const roles = ref([]);
//   const Towns = ref([]);
const prisonerId = ref([])
const model = ref({
  users: {
    full_name: '',
    sex: null,
    age: '',
    password: '',
    user_name: '',
    address: '',
    phone_number: '',
    role: null,
    photo: '',
    signature: ''
  }
})
const fetchSex = async () => {
  try {
    const res = await axios.get('https://kalkidan.net:2083/api/sexes');
    sexes.value = res.data
    console.log('response', sexes.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const getRole = async () => {
  try {
    const res = await axios.get('https://kalkidan.net:2083/api/roles');
    roles.value = res.data
    console.log('response', roles.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const handlephoto = async (event) => {
  const file = event.target.files[0]
  if (file) {
    model.value.users.photo = event.target.files[0]
    console.log('photo', model.value.users.photo)
  }
};
const handleSignature = async (event) => {
  const file = event.target.files[0]
  if (file) {
    model.value.users.signature = event.target.files[0]
    console.log('photo', model.value.users.signature)
  }
};
const registerUser = async () => {
  errorMessage.value = ''
  const formData = new FormData();
  formData.append('full_name', model.value.users.full_name)
  formData.append('sex', model.value.users.sex)
  formData.append('age', model.value.users.age)
  formData.append('password', model.value.users.password)
  formData.append('user_name', model.value.users.user_name)
  formData.append('address', model.value.users.address)
  formData.append('phone_number', model.value.users.phone_number)
  formData.append('role', model.value.users.role)
  formData.append('photo', model.value.users.photo)
  
  if(route.query.user_id) {
    formData.append('user_id', route.query.user_id)
  }
  // formData.append('signature', model.value.users.signature)

  axios.post('https://kalkidan.net:2083/api/user', formData, {
    'headers': {
      'Content-Type': 'multipart/form-data'
    }
  }).then(response => {
    router.push({ name: 'usersList' });

    model.value.users.full_name = '';
    model.value.users.sex = '';
    model.value.users.age = '';
    model.value.users.password = '';
    model.value.users.user_name = '';
    model.value.users.address = '';
    model.value.users.phone_number = '';
    model.value.users.role = '';
    model.value.users.photo = '';
    model.value.users.signature = '';
  }).catch(error => {
    errorMessage.value = error.response.data.message
  })
  // model.value.users.ethnic_group_id  = '';
  // router.push('/PrisonerHistory')
}

function fetchEditUser() {
  axios
    .get('https://kalkidan.net:2083/api/single-user?user_id=' + route.query.user_id)
    .then(response => {
      model.value.users.phone_number = response.data.user.phone_number
      model.value.users.age = response.data.user.age
      model.value.users.role = response.data.user.role
      model.value.users.full_name = response.data.user.full_name
      model.value.users.address = response.data.user.address
      model.value.users.sex = response.data.user.sex
      model.value.users.user_name = response.data.user.user_name
    })
}

onMounted(() => {

  if (route.query.user_id) {
    fetchEditUser()
  }
  const token = localStorage.getItem('token');
  if (token) {
    // axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Authorization'] = ` Bearer ${token}`;
    fetchSex();
    getRole();
  } else {
    router.push({ name: 'signin' });
  }

},

  // fetchTown();
);
const currentPageTitle = ref('የባለሙያዎች  መረጃ ምዝገባ ')
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