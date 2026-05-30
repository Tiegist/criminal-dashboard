import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/views/Criminal')

const SELECT_OLD =
  'class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"'

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.vue')) acc.push(full)
  }
  return acc
}

function ensureImports(content) {
  if (!content.includes("ConfirmDialog")) {
    content = content.replace(
      "import Button from '@/components/ui/Button.vue'",
      "import EmptyState from '@/components/common/EmptyState.vue'\nimport ConfirmDialog from '@/components/ui/ConfirmDialog.vue'\nimport Button from '@/components/ui/Button.vue'",
    )
  }
  if (!content.includes('EmptyState,')) {
    content = content.replace(
      /components:\s*\{([^}]+)\}/,
      (match, inner) => {
        if (inner.includes('EmptyState')) return match
        return `components: {${inner.trim().replace(/,\s*$/, '')},\n\t\tEmptyState,\n\t\tConfirmDialog,\n\t}`
      },
    )
  }
  return content
}

function polishFile(file) {
  if (file.endsWith('Crimes.vue')) return false

  let content = fs.readFileSync(file, 'utf8')
  const original = content

  if (!content.includes('bg-gray-900 bg-opacity-50') && !content.includes('relative overflow-x-auto shadow-md')) {
    return false
  }

  content = content.split(SELECT_OLD).join('class="app-select"')

  content = content.replace(
    /<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">\s*<div class="space-y-6">/,
    '<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">\n\t\t\t<div class="lg:col-span-5 xl:col-span-4">',
  )

  const tableWrapMatch = content.match(
    /(\t\t\t<div)\s*\n\t\t\t\tclass="app-table-wrap">/,
  )
  if (tableWrapMatch) {
    content = content.replace(
      /(\t\t\t)<div\s*\n\t\t\t\tclass="app-table-wrap">/,
      '$1<div class="lg:col-span-7 xl:col-span-8">\n\t\t\t\t<div class="app-table-wrap">',
    )
    content = content.replace(
      /(\t\t\t<\/div>\s*\n\t\t\t<\/div>\s*\n\n\t\t<\/div>\s*\n\t\t<div v-if="isModalOpen")/,
      '$1',
    )
    content = content.replace(
      /(\t\t\t\t<\/div>\s*\n\t\t\t<\/div>\s*\n\n\t\t<\/div>)(\s*\n\t\t<div v-if="isModalOpen")/,
      '$1\t\t\t</div>$2',
    )
  }

  content = content.replace(
    /\t\t\t\t\t<div class="relative overflow-x-auto shadow-md sm:rounded-lg">\s*\n\t\t\t\t\t\t<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">\s*\n\t\t\t\t\t\t\t<thead\s*\n\t\t\t\t\t\t\t\tclass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">/g,
    '\t\t\t\t\t\t<table class="app-table">\n\t\t\t\t\t\t\t<thead class="app-table-head">',
  )

  content = content.replace(
    /<tr v-for="([^"]+)"([^>]*) class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">/g,
    '<tr v-for="$1"$2 class="app-table-row">',
  )

  content = content.replace(
    /<tr v-for="([^"]+)"([^>]*)>/g,
    (match, vfor, rest) => {
      if (match.includes('app-table-row')) return match
      if (rest.includes('class=')) return match
      const arrayMatch = vfor.match(/ in (\w+)/)
      if (!arrayMatch) return match
      return `<tr v-if="${arrayMatch[1]}.length === 0">\n\t\t\t\t\t\t\t\t\t<td colspan="99" class="px-6 py-10"><EmptyState :title="$t('common.noData')" /></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr v-for="${vfor}"${rest} class="app-table-row">`
    },
  )

  content = content.replace(
    /<td class="px-6 py-4">\s*\n\t\t\t\t\t\t\t\t\t\t<a @click="([^"]+)"[^>]*>([^<]+)<\/a>\s*\n\t\t\t\t\t\t\t\t\t\t\|\s*\n\t\t\t\t\t\t\t\t\t\t<a @click="([^"]+)"[^>]*>([^<]+)<\/a>\s*\n\t\t\t\t\t\t\t\t\t<\/td>/g,
    `<td class="px-6 py-4">
\t\t\t\t\t\t\t\t\t\t<div class="flex justify-end gap-3">
\t\t\t\t\t\t\t\t\t\t\t<button type="button" @click="$1" class="app-link-edit">{{ $t('common.edit') }}</button>
\t\t\t\t\t\t\t\t\t\t\t<button type="button" @click="$3" class="app-link-delete">{{ $t('common.delete') }}</button>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</td>`,
  )

  const deleteMatch = content.match(/@click="(delete\w+)\(\)"/)
  const entityMatch = content.match(/\{\{\s*(\w+)\.name/)
  if (deleteMatch && entityMatch) {
    content = content.replace(
      /\s*<div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">[\s\S]*?<\/div>\s*\n\t\t<\/div>\s*\n\t<\/AdminLayout>/,
      `\n\t\t<ConfirmDialog v-model="isModalOpen" :item-name="${entityMatch[1]}.name" @confirm="${deleteMatch[1]}()" />\n\t</AdminLayout>`,
    )
  }

  content = content.replace(/colspan="99"/g, (match, offset, str) => {
    const thead = str.slice(Math.max(0, offset - 800), offset)
    const thCount = (thead.match(/<th/g) || []).length
    return `colspan="${Math.max(thCount, 2)}"`
  })

  content = ensureImports(content)

  if (content !== original) {
    fs.writeFileSync(file, content)
    return true
  }
  return false
}

for (const file of walk(root)) {
  if (polishFile(file)) {
    console.log('Polished:', path.relative(root, file))
  }
}
