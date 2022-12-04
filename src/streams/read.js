import { createReadStream } from 'fs'
import { join } from 'path'
import { stdout } from 'process'
import { __dirname } from '../utils.js'

const read = async () => {
  let data = ''
  const file = join(__dirname, 'streams', 'files', 'fileToRead.txt')
  const readStream = createReadStream(file, 'utf-8')

  readStream.on('data', (chunk) => (data += chunk))
  readStream.on('end', () => stdout.write(data))
  readStream.on('error', (error) => console.log('Error', error.message))
}

await read()
