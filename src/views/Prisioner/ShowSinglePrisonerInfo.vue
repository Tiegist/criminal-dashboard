<template>
  <AdminLayout>

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
    const singlePrisionerInfo = ref([])
    const showPrisoiner = ref(false)
    const showPrisoinerInfo = ref(false)
    const showMore = ref(false)
    const fetchPrisioner = () => {
      axios.get('https://kalkidan.net:2083/api/prisioner').then((res) => {

        PrisionerInfo.value = res.data.Prisioner
        console.log('Prisioner Infro', PrisionerInfo.value)
      })
    };
    const fetchSinglePrisioner = (prisoner_id) => {
      axios.get(`https://kalkidan.net:2083/api/prisioner/${prisoner_id}`).then((res) => {
        singlePrisioner.value = res.data.Prisioner
        console.log('prisioner_id', res.data.Prisioner.id)
        localStorage.setItem('prisoner_id', res.data.Prisioner.id)
        console.log('single prisioner', singlePrisioner.value)
        showPrisoiner.value = true
        //fetchSinglePrisionerInfo(id)
      })
    };
    const fetchSinglePrisionerInfo = (id) => {
      const prisoner_id = localStorage.getItem('prisoner_id')
      console.log('prisoner_id', prisoner_id)
      axios.get(`https://kalkidan.net:2083/api/prision-history/${prisoner_id}`).then((res) => {
        singlePrisionerInfo.value = res.data.data
        console.log('single prisioner info', singlePrisionerInfo.value)
        showPrisoinerInfo.value = true
      })
    };
    const toggleShow = () => {
      showMore.value = !showMore.value
    }
    onMounted(() => {
      const prisoner_id = localStorage.getItem('prisoner_id')
      console.log('prisoner_id', localStorage.getItem('prisoner_id'))
      fetchSinglePrisioner(prisoner_id)
      //fetchPrisioner()

    });

    return {
      fetchPrisioner,
      PrisionerInfo,
      fetchSinglePrisioner,
      fetchSinglePrisionerInfo,
      singlePrisioner,
      showPrisoiner,
      showPrisoinerInfo,
      singlePrisionerInfo,
      toggleShow,
      showMore
    };

  }
}
</script>

<style></style>