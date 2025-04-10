<template>
	
	  <PageBreadcrumb :pageTitle="currentPageTitle" />
		<div class="flex w-full ">
		<div class="w-1/2 mr-10 ">
		  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
			የእስረኛው የመቆያ ክፍል 
		  </label>
		  <div class="relative z-20 bg-transparent">
			<select
			  v-model="prisonerPersonalInfo.prision_cell_id"
			  class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			  :class="{ 'text-gray-800 dark:text-white/90': selectInput }"
			>
			  <option value="" disabled selected></option>
			  <option v-for="prisonerCell in prisonerCells" :key="prisonerCell.id" :value="prisonerCell.id">{{ prisonerCell.name }}</option>
  
			</select>
			<span
			  class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
			>
			  <svg
				class="stroke-current"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			  >
				<path
				  d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				  stroke=""
				  stroke-width="1.5"
				  stroke-linecap="round"
				  stroke-linejoin="round"
				/>
			  </svg>
			</span>
		  </div>
		</div>
		<div class="w-1/2">
		  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
			የእስረኛው አይነት 
		  </label>
		  <div class="relative z-20 bg-transparent">
			<select
			  v-model="prisonerPersonalInfo.criminal_type_id"
			  class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			  :class="{ 'text-gray-800 dark:text-white/90': selectInput }"
			>
			  <option value="" disabled selected></option>
			  <option v-for="criminalType in criminalTypes" :key="criminalType.id" :value="criminalType.id">{{ criminalType.name }}</option>
  
			</select>
			<span
			  class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
			>
			  <svg
				class="stroke-current"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			  >
				<path
				  d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				  stroke=""
				  stroke-width="1.5"
				  stroke-linecap="round"
				  stroke-linejoin="round"
				/>
			  </svg>
			</span>
		  </div>
		</div>
	</div>
  
  <!-- ///// -->
	<div class="flex w-full mt-5">
	  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  አሁን የሚኖርበት ዞን 
		</label>
		<div class="relative z-20 bg-transparent">
		  <select
			v-model="prisonerPersonalInfo.current_city_id"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			:class="{ 'text-gray-800 dark:text-white/90': selectInput }"
		  >
			<option value="" disabled selected></option>
			<option v-for="City in cities" :key="City.id" :value="City.id">{{ City.name }}</option>
  
		  </select>
		  <span
			class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="stroke-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				stroke=""
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			  />
			</svg>
		  </span>
		</div>
	  </div>
	  <div class="w-1/2">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		 የትምርት ደረጃ 
		</label>
		<div class="relative z-20 bg-transparent">
		  <select
			v-model="prisonerPersonalInfo.educational_level_id"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			:class="{ 'text-gray-800 dark:text-white/90': selectInput }"
		  >
			<option value="" disabled selected></option>
			<option v-for="education in educationalLevels" :key="education.id" :value="education.id">{{ education.name }}</option>
  
		  </select>
		  <span
			class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="stroke-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				stroke=""
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			  />
			</svg>
		  </span>
		</div>
	  </div>
  </div>
  <!-- ////////////// -->
  <div class="flex w-full mt-5">
	  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  ሀይማኖት 
		</label>
		<div class="relative z-20 bg-transparent">
		  <select
			v-model="prisonerPersonalInfo.religion_id"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			:class="{ 'text-gray-800 dark:text-white/90': selectInput }"
		  >
			<option value="" disabled selected></option>
			<option v-for="religion in religions" :key="religion.id" :value="religion.id">{{ religion.name }}</option>
  
		  </select>
		  <span
			class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="stroke-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				stroke=""
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			  />
			</svg>
		  </span>
		</div>
	  </div>
  
	  <div class="w-1/2 ">
		  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
			የቅርብ ተጠሪ
		  </label>
		  <input
			type="text"
			v-model="prisonerPersonalInfo.closest_respondent"
		 
			class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
		  />
		</div>
   
  
  </div>
  
	  <div class="flex w-full mt-5">
  
  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  የቅርብ ተጠሪ መኖሪያ ከተማ 
		</label>
		<div class="relative z-20 bg-transparent">
		  <select
			v-model="prisonerPersonalInfo.closest_respondent_town_id"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			:class="{ 'text-gray-800 dark:text-white/90': selectInput }"
		  >
			<option value="" disabled selected></option>
			<option v-for="town in towns" :key="town.id"  :value="town.id">{{ town.name }}</option>
  
		  </select>
		  <span
			class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="stroke-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
				stroke=""
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			  />
			</svg>
		  </span>
		</div>
	  </div>
		<div class="w-1/2">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  የቅርብ ተጠሪ መኖሪያ ቀበሌ 
		</label>
		<input
		  type="text"
		  
		  v-model="prisonerPersonalInfo.closest_respondent_district"
		  class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
		/>
	  </div>
	  </div>
  
	  <div class="flex w-full mt-5">
		<div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  የታሰረበት ቀን 
		</label>
		<div class="relative">
		  <flat-pickr
	
			v-model="prisonerPersonalInfo.date_time_entered"
			:config="flatpickrConfig"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			placeholder="Select date"
		  />
		  <span
			class="absolute text-gray-500 cursor-pointer -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="fill-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
				fill=""
			  />
			</svg>
		  </span>
		</div>
	  </div>
  
	  <div class="w-1/2">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  ፎቶ ያስገቡ 
		</label>
		<input
	
		@change="handlePhoto"
		accept="image/*"
		  type="file"
		  class="focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400"
		/>
	  </div>
  
	  </div>
  
	  <div class="flex w-full mt-5">
  
  
  
	  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  እስራቱን ጨርሶ የሚፈታበት ቀን
		</label>
		<div class="relative">
		  <flat-pickr
		
			v-model="prisonerPersonalInfo.date_of_release"
			:config="flatpickrConfig"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			placeholder="Select date"
		  />
		  <span
			class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="fill-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
				fill=""
			  />
			</svg>
		  </span>
		</div>
	  </div>
		<div class="w-1/2 ">
		  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
			ስራ 
		  </label>
		  <input
   
			type="text"
			v-model="prisonerPersonalInfo.job"
			class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
		  />
		</div>
		<!-- ///////// -->
	  </div>
	  <div class="flex w-full mt-5">
		<div class="w-1/2 mr-10">
		  <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
			አሁን የሚኖርበት ቀበሌ 
		  </label>
		  <input
	  
			type="text"
			v-model="prisonerPersonalInfo.current_district"
			class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
		  />
		</div>
  <!-- ///// -->
  <div class="w-1/2">
	<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
	  ሞባይል ስልክ
	</label>
	<div class="relative">
	  <input
	 
		v-model="prisonerPersonalInfo.phone_number"
		placeholder="ሞባይል ስልክ (e.g., 555-000-0000)"
		type="tel"
		class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
	  />
	</div>
  </div>
	  
	  
	</div>
	<div class="flex w-full mt-5">
	  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  የመፈቻ ምክንያት
		</label>
		<input
	  
		  type="text"
		  v-model="prisonerPersonalInfo.release_reason"
		  class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
		/>
	  </div>
  
  
	  <!-- ///// -->
  <div class="w-1/2">
	<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
	  የቤት ስልክ
	</label>
	<div class="relative">
	  <input
	 
		v-model="prisonerPersonalInfo.mobile_number"
		placeholder="የቤት ስልክ (e.g., 555-000-0000)"
		type="tel"
		class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
	  />
	</div>
  </div>
  
	</div>
	<div class="flex w-full mt-5">
	  <div class="w-1/2 mr-10">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  በምህረት የሚፈታበት ቀን 
		</label>
		<div class="relative">
		  <flat-pickr
		
			v-model="prisonerPersonalInfo.date_of_mercy_release"
			:config="flatpickrConfig"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			placeholder="Select date"
		  />
		  <span
			class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="fill-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
				fill=""
			  />
			</svg>
		  </span>
		</div>
	  </div>
	  <div class="w-1/2 ">
		<label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
		  የእስር ቅጣቱ ያለቀበት ቀን
		</label>
		<div class="relative">
		  <flat-pickr
	   
			v-model="prisonerPersonalInfo.end_date_of_arrest "
			:config="flatpickrConfig"
			class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
			placeholder="Select date"
		  />
		  <span
			class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
		  >
			<svg
			  class="fill-current"
			  width="20"
			  height="20"
			  viewBox="0 0 20 20"
			  fill="none"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.66659 1.5415C7.0808 1.5415 7.41658 1.87729 7.41658 2.2915V2.99984H12.5833V2.2915C12.5833 1.87729 12.919 1.5415 13.3333 1.5415C13.7475 1.5415 14.0833 1.87729 14.0833 2.2915V2.99984L15.4166 2.99984C16.5212 2.99984 17.4166 3.89527 17.4166 4.99984V7.49984V15.8332C17.4166 16.9377 16.5212 17.8332 15.4166 17.8332H4.58325C3.47868 17.8332 2.58325 16.9377 2.58325 15.8332V7.49984V4.99984C2.58325 3.89527 3.47868 2.99984 4.58325 2.99984L5.91659 2.99984V2.2915C5.91659 1.87729 6.25237 1.5415 6.66659 1.5415ZM6.66659 4.49984H4.58325C4.30711 4.49984 4.08325 4.7237 4.08325 4.99984V6.74984H15.9166V4.99984C15.9166 4.7237 15.6927 4.49984 15.4166 4.49984H13.3333H6.66659ZM15.9166 8.24984H4.08325V15.8332C4.08325 16.1093 4.30711 16.3332 4.58325 16.3332H15.4166C15.6927 16.3332 15.9166 16.1093 15.9166 15.8332V8.24984Z"
				fill=""
			  />
			</svg>
		  </span>
		</div>
	  </div>
	</div>
	<div class="">
	  <div class="ml-56 mt-6">
		<button :class="[
				'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
				sizeClasses[size],
				variantClasses[variant],
				className,
				{ 'cursor-not-allowed opacity-50': disabled },
			]" @click="registerPrisonerApperance" :disabled="disabled">
				<span v-if="startIcon" class="flex items-center"> </span>
				{{ !saving ? 'Save & Continue' : 'Saving...' }}
				<span v-if="endIcon" class="flex items-center">

				</span>
			</button>
	  </div>
	</div>
	
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, onMounted, computed } from 'vue'
  import axios from 'axios'
  import Button from '@/components/ui/Button.vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
  
  const route = useRoute();
  const router = useRouter();
  
  const emit = defineEmits(['prisonerPersonalInfoSaved']);
  
  const store = useStore();
  const apiServer = computed(() => store.state.apiServer);
  
  const religions = ref([])
  const towns = ref([])
  const cities = ref([])
  const educationalLevels = ref([])
   const prisonerCells = ref([]);
	const criminalTypes = ref([]);
  const saving = ref(false);
  const errorMessage = ref('');
  
  const prisonerPersonalInfo = ref({
	prisioner_id:null,
	   photo: null,
		  prision_cell_id:null,
		  criminal_type_id: null,
		  current_city_id: null,
		  educational_level_id: null,
		  religion_id: null,
		  closest_respondent: '',
		  closest_respondent_town_id: null,
		  current_district: '',
		  closest_respondent_district: '',
		  job: '',
		  phone_number: '',
		  mobile_number: '',
		  date_time_entered: '',
		  end_date_of_arrest: '',
		  date_of_release: '',
		  release_reason: '',
		  date_of_mercy_release: '',
  })
  
  const fetchReligion = async () => { axios.get(apiServer.value + 'religion').then(response => { religions.value = response.data.data; }) }
  const fetchTowns = async () => { axios.get(apiServer.value + 'town').then(response => { towns.value = response.data.data; }) }
  const fetchCities = async () => { axios.get(apiServer.value + 'city').then(response => { cities.value = response.data.data; }) }
  const fetchEducationalLevels = async () => { axios.get(apiServer.value + 'education').then(response => { educationalLevels.value = response.data.data; }) }
  const fetchPrisonerCell = async () => { axios.get(apiServer.value + 'prisonerCell').then(response => { prisonerCells.value = response.data.data; }) }
  const fetchCriminalType= async () => { axios.get(apiServer.value + 'criminalType').then(response => { criminalTypes.value = response.data.data; }) }
  
	
	  const handlePhoto = (event) => {
	  const file = event.target.files[0].name; 
	  if (file) {
		prisonerPersonalInfo.value.photo = file; 
		console.log('photo', prisonerPersonalInfo.value.photo);
	  }
	};
  const registerPrisonerApperance = async () => {
	  if (saving.value == true) return;
  
	  errorMessage.value = ''
	  saving.value = true
  
	  axios
		  .post(apiServer.value + 'prisoner/personal-info', {
			prison_history_id: route.query.prison_history_id,
			  prision_cell_id: prisonerPersonalInfo.value.prision_cell_id,
			  criminal_type_id: prisonerPersonalInfo.value.criminal_type_id,
			  current_city_id: prisonerPersonalInfo.value.current_city_id,
			  educational_level_id: prisonerPersonalInfo.value.educational_level_id,
			  religion_id: prisonerPersonalInfo.value.religion_id,
			  closest_respondent: prisonerPersonalInfo.value.closest_respondent,
			  closest_respondent_town_id: prisonerPersonalInfo.value.closest_respondent_town_id,
			  current_district: prisonerPersonalInfo.value.current_district,
			  closest_respondent_district: prisonerPersonalInfo.value.closest_respondent_district,
			  job: prisonerPersonalInfo.value.job,
			  phone_number: prisonerPersonalInfo.value.phone_number,
			  mobile_number: prisonerPersonalInfo.value.mobile_number,
			  date_time_entered: prisonerPersonalInfo.value.date_time_entered,
			  end_date_of_arrest: prisonerPersonalInfo.value.end_date_of_arrest,
			  date_of_release: prisonerPersonalInfo.value.date_of_release,
			  release_reason: prisonerPersonalInfo.value.release_reason,
			  date_of_mercy_release: prisonerPersonalInfo.value.date_of_mercy_release,
			  photo: prisonerPersonalInfo.value.photo,
		  })
		  .then(response => {
			  saving.value = false
			  emit('prisonerPersonalInfoSaved');
		  })
		  .catch(error => {
			  errorMessage.value = error.response.data.message
			  saving.value = false
		  })
  }
  onMounted(() => {
	  fetchReligion();
	  fetchTowns();
	  fetchCities();
	  fetchEducationalLevels();
	  fetchPrisonerCell();
	  fetchCriminalType();
  });
  
  const currentPageTitle = ref('የታራሚዎቺ መረጃ ምዝገባ Third ቅጽ  ')
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