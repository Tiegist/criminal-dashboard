import './assets/main.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import { createStore } from 'vuex'
import axios from 'axios'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueApexCharts)


const store = createStore({
    state () {
      return {
        apiServer: 'https://kalkidan.net:2083/api/',
        user: {},
      }
    },
    mutations: {
      setUser(state, data) {
        state.user = data
      }
    },
    getters: {
      userRole(state) {
          return state.user?.role ?? null;
      },
      isPolice(state) {
          return state.user?.role == 2 ?? null;
      },
      isDoctor(state) {
          return state.user?.role == 4 ?? null;
      },
      isAdmin(state) {
          return state.user?.role == 1 ?? null;
      },
      isGuard(state) {
          return state.user?.role == 3 ?? null;
      },
    },
    actions: {
      applyHeader() {
        if(localStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
          axios.defaults.withCredentials = true        }
      },
      fetchUser( { commit }) {
        axios.get(this.state.apiServer + 'user')
          .then(response => {
            commit('setUser', response.data)
          })
          .catch(error => {
            localStorage.removeItem('token')
            router.push({ name: 'Signin' });
          })
      },
	  logout() {
		localStorage.removeItem('token')
		router.push({ name: 'Signin' });
	  }
     
    }
})

app.use(store)

app.mount('#app')
