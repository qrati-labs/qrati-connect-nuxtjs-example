import { readFile, writeFile } from 'node:fs/promises'

const configPath = '.output/server/wrangler.json'
const config = JSON.parse(await readFile(configPath, 'utf8'))

config.assets.directory = '../public/connect/nuxtjs-example'
await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`)
