import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib'
import { pipeline } from 'stream'
import { join } from 'path'
import { __dirname } from '../utils.js'

const decompress = async () => {
  const sourseFile = join(__dirname, 'zip', 'files', 'archive.gz')
  const unzipFile = join(__dirname, 'zip', 'files', 'fileToCompress.txt')
  const input = createReadStream(sourseFile)
  const output = createWriteStream(unzipFile)
  const unzip = createUnzip()

  pipeline(
    input, 
    unzip,
    output,
    (error) => {
    if (error) {
      console.log(error)
    }
  })
}

await decompress()
