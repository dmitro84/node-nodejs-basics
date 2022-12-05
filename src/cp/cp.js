import { ChildProcess, fork } from 'child_process'
import { __dirname } from '../utils.js'
import { join } from 'path'

const spawnChildProcess = async (args) => {
  const myChildProcess = fork(join(__dirname, 'cp', 'files', 'script.js'), [
    ...args.split(' '),
  ])

  myChildProcess.on('message', (msg) => {
    console.log(msg)
  })
}

spawnChildProcess('--arg1 --arg2 --arg3')
