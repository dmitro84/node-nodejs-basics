import { createReadStream, existsSync } from 'fs'
import { join } from 'path'
import { stdout } from 'process'
import { __dirname } from '../utils.js'

const read = async () => {
  let data = ''
  const file = join(__dirname, 'fs', 'files', 'fileToRead.txt')
  if (!existsSync(file)) {
    throw new Error('FS operation failed')
  }
  const readStream = createReadStream(file, 'utf-8')

  readStream.on('data', (chunk) => (data += chunk))
  readStream.on('end', () => stdout.write(data))
  readStream.on('error', (error) => console.log('Error', error.message))
}

await read()
