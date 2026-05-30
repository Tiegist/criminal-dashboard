import {
  GridIcon,
  UserCircleIcon,
  ListIcon,
} from '@/icons'

export interface NavSubItem {
  nameKey: string
  path: string
}

export interface NavItem {
  nameKey: string
  icon?: object
  path?: string
  subItems?: NavSubItem[]
}

export interface NavGroup {
  titleKey: string
  items: NavItem[]
}

export const adminMenuGroups: NavGroup[] = [
  {
    titleKey: 'common.menu',
    items: [
      { icon: GridIcon, nameKey: 'nav.dashboard', path: '/' },
      { icon: UserCircleIcon, nameKey: 'nav.profile', path: '/profile' },
      { icon: UserCircleIcon, nameKey: 'nav.staff', path: '/usersList' },
      { icon: ListIcon, nameKey: 'nav.staffRegistration', path: '/UserRegister' },
      {
        nameKey: 'nav.dataForms',
        icon: ListIcon,
        subItems: [{ nameKey: 'nav.prisonerForm', path: '/prisoner-form' }],
      },
      {
        nameKey: 'nav.prisonerDisplay',
        icon: ListIcon,
        subItems: [
          { nameKey: 'nav.prisonerInfoDisplay', path: '/ShowPrisioner' },
          { nameKey: 'nav.prisonerCashDisplay', path: '/ShowCashHistory' },
          { nameKey: 'nav.prisonerCashTransactions', path: '/ShowCashTransactions' },
          { nameKey: 'nav.prisonerMedicalHistory', path: '/ShowMedicalInfo' },
          { nameKey: 'nav.prisonerAttendance', path: '/showAttendance' },
        ],
      },
      {
        nameKey: 'nav.locations',
        icon: ListIcon,
        subItems: [
          { nameKey: 'nav.region', path: '/regions' },
          { nameKey: 'nav.zone', path: '/cities' },
          { nameKey: 'nav.district', path: '/towns' },
        ],
      },
      {
        nameKey: 'nav.appearance',
        icon: ListIcon,
        subItems: [
          { nameKey: 'nav.hairType', path: '/hair' },
          { nameKey: 'nav.teeth', path: '/Teeths' },
          { nameKey: 'nav.nose', path: '/Noses' },
          { nameKey: 'nav.lips', path: '/Lips' },
          { nameKey: 'nav.ears', path: '/Ears' },
          { nameKey: 'nav.eyeColor', path: '/Eyes' },
        ],
      },
      {
        nameKey: 'nav.additionalInfo',
        icon: ListIcon,
        subItems: [
          { nameKey: 'nav.religions', path: '/religions' },
          { nameKey: 'nav.diseaseTypes', path: '/disease-types' },
          { nameKey: 'nav.ethnicGroup', path: '/EthnicGroup' },
          { nameKey: 'nav.crimeTypes', path: '/Crimes' },
          { nameKey: 'nav.criminalTypes', path: '/CriminalType' },
          { nameKey: 'nav.educationLevel', path: '/EducationalLevel' },
          { nameKey: 'nav.propertyTypes', path: '/PropertyType' },
          { nameKey: 'nav.prisonerCell', path: '/PrisonerCell' },
          { nameKey: 'nav.courts', path: '/Courts' },
        ],
      },
    ],
  },
]

export const policeMenuGroups: NavGroup[] = [
  {
    titleKey: 'common.menu',
    items: [
      { icon: UserCircleIcon, nameKey: 'nav.profile', path: '/ProfileP' },
      {
        nameKey: 'nav.dataForms',
        icon: ListIcon,
        subItems: [{ nameKey: 'nav.prisonerForm', path: '/prisoner-formP' }],
      },
      {
        nameKey: 'nav.prisonerDisplay',
        icon: ListIcon,
        subItems: [{ nameKey: 'nav.prisonerInfoDisplay', path: '/ShowPrisionerP' }],
      },
    ],
  },
]

export const medicalMenuGroups: NavGroup[] = [
  {
    titleKey: 'common.menu',
    items: [
      { icon: UserCircleIcon, nameKey: 'nav.profile', path: '/profiled' },
      {
        nameKey: 'nav.prisonerDisplay',
        icon: ListIcon,
        subItems: [
          { nameKey: 'nav.prisonerInfoDisplay', path: '/ShowPrisionerM' },
          { nameKey: 'nav.prisonerMedicalHistory', path: '/ShowMedicalInfoD' },
        ],
      },
      {
        nameKey: 'nav.additionalInfo',
        icon: ListIcon,
        subItems: [{ nameKey: 'nav.diseaseTypes', path: '/disease-typesM' }],
      },
    ],
  },
]
