import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createWriteStream, existsSync } from 'fs'

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  const file = join(__dirname, './files/fresh.txt')
  const data = 'I am fresh and young'
  if (existsSync(file)) {
    throw new Error('FS operation failed')
  }
  let wstream = createWriteStream(file)
  wstream.write(data)
}

await create()
