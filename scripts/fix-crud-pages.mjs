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

function fix(content) {
  let out = content

  out = out.replace(/\s*<\/div>\s*<\/div>\s*<\/AdminLayout>/, '\n\t</AdminLayout>')

  out = out.replace(
    ':pageTitle="currentPageTitle" :pageTitleKey="pageTitleKey"',
    ':pageTitle="currentPageTitle"',
  )

  if (out.includes('ConfirmDialog') && !out.includes("import ConfirmDialog")) {
    out = out.replace(
      "import Button from '@/components/ui/Button.vue'",
      "import Button from '@/components/ui/Button.vue'\nimport ConfirmDialog from '@/components/ui/ConfirmDialog.vue'\nimport EmptyState from '@/components/common/EmptyState.vue'",
    )
    out = out.replace(
      /(\t\tAlert,\s*\n\t\})/,
      '\t\tAlert,\n\t\tConfirmDialog,\n\t\tEmptyState,\n\t}',
    )
  }

  out = out.replace(
    /<tbody>\s*\n\s*<tr v-for="(\w+) in (\w+)"/,
    `<tbody>
\t\t\t\t\t\t\t<tr v-if="$2.length === 0">
\t\t\t\t\t\t\t\t<td colspan="2" class="px-6 py-10">
\t\t\t\t\t\t\t\t\t<EmptyState :title="$t('common.noData')" />
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t<tr v-for="$1 in $2"`,
  )

  out = out.replace(
    /<span v-if="!editValue">\s*\n\s*\{\{ adding \? '[^']+' : '[^']+' \}\}/g,
    `<span v-if="!editValue">
\t\t\t\t\t\t\t{{ adding ? $t('common.submitting') : $t('common.submit') }}`,
  )

  out = out.replace(
    /<span v-else>\s*\n\s*\{\{ updating \? '[^']+' : '[^']+' \}\}/g,
    `<span v-else>
\t\t\t\t\t\t\t{{ updating ? $t('common.updating') : $t('common.update') }}`,
  )

  out = out.replace(
    /<Button size="sm" variant="primary" @click="handleForm">\s*\n/,
    '<Button size="sm" variant="primary" @click="handleForm" class="mt-4">\n',
  )

  return out
}

for (const file of files) {
  const filePath = path.join(viewsDir, file)
  const original = fs.readFileSync(filePath, 'utf8')
  const updated = fix(original)
  fs.writeFileSync(filePath, updated)
  console.log('Fixed:', file)
}
