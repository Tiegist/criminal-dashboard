<template>
    <LayoutComponent>
        <div>
            <div class="flex">
                <div class="bg-gray-800 shadow-2xl rounded-2xl w-full p-8 border border-gray-700">
                    <h2 class="text-3xl font-bold text-white text-center">📋 የታራሚ መረጃ ይፈልጉ </h2>

                    <div class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

                            <div v-if="isAdmin">
                                <div class="relative">
                                    <label
                                        class="block mb-1 text-sm font-semibold text-gray-800 dark:text-gray-300">ቀን</label>
                                    <div class="relative">
                                        <flat-pickr v-model="date" :config="flatpickrConfig"
                                            class="h-11 w-full rounded-lg bg-white dark:bg-gray-800 px-4 pr-12 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                            placeholder="ቀን ይምረጡ" />

                                        <div
                                            class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-lg">
                                            📅
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                 <div>
                                    <label class="block mb-1 text-sm font-semibold text-gray-800 dark:text-gray-300">ሰአት</label>
                                    <div class="relative">
                                        <select v-model="time"
                                            class="h-11 w-full rounded-lg bg-white dark:bg-gray-800 px-4 pr-12 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400">
                                            <option value="" disabled selected>ሰአት ይምረጡ</option>
                                            <option value="1">ጠዋት</option>
                                            <option value="2">ማታ</option>
                                        </select>
                                        <div
                                            class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-lg">
                                            ⏰
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="pt-6">
                            <div class="w-1/2 ">

                                <button @click="fetchPrisioner('', true)"
                                    class="w-2/3  py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg">
                                    📅 {{ searching ? 'Searching' : 'Show' }}
                                </button>
                            </div>


                            <div v-if="errorMessage" class="text-red-500 text-center font-semibold mt-4">
                                {{ errorMessage }}
                            </div>
                            <div v-if="successMessage" class="text-teal-500 text-center font-semibold mt-4">
                                {{ successMessage }}
                            </div>

                            <div v-if="noResults" class="text-yellow-400 text-center font-semibold mt-4">
                                😕 በዚህ መረጃ ውስጥ የታሰረ ሰው አልተገኘም።
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div
            class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10">
            <div class="max-w-full overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th class="px-5 py-3 text-left w-3/11 sm:px-6">
                                <p class="font-medium text-gray-500 text-theme-md dark:text-gray-400">ስም </p>
                            </th>
                            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                                <p class="font-medium text-gray-500 text-theme-md dark:text-gray-400">የአባት ስም </p>
                            </th>
                            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                                <p class="font-medium text-gray-500 text-theme-md dark:text-gray-400">የአያት ስም </p>
                            </th>
                            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                                <p class="font-medium text-gray-500 text-theme-md dark:text-gray-400">STATUS</p>
                            </th>
                            <th class="px-5 py-3 text-left w-2/11 sm:px-6">
                                <p class="font-medium text-gray-500 text-theme-md dark:text-gray-400">ድርጊቶች</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="(user, index) in PrisionerInfo" :key="index"
                            class="border-t border-gray-100 dark:border-gray-800">
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
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400" v-if="user.prisoner_attendances.length > 0">
                                        <span class="text-green-500" v-if="user.prisoner_attendances[0].status == 1 "> PRESENT </span>
                                        <span class="text-red-500" v-if="user.prisoner_attendances[0].status == 2 "> ABSENT </span>
                                    </p>
                                <p class="text-red-500 text-theme-sm dark:text-gray-400" v-else> ABSENT </p>
                            </td>
                            <td class="px-5 py-4 sm:px-6">
                                <a @click="fetchSinglePrisioner(user.id)"
                                    class="font-medium text-theme-sm text-green-600 dark:text-green-500 hover:underline cursor-pointer">ተጨማሪ
                                </a>
                            </td>

                        </tr>
                    </tbody>
                </table>

                <!-- pagination start -->
                <div class="flex flex-wrap justify-center items-center mt-6 space-x-2">
                    <span v-for="page in (links ?? [])" :key="page.label" @click="page.url && fetchPrisioner(page.url)"
                        :class="['px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                            page.url ? 'cursor-pointer hover:bg-gray-700 hover:text-white' : 'cursor-not-allowed text-gray-500',
                            page.active ? 'bg-teal-500 text-white' : 'text-gray-300 border border-gray-600'
                        ]" v-html="page.label">
                    </span>
                </div>

                <!-- pagination end -->

            </div>
        </div>
        <div class="flex w-12/12 mx-auto">

            <div v-if="showPrisoiner" :class="[
                'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/3 mx-auto',
                className,
            ]">
                <!-- Card Header -->
                <div class="px-6 py-5">
                    የታራሚው ዝርዝር መረጃ

                </div>

                <!-- Card Body -->
                <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                    <div class="space-y-5">


                        <div class="relative">
                            <flat-pickr v-model="date" :config="flatpickrConfig"
                                class="h-11 w-full rounded-lg bg-white dark:bg-gray-800 px-4 pr-12 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                placeholder="ቀን ይምረጡ" />

                            <div
                                class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-lg">
                                📅
                            </div>
                        </div>

                        <div class="">
                            <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-29 text-gray-800">የአያት ስም :</span> {{
                                    singlePrisioner.last_name }}
                            </p>

                            <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-29 text-gray-800">የእናት ስም :</span> {{
                                    singlePrisioner.mother_name }}
                            </p>
                        </div>
                        <div class="">
                            <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀን</span>{{
                                    singlePrisioner.date_of_birth }}
                            </p>

                            <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-39 text-gray-800"> ጾታ :</span> {{ singlePrisioner.sex }}
                            </p>
                        </div>
                        <div class="">
                            <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-20 text-gray-800"> የተወለደበት ቀበሌ :</span> {{
                                    singlePrisioner.birth_district }}
                            </p>

                            <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-17 text-gray-800">የተወለደበት ከተማ :</span> {{
                                    singlePrisioner.birth_town.name }}
                            </p>
                        </div>
                        <div>
                            <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                                <span class="font-bold mr-37 text-gray-800"> ብሄር :</span> {{
                                    singlePrisioner.ethnic_group?.name }}
                            </p>
                        </div>
                        <div class="flex">
                            <div>
                                <Button size="sm" variant="outline"
                                    @click="fetchSinglePrisionerInfo(singlePrisioner.id)">ተጨማሪ መረጃ ይመልከቱ
                                </Button>
                            </div>
                            <div>
                                <Button size="sm" variant="outline"
                                    @click="fetchSinglePrisionerInfo(singlePrisioner.id)">መረጃ
                                    ያስተካክሉ</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    </LayoutComponent>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import AdminLayoutMedical from '@/components/layout/AdminLayoutMedical.vue';
import Button from '@/components/ui/Button.vue';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import axios from 'axios';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';



const route = useRoute();
const store = useStore();
const apiServer = computed(() => store.state.apiServer);

const isAdmin = computed(() => store.getters.isAdmin);
const isDoctor = computed(() => store.getters.isDoctor);

let LayoutComponent = isAdmin.value ? AdminLayout : AdminLayout

const paginationInfo = ref({});
const links = computed(() => paginationInfo.value.links);
const PrisionerInfo = ref([]);
const singlePrisioner = ref([]);
const singlePrisionerInfo = ref([]);
const sexes = ref([]);
const showPrisoiner = ref(false);
const showPrisoinerInfo = ref(false);
const showMore = ref(false);
const religions = ref([]);
const crimes = ref([])
const errorMessage = ref('');
const successMessage = ref('');
const noResults = ref(false);
const searching = ref(false)

const date = ref(null)
const time = ref(1)

const prisoner = ref({
    first_name: '',
    middle_name: '',
    last_name: '',
    date_of_birth: '',
    mother_name: '',
    sex: null,
    eye_id: '',
    religion_id: null,
    crime_id: null,
});

const fetchCrimes = async () => { axios.get(apiServer.value + 'crime').then(response => { crimes.value = response.data.data; }) }
const fetchReligion = async () => {
    try {
        const response = await axios.get(apiServer.value + 'religion');
        religions.value = response.data.data;
    } catch (error) {
        console.error('ሃይማኖቶችን ማምጣት ላይ ስህተት!', error);
    }
}

const fetchSex = async () => {
    axios
        .get(apiServer.value + 'sexes')
        .then(response => {
            sexes.value = response.data;
        })
}

const clearSearch = function () {
    prisoner.value = {
        first_name: '',
        middle_name: '',
        last_name: '',
        date_of_birth: '',
        mother_name: '',
        sex: null,
        eye_id: '',
        religion_id: null,
        crime_id: null,
    }

    fetchPrisioner()
}

const fetchPrisioner = async (url = '', search = false) => {
    paginationInfo.value = {}
    PrisionerInfo.value = []
    errorMessage.value = ''
    successMessage.value = ''

    url = url === '' ? apiServer.value + 'attendance' : url;
    const filters = {
        date: date.value,
        time: time.value,
    };

    if (search) {
        searching.value = true
        
    }

    axios
        .get(url, { params: filters })
        .then(response => {

            paginationInfo.value = response.data.data;
            PrisionerInfo.value = response.data.data.data;

            if (search) {
                if (PrisionerInfo.value.length == 0) {

                    errorMessage.value = '❌ ምንም Attendance አልተገኘም!'
                } else {
                    successMessage.value = paginationInfo.value.total + ' ከመዝገብህ ጋር የሚዛመዱ ውጤቶች ተገኝተዋል'
                }
            }
        }).catch(error => {
            errorMessage.value = error.response?.data?.message ?? '❌ ፍለጋውን ማከናወን አልተቻለም። እባክዎን አንደገና ይሞክሩ።'
        }).finally(() => {
            searching.value = false
        })
};

const fetchSinglePrisioner = (prisoner_id) => {
    router.push({ name: 'ShowSinglePrisoner', query: { prisoner: prisoner_id } });
};

const fetchSinglePrisionerInfo = (id) => {
    localStorage.setItem('prisoner_id', id);
    router.push('/ShowSinglePrisoner');
};

const toggleShow = () => {
    showMore.value = !showMore.value;
};

onMounted(() => {
    fetchPrisioner();
    // fetchReligion();
    // fetchSex();
    // fetchCrimes();
});



</script>
