import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const viewsDir = path.join(__dirname, '../src/views/Criminal')

const files = [
  'Appearance/HairType.vue',
  'Appearance/Teeths.vue',
  'Appearance/Noses.vue',
  'Appearance/Lips.vue',
  'Appearance/Ears.vue',
  'Appearance/Eyes.vue',
  'Appearance/EthnicGroup.vue',
  'Appearance/EducationalLevel.vue',
  'Appearance/CriminalType.vue',
  'Appearance/PropertyType.vue',
  'Appearance/PrisonerCell.vue',
  'Appearance/Courts.vue',
  'Location/Region.vue',
  'Location/City.vue',
  'Location/Town.vue',
  'Religion.vue',
  'DiseaseType.vue',
  'DiseaseTypeM.vue',
]

const inputClassOld =
  /class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2\.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500\/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white\/90 dark:placeholder:text-white\/30 dark:focus:border-brand-800"/g

const labelClassOld =
  /class="mb-1\.5 block text-sm font-medium text-gray-700 dark:text-gray-400"/g

const modalRegex =
  /\t\t<div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">[\s\S]*?\t\t<\/div>\n/m

function polish(content) {
  let out = content

  out = out.replace(inputClassOld, 'class="app-input"')
  out = out.replace(labelClassOld, 'class="app-label"')
  out = out.replace(
    '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">',
    '<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">\n\t\t\t<div class="lg:col-span-5 xl:col-span-4">',
  )
  out = out.replace(
    /\t\t\t<div class="space-y-6">\n\t\t\t\t<ComponentCard/,
    '\t\t\t\t<ComponentCard',
  )
  out = out.replace(
    /\t\t\t<\/ComponentCard>\n\t\t\t<\/div>\n\n\t\t\t<div\n\t\t\t\tclass="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white\/\[0\.03\]">[\s\S]*?\t\t\t<\/div>\n\n\t\t<\/div>/m,
    (match) => {
      const tableBodyMatch = match.match(/<tbody>([\s\S]*?)<\/tbody>/)
      const tbody = tableBodyMatch ? tableBodyMatch[1] : ''
      const rowMatch = tbody.match(/v-for="(\w+) in (\w+)"/)
      const itemVar = rowMatch ? rowMatch[1] : 'item'
      const listVar = rowMatch ? rowMatch[2] : 'items'

      const editMatch = tbody.match(/@click="(\w+)\((\w+)\)"/)
      const editFn = editMatch ? editMatch[1] : 'editItem'
      const deleteLinkMatch = tbody.match(/@click="confirmDelete\((\w+)\)"/)

      let newTbody = tbody
        .replace(/class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"/g, 'class="app-table-row"')
        .replace(
          /<a @click="(\w+)\((\w+)\)"\s*class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">[^<]+<\/a>\s*\|\s*<a @click="confirmDelete\((\w+)\)" class="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">[^<]+<\/a>/g,
          `<div class="flex justify-end gap-3">
\t\t\t\t\t\t\t\t\t<button type="button" @click="$1($2)" class="app-link-edit">{{ $t('common.edit') }}</button>
\t\t\t\t\t\t\t\t\t<button type="button" @click="confirmDelete($3)" class="app-link-delete">{{ $t('common.delete') }}</button>
\t\t\t\t\t\t\t\t</div>`,
        )
        .replace(
          /<a @click="(\w+)\((\w+)\)"\s*class="font-medium text-blue-600 dark:text-blue-500 hover:underline">[^<]+<\/a>\s*\|\s*<a @click="confirmDelete\((\w+)\)" class="font-medium text-red-600 dark:text-red-500 hover:underline">[^<]+<\/a>/g,
          `<div class="flex justify-end gap-3">
\t\t\t\t\t\t\t\t\t<button type="button" @click="$1($2)" class="app-link-edit">{{ $t('common.edit') }}</button>
\t\t\t\t\t\t\t\t\t<button type="button" @click="confirmDelete($3)" class="app-link-delete">{{ $t('common.delete') }}</button>
\t\t\t\t\t\t\t\t</div>`,
        )

      newTbody = newTbody.replace(
        /(<tbody>[\s\S]*)(<tr v-for)/,
        `$1<tr v-if="${listVar}.length === 0">
\t\t\t\t\t\t\t\t<td colspan="2" class="px-6 py-10">
\t\t\t\t\t\t\t\t\t<EmptyState :title="$t('common.noData')" />
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t$2`,
      )

      return `\t\t\t</ComponentCard>
\t\t\t</div>

\t\t\t<div class="lg:col-span-7 xl:col-span-8">
\t\t\t\t<div class="app-table-wrap">
\t\t\t\t\t<div class="max-w-full overflow-x-auto custom-scrollbar">
\t\t\t\t\t\t<table class="app-table">
\t\t\t\t\t\t\t<thead class="app-table-head">
\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t<th scope="col" class="px-6 py-3.5">{{ $t('common.name') }}</th>
\t\t\t\t\t\t\t\t\t<th scope="col" class="px-6 py-3.5 text-right">{{ $t('common.action') }}</th>
\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t</thead>
\t\t\t\t\t\t\t<tbody>${newTbody}
\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t</table>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>

\t\t</div>`
    },
  )

  const modalMatch = content.match(/<span class="text-teal-600">\{\{\s*(\w+)\.name\s*\}\}<\/span>/)
  const entityVar = modalMatch ? modalMatch[1] : 'item'
  const deleteMatch = content.match(/@click="(\w+)\(\)" class="px-4 py-2 bg-blue-600/)
  const deleteFn = deleteMatch ? deleteMatch[1] : 'deleteItem'

  out = out.replace(
    modalRegex,
    `\t\t<ConfirmDialog
\t\t\tv-model="isModalOpen"
\t\t\t:item-name="${entityVar}.name"
\t\t\t@confirm="${deleteFn}()"
\t\t/>\n`,
  )

  out = out.replace(
    /<PageBreadcrumb :pageTitle="currentPageTitle" \/>/,
    '<PageBreadcrumb :pageTitle="currentPageTitle" :pageTitleKey="pageTitleKey" />',
  )

  if (!out.includes('ConfirmDialog')) {
    out = out.replace(
      "import Button from '@/components/ui/Button.vue'",
      "import Button from '@/components/ui/Button.vue'\nimport ConfirmDialog from '@/components/ui/ConfirmDialog.vue'\nimport EmptyState from '@/components/common/EmptyState.vue'",
    )
    out = out.replace(
      /components:\s*\{([^}]+)\}/,
      (m, inner) => {
        if (inner.includes('ConfirmDialog')) return m
        return `components: {${inner}\n\t\tConfirmDialog,\n\t\tEmptyState,`
      },
    )
  } else if (!out.includes('EmptyState')) {
    out = out.replace(
      "import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'",
      "import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'\nimport EmptyState from '@/components/common/EmptyState.vue'",
    )
    out = out.replace(/ConfirmDialog,/, 'ConfirmDialog,\n\t\tEmptyState,')
  }

  if (!out.includes('pageTitleKey')) {
    out = out.replace(
      /data\(\)\s*\{\s*\n\s*return\s*\{/,
      `data() {
		return {
			pageTitleKey: '',`,
    )
  }

  return out
}

for (const file of files) {
  const filePath = path.join(viewsDir, file)
  if (!fs.existsSync(filePath)) {
    console.warn('Skip missing:', file)
    continue
  }
  const original = fs.readFileSync(filePath, 'utf8')
  const updated = polish(original)
  if (updated !== original) {
    fs.writeFileSync(filePath, updated)
    console.log('Updated:', file)
  } else {
    console.log('No changes:', file)
  }
}
