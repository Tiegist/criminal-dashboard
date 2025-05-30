<template>
  <aside
    :class="[
     'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200',
      {
        'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
        'lg:w-[90px]': !isExpanded && !isHovered,
        'translate-x-0 w-[290px]': isMobileOpen,
        '-translate-x-full': !isMobileOpen,
        'lg:translate-x-0': true,
      },
    ]"
    @mouseenter="!isExpanded && (isHovered = true)"
    @mouseleave="isHovered = false"
  >
    <div
      :class="[
        'py-4 flex',
        !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
      ]"
    >
      <router-link to="/">
        <div class="flex">

        <img
          v-if="isExpanded || isHovered || isMobileOpen"
          class="dark:hidden"
          src="/criminallogo.png"
          alt="Logo"
          width="60"
          height="20"
          color="white"
        />
        <img
          v-if="isExpanded || isHovered || isMobileOpen"
          class="hidden dark:block"
          src="/images/logo/logo-dark.svg"
          alt="Logo"
          width="150"
          height="40"
        />
        <img
          v-else
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width="32"
          height="32"
        />
        <span class="mt-5 text-white">
          ኮምቦልቻ ማረሚያ ቤት
        </span>
      </div>

      </router-link>
    </div>
    <div
      class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar"
    >
      <nav class="mb-6">
        <div class="flex flex-col gap-4">
          <div v-for="(menuGroup, groupIndex) in menuGroups" :key="groupIndex">
            <h2
              :class="[
                'mb-4 text-xs uppercase flex leading-[20px] text-gray-200',
                !isExpanded && !isHovered
                  ? 'lg:justify-center'
                  : 'justify-start',
              ]"
            >
              <template v-if="isExpanded || isHovered || isMobileOpen" >
                {{ menuGroup.title }}
              </template>
              <HorizontalDots v-else />
            </h2>
            <ul class="flex flex-col gap-4">
              <li v-for="(item, index) in menuGroup.items" :key="item.name">
                <button
                  v-if="item.subItems"
                  @click="toggleSubmenu(groupIndex, index)"
                  :class="[
                    'menu-item group w-full',
                    {
                      'menu-item-active': isSubmenuOpen(groupIndex, index),
                      'menu-item-inactive': !isSubmenuOpen(groupIndex, index),
                    },
                    !isExpanded && !isHovered
                      ? 'lg:justify-center'
                      : 'lg:justify-start',
                  ]"
                >
                  <span
                    :class="[
                      isSubmenuOpen(groupIndex, index)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span
                    v-if="isExpanded || isHovered || isMobileOpen"
                    class="menu-item-text"
                    >{{ item.name }}</span
                  >
                  <ChevronDownIcon
                    v-if="isExpanded || isHovered || isMobileOpen"
                    :class="[
                      'ml-auto w-5 h-5 transition-transform duration-200 text-white',
                      {
                        'rotate-180 text-brand-500': isSubmenuOpen(
                          groupIndex,
                          index
                        ),
                      },
                    ]"
                  />
                </button>
                <router-link
                  v-else-if="item.path"
                  :to="item.path"
                  :class="[
                    'menu-item group',
                    {
                      'menu-item-active': isActive(item.path),
                      'menu-item-inactive': !isActive(item.path),
                    },
                  ]"
                >
                  <span
                    :class="[
                      isActive(item.path)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span
                    v-if="isExpanded || isHovered || isMobileOpen"
                    class="menu-item-text"
                    >{{ item.name }}</span
                  >
                </router-link>
                <transition
                  @enter="startTransition"
                  @after-enter="endTransition"
                  @before-leave="startTransition"
                  @after-leave="endTransition"
                >
                  <div
                    v-show="
                      isSubmenuOpen(groupIndex, index) &&
                      (isExpanded || isHovered || isMobileOpen)
                    "
                  >
                    <ul class="mt-2 space-y-1 ml-9">
                      <li v-for="subItem in item.subItems" :key="subItem.name">
                        <router-link
                          :to="subItem.path"
                          :class="[
                            'menu-dropdown-item',
                            {
                              'menu-dropdown-item-active': isActive(
                                subItem.path
                              ),
                              'menu-dropdown-item-inactive': !isActive(
                                subItem.path
                              ),
                            },
                          ]"
                        >
                          {{ subItem.name }}
                          <span class="flex items-center gap-1 ml-auto text-white">
                            <span
                              v-if="subItem.new"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              new
                            </span>
                            <span
                              v-if="subItem.pro"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              pro
                            </span>
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import {
  GridIcon,
  CalenderIcon,
  UserCircleIcon,
  ChatIcon,
  MailIcon,
  DocsIcon,
  PieChartIcon,
  ChevronDownIcon,
  HorizontalDots,
  PageIcon,
  TableIcon,
  ListIcon,
  PlugInIcon,
} from "../../icons";
import SidebarWidget from "./SidebarWidget.vue";
import BoxCubeIcon from "@/icons/BoxCubeIcon.vue";
import { useSidebar } from "@/composables/useSidebar";

const route = useRoute();

const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebar();

const menuGroups = [
  {
    title: "አማራጮች",
    items: [
      
      // {
      //   icon: GridIcon,
      //   name: "ዳሽቦርድ",
      //   path: "/",
      //   class: 'text-white'
      // },
      {
        icon: UserCircleIcon,
        name: "የግል መረጃ",
        path: "/profiled",
      },
      // {
      //   icon: ListIcon,
      //   name: "የሰራተኞች መረጃ መመዝገቢያ ",
      //   path: "/UserRegister",
      // },
      // {
      //   name: "መረጃ መሙያ ቅጽ",
      //   icon: ListIcon,
      //   subItems: [
      //     // { name: "Form Elements", path: "/form-elements", pro: false },
      //     // { name: "የእስረኞች መረጃ ቅጽ", path: "/prisoner-form", pro: false },
      //     // { name: "የእስረኞች ታሪክ ቅጽ", path: "/PrisonerHistory", pro: false },
      //     // { name: "የእስረኞች ወንጀል ቅጽ", path: "/PrisonerCrimes", pro: false },
      //     // { name: "የእስረኞች የፍርድ ቤት ታሪክ ቅጽ", path: "/PrisionerCourtHistory", pro: false },  
      //     // { name: "Prisioner", path: "/Prisioner", pro: false },
      //     // { name: "የእስረኞች ገጽታ ቅጽ", path: "/PrisionerApperance", pro: false },
      //     // { name: "የእስረኞች ንብረት ቅጽ ", path: "/PrisionerProperty", pro: false },
      //     // { name: "የእስረኞች ገንዘብ ቅጽ", path: "/CriminalCash", pro: false },
      //     { name: "የእስረኞች የህክምና ታሪክ ቅጽ", path: "/MedicalHistoryD", pro: false },
         
   
      //   ],
      // },
      {
        name: "የእስረኛ መረጃ ማሳያ",
        icon: ListIcon,
        subItems: [
          
          { name: "የእስረኛ መረጃ ማሳያ", path: "/ShowPrisioner", pro: false },
          // { name: "የእስረኛ የህክምና መረጃ ", path: "/ShowMedical", pro: false },
          // { name: "የእስረኛ ገንዘብ ማሳያ", path: "/ShowPrisonerCash", pro: false },
          { name: "የእስረኛ የህክምና ታሪክ ማሳያ", path: "/ShowMedicalInfoD", pro: false },
        ],
      },
      // {
      //   name: "ቦታዎች",
      //   icon: ListIcon,
      //   subItems: [
      //     { name: "ክልል ", path: "/regions", pro: false },
      //     { name: "ዞን", path: "/cities", pro: false },
      //     { name: "ወረዳ", path: "/towns", pro: false },
      //   ],
      // },
      // {
      //   name: "የሰዉነት ገጽታዎቺ",
      //   icon: ListIcon,
      //   subItems: [
      //     { name: "የጸጉር አይነት", path: "/hair", pro: false },
      
      //     { name: "ጥርስ", path: "/Teeths", pro: false },
      //     { name: "አፍንጫ", path: "/Noses", pro: false },
      //     { name: "ከንፈር", path: "/Lips", pro: false },
      //     { name: "ጆሮ", path: "/Ears", pro: false },
      //     { name: "የአይን ቀለም", path: "/Eyes", pro: false },
      //   ],
      // },
      {
        name: "ተጨማሪ መረጃዎች",
        icon: ListIcon,
        subItems: [
          // { name: "ሀይማኖቶች", path: "/religions", pro: false },
          { name: "የበሽታ አይነቶች", path: "/disease-types", pro: false },
          // { name: "ብሄር", path: "/EthnicGroup", pro: false },
          // { name: "የወንጀል አይነቶች", path: "/Crimes", pro: false },
          // { name: "የወንጀለኛ አይነቶች", path: "/CriminalType", pro: false },
          // { name: "የትምህርት ደረጃ", path: "/EducationalLevel", pro: false },
          // { name: "የንብረት አይነቶች", path: "/PropertyType", pro: false },
          // { name: "የእስረኛው ክፍል", path: "/PrisonerCell", pro: false },
          // { name: "ፍርድ ቤቶች", path: "/PrisonerCell", pro: false },
        ],
      },
     

      // {
      //   name: "Forms",
      //   icon: ListIcon,
      //   subItems: [
      //     { name: "Form Elements", path: "/form-elements", pro: false },
      //     { name: "Prisoner Form", path: "/prisoner-form", pro: false },
      //     { name: "prisoner history", path: "/PrisonerHistory", pro: false },
      //     { name: "Prisioner crime", path: "/PrisonerCrimes", pro: false },
      //     { name: "Prisioner Court History", path: "/PrisionerCourtHistory", pro: false },
      //     // { name: "Prisioner", path: "/Prisioner", pro: false },
      //     { name: "Prisioner Apperance", path: "/PrisionerApperance", pro: false },
      //     { name: "Prisioner Property", path: "/PrisionerProperty", pro: false },
      //     { name: "prisoner cash", path: "/CriminalCash", pro: false },
      //     { name: "Medical History", path: "/MedicalHistory", pro: false },
      //     { name: "User Register", path: "/UserRegister", pro: false },
      //     { name: "show Prisioner", path: "/ShowPrisioner", pro: false },
      //     { name: "show Medical", path: "/ShowMedical", pro: false },
      //     { name: "prisoner cash", path: "/ShowPrisonerCash", pro: false },
      //   ],
      // },
      

      
     
    ],
  },
  // {
  //   title: "Others",
  //   items: [
  //     {
  //       icon: PieChartIcon,
  //       name: "Charts",
  //       subItems: [
  //         { name: "Line Chart", path: "/line-chart", pro: false },
  //         { name: "Bar Chart", path: "/bar-chart", pro: false },
  //       ],
  //     },
  //     {
  //       icon: BoxCubeIcon,
  //       name: "Ui Elements",
  //       subItems: [
  //         { name: "Alerts", path: "/alerts", pro: false },
  //         { name: "Avatars", path: "/avatars", pro: false },
  //         { name: "Badge", path: "/badge", pro: false },
  //         { name: "Buttons", path: "/buttons", pro: false },
  //         { name: "Images", path: "/images", pro: false },
  //         { name: "Videos", path: "/videos", pro: false },
  //       ],
  //     },
  //     {
  //       icon: PlugInIcon,
  //       name: "Authentication",
  //       subItems: [
  //         { name: "Signin", path: "/signin", pro: false },
  //         { name: "Signup", path: "/signup", pro: false },
  //       ],
  //     },

  //   ],
  // },
];

const isActive = (path) => route.path === path;

const toggleSubmenu = (groupIndex, itemIndex) => {
  const key = `${groupIndex}-${itemIndex}`;
  openSubmenu.value = openSubmenu.value === key ? null : key;
};

const isAnySubmenuRouteActive = computed(() => {
  return menuGroups.some((group) =>
    group.items.some(
      (item) =>
        item.subItems && item.subItems.some((subItem) => isActive(subItem.path))
    )
  );
});

const isSubmenuOpen = (groupIndex, itemIndex) => {
  const key = `${groupIndex}-${itemIndex}`;
  return (
    openSubmenu.value === key ||
    (isAnySubmenuRouteActive.value &&
      menuGroups[groupIndex].items[itemIndex].subItems?.some((subItem) =>
        isActive(subItem.path)
      ))
  );
};

const startTransition = (el) => {
  el.style.height = "auto";
  const height = el.scrollHeight;
  el.style.height = "0px";
  el.offsetHeight; // force reflow
  el.style.height = height + "px";
};

const endTransition = (el) => {
  el.style.height = "";
};
</script>
