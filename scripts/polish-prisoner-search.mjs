import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const files = [
  path.join(__dirname, '../src/views/Prisioner/ShowPrisionerP.vue'),
  path.join(__dirname, '../src/views/Prisioner/ShowPrisionerM.vue'),
]

const SEARCH_TABLE = `\t\t<div class="app-table-wrap mt-8">
\t\t\t<div class="max-w-full overflow-x-auto custom-scrollbar">
\t\t\t\t<table class="app-table min-w-full">
\t\t\t\t\t<thead class="app-table-head">
\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t<th class="px-5 py-3.5 text-left">ስም</th>
\t\t\t\t\t\t\t<th class="px-5 py-3.5 text-left">የአባት ስም</th>
\t\t\t\t\t\t\t<th class="px-5 py-3.5 text-left">የአያት ስም</th>
\t\t\t\t\t\t\t<th class="px-5 py-3.5 text-left">የ/ወ/መ/ፍ/ቁጥር</th>
\t\t\t\t\t\t\t<th class="px-5 py-3.5 text-right">ድርጊቶች</th>
\t\t\t\t\t\t</tr>
\t\t\t\t\t</thead>
\t\t\t\t\t<tbody>
\t\t\t\t\t\t<tr v-if="PrisionerInfo.length === 0">
\t\t\t\t\t\t\t<td colspan="5" class="px-6 py-10">
\t\t\t\t\t\t\t\t<EmptyState :title="$t('common.noResults')" />
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr v-for="(user, index) in PrisionerInfo" :key="index" class="app-table-row">
\t\t\t\t\t\t\t<td class="px-5 py-4 sm:px-6">
\t\t\t\t\t\t\t\t<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.first_name }}</p>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class="px-5 py-4 sm:px-6">
\t\t\t\t\t\t\t\t<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.middle_name }}</p>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class="px-5 py-4 sm:px-6">
\t\t\t\t\t\t\t\t<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.last_name }}</p>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class="px-5 py-4 sm:px-6">
\t\t\t\t\t\t\t\t<p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.prisioner_unique_number }}</p>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t<td class="px-5 py-4 sm:px-6 text-right">
\t\t\t\t\t\t\t\t<button type="button" @click="fetchSinglePrisioner(user.id)" class="app-link-edit cursor-pointer">ተጨማሪ</button>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<div class="flex flex-wrap justify-center items-center mt-6 pb-4 gap-1">
\t\t\t\t\t<span v-for="page in (links ?? [])" :key="page.label" @click="page.url && fetchPrisioner(page.url)"
\t\t\t\t\t\t:class="['app-pagination-item',
\t\t\t\t\t\t\tpage.url ? 'cursor-pointer app-pagination-inactive' : 'cursor-not-allowed opacity-50',
\t\t\t\t\t\t\tpage.active ? 'app-pagination-active' : 'app-pagination-inactive'
\t\t\t\t\t\t]" v-html="page.label">
\t\t\t\t\t</span>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>`

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  const original = content

  content = content.replace(
    /class="bg-gray-800 shadow-2xl rounded-2xl w-full p-8 border border-gray-700"/,
    'class="app-search-panel w-full"',
  )
  content = content.replace(
    /class="text-3xl font-bold text-white text-center"/,
    'class="app-search-title text-center mb-8"',
  )
  content = content.replace(/class="block text-sm font-medium text-gray-300 mb-1"/g, 'class="app-label"')

  content = content.replace(
    /<div class="relative">\s*<span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">\s*<\/span>\s*<input type="text" v-model="(prisoner\.\w+)"\s*class="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\s*<\/div>/g,
    '<input type="text" v-model="$1" class="app-input">',
  )

  content = content.replace(
    /<div class="relative">\s*<span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">\s*\n\s*<\/span>\s*<input type="tel" v-model="(prisoner\.\w+)"\s*class="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">\s*<\/div>/g,
    '<input type="tel" v-model="$1" class="app-input">',
  )

  content = content.replace(
    /<div class="relative">\s*<select v-model="(prisoner\.\w+)"\s*class="w-full pl-3 pr-10 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">[\s\S]*?<\/select>[\s\S]*?<\/div>\s*<\/div>/g,
    (match, model) => {
      const options = match.match(/<option[\s\S]*<\/select>/)[0]
      return `<select v-model="${model}" class="app-select">\n\n\t\t\t\t\t\t\t${options}\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>`
    },
  )

  content = content.replace(
    /<div class="pt-6">\s*<button @click="fetchPrisioner\('', true\)"\s*class="w-1\/2 mr-10 py-3 bg-blue-600[\s\S]*?<\/div>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\n\t\t<\/div>\s*\n\t\t<div\s*\n\t\t\tclass="overflow-hidden[\s\S]*?<!-- pagination end -->\s*\n\n\t\t\t<\/div>\s*\n\t\t<\/div>/,
    `\t\t\t\t\t<div class="pt-6">
\t\t\t\t\t\t\t<div class="flex justify-between w-3/4 mx-auto">
\t\t\t\t\t\t\t\t<button @click="fetchPrisioner('', true)" class="app-btn-primary flex-1 py-3">
\t\t\t\t\t\t\t\t\t🔎 {{ searching ? 'Searching' : 'ይፈልጉ' }}
\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t\t<button @click="clearSearch()" class="app-btn-secondary flex-1 py-3 ml-4">
\t\t\t\t\t\t\t\t\tይሰርዙ
\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div v-if="errorMessage" class="text-error-600 text-center font-semibold mt-4 dark:text-error-400">
\t\t\t\t\t\t\t\t{{ errorMessage }}
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div v-if="successMessage" class="text-success-600 text-center font-semibold mt-4 dark:text-success-400">
\t\t\t\t\t\t\t\t{{ successMessage }}
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div v-if="noResults" class="text-amber-600 text-center font-semibold mt-4 dark:text-amber-400">
\t\t\t\t\t\t\t\t😕 በዚህ መረጃ ውስጥ የታሰረ ሰው አልተገኘም።
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>

${SEARCH_TABLE}`,
  )

  if (!content.includes("import EmptyState")) {
    content = content.replace(
      /import AdminLayoutMedical from/,
      "import EmptyState from '@/components/common/EmptyState.vue'\nimport AdminLayoutMedical from",
    )
    content = content.replace(
      /import PoliceLayout from/,
      "import EmptyState from '@/components/common/EmptyState.vue'\nimport PoliceLayout from",
    )
  }

  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log('Polished:', path.basename(file))
  }
}
