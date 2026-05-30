import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/views/Criminal')

const INPUT_OLD =
  'class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"'

const LABEL_OLD = 'class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"'
const TABLE_WRAP_OLD =
  'class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"'

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.vue')) acc.push(full)
  }
  return acc
}

for (const file of walk(root)) {
  if (file.endsWith('Crimes.vue')) continue
  let content = fs.readFileSync(file, 'utf8')
  const original = content
  content = content.split(INPUT_OLD).join('class="app-input"')
  content = content.split(LABEL_OLD).join('class="app-label"')
  content = content.split(TABLE_WRAP_OLD).join('class="app-table-wrap"')
  content = content.replace(
    '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">',
    '<div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">',
  )
  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log('Polished:', path.relative(root, file))
  }
}
