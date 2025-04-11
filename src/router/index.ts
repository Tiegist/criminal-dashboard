import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    // CRIMINAL
    {
      path: '/regions',
      name: 'regions',
      component: () => import('../views/Criminal/Location/Region.vue'),
      meta: {
        title: 'Regions',
      },
    },   


   
    {
      path: '/cities',
      name: 'cities',
      component: () => import('../views/Criminal/Location/City.vue'),
      meta: {
        title: 'Cities',
      },
    },  

    {
      path: '/towns',
      name: 'towns',
      component: () => import('../views/Criminal/Location/Town.vue'),
      meta: {
        title: 'Towns',
      },
    },  
    {
      path: '/hair',
      name: 'hair',
      component: () => import('../views/Criminal/Appearance/HairType.vue'),
      meta: {
        title: 'የጸጉር አይነት',
      },
    },  
    {
      path: '/EthnicGroup',
      name: 'EthnicGroup',
      component: () => import('../views/Criminal/Appearance/EthnicGroup.vue'),
      meta: {
        title: 'ብሄር',
      },
    },  
    {
      path: '/Courts',
      name: 'Courts',
      component: () => import('../views/Criminal/Appearance/Courts.vue'),
      meta: {
        title: 'ፍርድ ቤቶች',
      },
    },  
    {
      path: '/Crimes',
      name: 'Crimes',
      component: () => import('../views/Criminal/Appearance/Crimes.vue'),
      meta: {
        title: 'የወንጀል አይነቶች ',
      },
    },  
    {
      path: '/CriminalType',
      name: 'CriminalType',
      component: () => import('../views/Criminal/Appearance/CriminalType.vue'),
      meta: {
        title: 'የወንጀለኛ አይነቶች ',
      },
    },  
    {
      path: '/EducationalLevel',
      name: 'EducationalLevel',
      component: () => import('../views/Criminal/Appearance/EducationalLevel.vue'),
      meta: {
        title: 'የትምህርት ደርጃ ',
      },
    },  
    {
      path: '/PropertyType',
      name: 'PropertyType',
      component: () => import('../views/Criminal/Appearance/PropertyType.vue'),
      meta: {
        title: 'የእቃው አይነት ',
      },
    },  
    {
      path: '/PrisonerCell',
      name: 'PrisonerCell',
      component: () => import('../views/Criminal/Appearance/PrisonerCell.vue'),
      meta: {
        title: 'የእስረኛው ክፍል',
      },
    },  
    {
      path: '/Teeths',
      name: 'Teeths',
      component: () => import('../views/Criminal/Appearance/Teeths.vue'),
      meta: {
        title: 'ጥርስ',
      },
    },  
    {
      path: '/Noses',
      name: 'Noses',
      component: () => import('../views/Criminal/Appearance/Noses.vue'),
      meta: {
        title: 'አፍንጫ',
      },
    },  
    {
      path: '/Lips',
      name: 'Lips',
      component: () => import('../views/Criminal/Appearance/Lips.vue'),
      meta: {
        title: 'ከንፈር',
      },
    },  
    {
      path: '/Ears',
      name: 'Ears',
      component: () => import('../views/Criminal/Appearance/Ears.vue'),
      meta: {
        title: 'ጆሮ ',
      },
    },  
    {
      path: '/Eyes',
      name: 'Eyes',
      component: () => import('../views/Criminal/Appearance/Eyes.vue'),
      meta: {
        title: 'አይን',
      },
    },  

    {
      path: '/religions',
      name: 'religions',
      component: () => import('../views/Criminal/Religion.vue'),
      meta: {
        title: 'Religion',
      },
    },  

    {
      path: '/disease-types',
      name: 'disease-types',
      component: () => import('../views/Criminal/DiseaseType.vue'),
      meta: {
        title: 'Disease Type',
      },
    },  

    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/PrisonerHistory',
      name: 'PrisonerHistory',
      component: () => import('../views/Criminal/PrisonerHistory.vue'),
      meta: {
        title: 'prisoner History',
      },
    },
    {
      path: '/CriminalCash',
      name: 'CriminalCash',
      component: () => import('../views/Criminal/CriminalCash.vue'),
      meta: {
        title: 'prisoner cash',
      },
    },
    {
      path: '/PrisonerCrimes',
      name: 'PrisonerCrimes',
      component: () => import('../views/Criminal/PrisonerCrimes.vue'),
      meta: {
        title: 'prisoner crimes',
      },
    },
    {
      path: '/MedicalHistory',
      name: 'MedicalHistory',
      component: () => import('../views/Criminal/MedicalHistory.vue'),
      meta: {
        title: 'Medical History',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },

    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },

    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
    // Prisioner Stepper
    {
      path: '/prisoner-form',
      name: 'prisonerForm',
      component: () => import('../views/Prisioner/PrisonerStepper.vue'),
      meta: {
        title: 'Prisoner Form',
      },
    },
    {
      path: '/ShowSinglePrisonerApperance',
      name: 'ShowSinglePrisonerApperance',
      component: () => import('../views/Prisioner/ShowSinglePrisonerApperance.vue'),
      meta: {
        title: 'ShowSinglePrisonerApperance',
      },
    },
    {
      path: '/ShowSinglePrisonerProperty',
      name: 'ShowSinglePrisonerProperty',
      component: () => import('../views/Prisioner/ShowSinglePrisonerProperty.vue'),
      meta: {
        title: 'ShowSinglePrisonerProperty',
      },
    },
    {
      path: '/ShowSinglePrisonerCrimes',
      name: 'ShowSinglePrisonerCrimes',
      component: () => import('../views/Prisioner/ShowSinglePrisonerCrimes.vue'),
      meta: {
        title: 'ShowSinglePrisonerCrimes',
      },
    },
    {
      path: '/ShowMedicalInfo',
      name: 'ShowMedicalInfo',
      component: () => import('../views/Criminal/ShowMedicalInfo.vue'),
      meta: {
        title: 'ShowMedicalInfo',
      },
    },
    {
      path: '/ShowSinglePrisonerCourtHistories',
      name: 'ShowSinglePrisonerCourtHistories',
      component: () => import('../views/Prisioner/ShowSinglePrisonerCourtHistories.vue'),
      meta: {
        title: 'ShowSinglePrisonerCourtHistories',
      },
    },
    {
      path: '/ShowPrisonerCash',
      name: 'ShowPrisonerCash',
      component: () => import('../views/Prisioner/ShowPrisonerCash.vue'),
      meta: {
        title: 'ShowPrisonerCash',
      },
    },
    
    //prisioner
    {
      path: '/Prisioner',
      name: 'Prisioner',
      component: () => import('../views/Prisioner/Prisioner.vue'),
      meta: {
        title: 'Prisioner',
      },
    },
    //prisioner apperance
    {
      path: '/PrisionerApperance',
      name: 'PrisionerApperance',
      component: () => import('../views/Prisioner/Steps/PrisionerApperance.vue'),
      meta: {
        title: 'PrisionerApperance',
      },
    },
    
    //prisioner property
    {
      path: '/PrisionerProperty',
      name: 'PrisionerProperty',
      component: () => import('../views/Prisioner/PrisionerProperty.vue'),
      meta: {
        title: 'PrisionerProperty',
      },
    },
    //prisioner court story
    {
      path: '/PrisionerCourtHistory',
      name: 'PrisionerCourtHistory',
      component: () => import('../views/Prisioner/PrisionerCourtHistory.vue'),
      meta: {
        title: 'PrisionerCourtHistory',
      },
    },
//showPrisioner
{
  path: '/ShowPrisioner',
  name: 'ShowPrisioner',
  component: () => import('../views/Prisioner/ShowPrisioner.vue'),
  meta: {
    title: 'ShowPrisioner',
  },
},
{
  path: '/ShowSinglePrisoner',
  name: 'ShowSinglePrisoner',
  component: () => import('../views/Prisioner/ShowSinglePrisoner.vue'),
  meta: {
    title: 'ShowSinglePrisoner',
  },
},
{
  path: '/ShowMedical',
  name: 'ShowMedical',
  component: () => import('../views/Prisioner/ShowMedical.vue'),
  meta: {
    title: 'ShowMedical',
  },
},
 
    {
      path: '/UserRegister',
      name: 'UserRegister',
      component: () => import('../views/User/UserRegister.vue'),
      meta: {
        title: 'User Register',
      },
    },
     
  ],
})

export default router

router.beforeEach((to, from, next) => {
  // document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})
