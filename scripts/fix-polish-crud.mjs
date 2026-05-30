import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../src/views/Criminal')

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.vue')) acc.push(full)
  }
  return acc
}

for (const file of walk(root)) {
  let content = fs.readFileSync(file, 'utf8')
  const original = content

  content = content.replace(/\t\t<\/div>\s*<\/div>\s*\n\t\t<ConfirmDialog/g, '\t\t</div>\n\t\t<ConfirmDialog')

  if (content.includes('EmptyState,') && !content.includes("import EmptyState")) {
    content = content.replace(
      "import Alert from '@/components/ui/Alert.vue'",
      "import EmptyState from '@/components/common/EmptyState.vue'\nimport ConfirmDialog from '@/components/ui/ConfirmDialog.vue'\nimport Alert from '@/components/ui/Alert.vue'",
    )
  }

  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log('Fixed:', path.relative(root, file))
  }
}
