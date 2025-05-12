<template>
  <PoliceLayout>
    <div class="flex" v-if="!isEditing">
      <div
        :class="[
          'rounded-2xl border border-gray-200 px-5 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10 w-1/2 mx-auto',
          className,
        ]"
      >
        <!-- Card Header -->
        <div class="px-6 py-5">የታራሚው ተጨማሪ መረጃ</div>

        <!-- Card Body -->
        <img :src="matchedHistory?.photo" alt="no image" />
        <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
          <div class="space-y-5">
            <div class="">
              <p class="text-base text-blue-800 dark:text-white/90">
                <span class="font-bold mr-30 text-gray-800">የቅርብ ተጠሪ :</span>{{
                  matchedHistory?.closest_respondent
                }}
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-17 text-gray-800"> የቅርብ ተጠሪ መኖሪያ ከተማ :</span>
                {{ matchedHistory?.d_town?.name }}
              </p>
            </div>
            <div class="mt-5">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-19 text-gray-800">የቅርብ ተጠሪ መኖሪያ ቀበሌ :</span>{{
                  matchedHistory?.d_district
                }}
              </p>

              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-27 text-gray-800">የእስረኛዉ አይነት :</span> {{
                  matchedHistory?.criminal_type?.name
                }}
              </p>
            </div>
            <div class="">
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-28 text-gray-800">አሁን የሚኖርበት ዞን:</span> {{
                  matchedHistory?.current_city?.name
                }}
              </p>

              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-25 text-gray-800">አሁን የሚኖርበት ቀበሌ:</span>
                {{ matchedHistory?.current_district }}
              </p>
            </div>
            <div class="">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-20 text-gray-800">በምህረት የተፈታበት ቀን</span>{{
                  matchedHistory?.date_of_mercy_release
                }}
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-39 text-gray-800"> እስራቱን ጨርሶ የሚፈታበት ቀን:</span>
                {{ matchedHistory?.date_of_release }}
              </p>
              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-39 text-gray-800"> የታሰረበት ቀን:</span>
                {{ matchedHistory?.date_time_entered }}
              </p>
            </div>
            <div class="">
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-34 text-gray-800"> የትምህርት ደረጃ :</span>
                {{ matchedHistory?.educational_level?.name }}
              </p>

              <p class="mt-5 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-22 text-gray-800"> የእስር ቅጣቱ ያለቀበት ቀን:</span>
                {{ matchedHistory?.end_date_of_arrest }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-22 text-gray-800"> ብሄር :</span>
                {{ matchedHistory?.ethnic_group?.name }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-49 text-gray-800">ስራ :</span> {{ matchedHistory?.job }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-42 text-gray-800"> የቤት ስልክ:</span>
                {{ matchedHistory?.mobile_number }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-38 text-gray-800">ሞባይል ስልክ:</span>
                {{ matchedHistory?.phone_number }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-22 text-gray-800"> የእስረኛው የመቆያ ክፍል :</span>
                {{ matchedHistory?.prision_cell_id }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-22 text-gray-800"> የመፈቻ ምክንያት :</span>
                {{ matchedHistory?.release_reason }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-42 text-gray-800"> ሀይማኖት :</span>
                {{ matchedHistory?.religion?.name }}
              </p>
            </div>
            <div>
              <p class="mt-1 text-sm text-blue-800 dark:text-white/90">
                <span class="font-bold mr-26 text-gray-800"> መረጃዉን የሞላዉ ፖሊስ :</span>
                {{ matchedHistory?.user?.user_name }}
              </p>
            </div>
            <div></div>
            <Button size="sm" variant="outline" @click="isEditing = true" class="mr-10">
              የታራሚዉን መረጃ ያስተካክሉ 
            </Button>
            <Button
              size="sm"
              variant="outline"
              @click="fetchmatchedHistoryInfo(matchedHistory?.id)"
            >
              ተጨማሪ መረጃ ይመልከቱ
            </Button>
          </div>
        </div>
      </div>
    </div>
    <EditPrisonerInfo
      v-if="isEditing"
      :matchedHistory="matchedHistory"
      :cities="cities"
      :educationalLevels="educationalLevels"
      :religions="religions"
      :towns="towns"
      :criminals="criminals"
      :prisonerCells="prisonerCells"
      @close="isEditing = false"
      @update-history="updateMatchedHistory"
    />
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
import router from '@/router';
import { useRoute, useRouter } from 'vue-router';
import MedicalHistory from '../Criminal/MedicalHistory.vue';
import EditPrisonerInfo from '@/components/EditPrisonerInfo.vue'; // Import the new component

export default {
  components: {
    PageBreadcrumb,
    PoliceLayout,
    Button,
    FlatPickr,
    EditPrisonerInfo, // Register the new component
  },

  setup() {
    const PrisionerInfo = ref([]);
    const singlePrisioner = ref([]);
    const singlePrisionerApperance = ref([]);
    const showPrisoiner = ref(false);
    const showPrisoinerInfo = ref(false);
    const showMore = ref(false);
    const matchedHistory = ref([]);
    const cities = ref([]);
    const route = useRoute();
    const router = useRouter();
    const educationalLevels = ref([]);
    const religions = ref([]);
    const towns = ref([]);
    const criminals = ref([]);
    const prisonerCells = ref([]);
    const isEditing = ref(false);
    const prisonerPersonalInfo = ref({});
    const photo = ref(null);

    const fetchPrisonerCell = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/prisonerCell');
        prisonerCells.value = response.data.data;
        console.log('criminal cell', religions.value);
      } catch (error) {
        console.error('Error fetching criminal cell data', error);
      }
    };

    const fetchCities = () => {
      axios
        .get('http://127.0.0.1:8000/api/city')
        .then((res) => {
          cities.value = res.data.data;
          console.log('citiesss', cities.value);
        })
        .catch((err) => console.log(err));
    };
    const fetchEducationalLevels = () => {
      axios
        .get('http://127.0.0.1:8000/api/education')
        .then((res) => {
          educationalLevels.value = res.data.data;
          console.log('educational levels', educationalLevels.value);
        })
        .catch((err) => console.log(err));
    };
    const fetchReligions = () => {
      axios
        .get('http://127.0.0.1:8000/api/religion')
        .then((res) => {
          religions.value = res.data.data;
          console.log('religion', religions.value);
        })
        .catch((err) => console.log(err));
    };
    const fetchTowns = () => {
      axios
        .get('http://127.0.0.1:8000/api/town')
        .then((res) => {
          towns.value = res.data.data;
          console.log('towns', towns.value);
        })
        .catch((err) => console.log(err));
    };
    const fetchCriminals = () => {
      axios
        .get('http://127.0.0.1:8000/api/criminalType')
        .then((res) => {
          criminals.value = res.data.data;
          console.log('criminals', criminals.value);
        })
        .catch((err) => console.log(err));
    };
    const saveProfessionalInfo = async () => {
      const formData = new FormData();

      Object.entries(prisonerPersonalInfo.value).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (prisonerPersonalInfo.value.photo) {
        formData.append('photo', prisonerPersonalInfo.value.photo);
      }

      try {
        const response = await axios.put(
          'http://127.0.0.1:8000/api/prision-history',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log('response', response);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
    const registerPrisonerApperance = async () => {
      if (saving.value == true) return;

      errorMessage.value = '';
      saving.value = true;

      axios
        .post(apiServer.value + 'prisoner/personal-info', {
          prison_history_id: route.query.prison_history_id,
          educational_level_id: prisonerPersonalInfo.value.educational_level_id,
          religion_id: prisonerPersonalInfo.value.religion_id,
          d: prisonerPersonalInfo.value.d,
          d_town_id:
            prisonerPersonalInfo.value.d_town_id,
          current_district: prisonerPersonalInfo.value.current_district,
          d_district: prisonerPersonalInfo.value.d_district,
          job: prisonerPersonalInfo.value.job,
          phone_number: prisonerPersonalInfo.value.phone_number,
          mobile_number: prisonerPersonalInfo.value.mobile_number,
          date_time_entered: prisonerPersonalInfo.value.date_time_entered,
          //   photo: prisonerPersonalInfo.value.photo,
        })
        .then((response) => {
          saving.value = false;
          emit('prisonerPersonalInfoSaved');
        })
        .catch((error) => {
          errorMessage.value = error.response.data.message;
          saving.value = false;
        });
    };

    const fetchmatchedHistoryInfo = (id) => {
      localStorage.setItem('priosoner_history_id', id);
      router.push('/ShowSinglePrisonerApperance');
    };
    const fetchSinglePrisionerInfo = () => {
      const prisoner_id = localStorage.getItem('prisoner_id');
      axios
        .get(`http://127.0.0.1:8000/api/prision-history`)
        .then((res) => {
          singlePrisioner.value = res.data.data;
          console.log('single prisioner info', singlePrisioner.value);
          matchedHistory.value = singlePrisioner.value.find(
            (item) => item.prisioner_id == prisoner_id
          );
          console.log('matchedHistory', matchedHistory.value);
          if (matchedHistory.value) {
            prisonerPersonalInfo.value = matchedHistory.value;
          }
          if (matchedHistory.value) {
            singlePrisioner.value = matchedHistory.value;
            console.log('single prisioner', singlePrisioner.value);
          }
          console.log('prisioner', singlePrisioner.value);
          //localStorage.setItem('prisoner_id',res.data.Prisioner.id)
          // console.log('single prisioner',singlePrisioner.value )
          showPrisoiner.value = true;
          //fetchSinglePrisionerInfo(id)
        })
        .catch((err) => console.log(err));
    };

    const updateMatchedHistory = (updatedHistory) => {
      matchedHistory.value = updatedHistory;
    };

    onMounted(() => {
      const prisoner_id = localStorage.getItem('prisoner_id');
      console.log('prisoner_id', localStorage.getItem('prisoner_id'));
      fetchSinglePrisionerInfo();
      fetchCities();
      fetchEducationalLevels();
      fetchReligions();
      fetchTowns();
      fetchCriminals();
      fetchPrisonerCell();

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
      fetchmatchedHistoryInfo,
      prisonerPersonalInfo,
      fetchCities,
      cities,
      educationalLevels,
      fetchEducationalLevels,
      fetchReligions,
      religions,
      fetchTowns,
      towns,
      fetchCriminals,
      criminals,
      saveProfessionalInfo,
      fetchPrisonerCell,
      prisonerCells,
      isEditing,
      updateMatchedHistory,
      photo

      //toggleShow,
      //showMore
    };
  },
};
</script>

<style scoped></style>