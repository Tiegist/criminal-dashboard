<template>
  <LayoutComponent>
    <PageBreadcrumb :pageTitle="currentPageTitle" />

    <div v-if="Object.keys(information).length > 0"
      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
    >
      <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">የግል መረጃ</h3>
      <profile-card :prisoner="information"/>
      <h2>የወንጀል ታሪክ | ማህደር </h2>

      <div class="flex col col-6 gap-4">
        <p class="my-4" @click="showHistory(i)"  v-for="phist, i in information.prison_histories" :key="i"> {{ 'History ' + (i + 1) }} </p>
      </div>
      
      <personal-info-card  :history="phist"v-if="isAdmin || isDoctor"/>
       <address-card :history="phist"  v-if="isAdmin"/>
      <apperance :history="phist" v-if="isAdmin || isDoctor"/>
      <crime :history="phist" v-if="isAdmin"/>
      
    </div>
  </LayoutComponent>
</template>

<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import AdminLayoutMedical from '@/components/layout/AdminLayoutMedical.vue';

import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import ProfileCard from '@/components/profile/PrisonerProfileCard.vue'
import PersonalInfoCard from '@/components/profile/PrisonerPersonalInfoCard.vue'
import AddressCard from '@/components/profile/AddressCard.vue'
import Apperance from '@/components/profile/Apperance.vue'
import Crime from '@/components/profile/Crime.vue'


import { ref, reactive, onMounted, computed } from 'vue'
import router from '@/router'
import axios from 'axios'
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const currentPageTitle = ref('Prisoner Profile')
const store = useStore();
const apiServer = computed(() => store.state.apiServer);

const isAdmin = computed(() => store.getters.isAdmin);
const isDoctor = computed(() => store.getters.isDoctor);
let LayoutComponent = isAdmin.value ? AdminLayout : AdminLayoutMedical


const route = useRoute();

const phist = computed(() => {
    return Object.values(information.value.prison_histories)[currentHistory.value];
})

const information = ref({})
const currentHistory = ref(0);

const showHistory = (history) => {
  currentHistory.value = history
}

const fetchPrisonerInformation = async () => { axios.get(apiServer.value + 'prisoner/prisoner-info/'+route.query.prisoner).then(response => { information.value = response.data.data; }) }

onMounted(() => {
  fetchPrisonerInformation();
});


</script>
