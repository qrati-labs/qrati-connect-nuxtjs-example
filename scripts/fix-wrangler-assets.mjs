import { readFile, writeFile } from 'node:fs/promises'

const configPath = '.output/server/wrangler.json'
const config = JSON.parse(await readFile(configPath, 'utf8'))

config.assets.directory = '../public/connect/nuxtjs-example'
config.main = 'entry.mjs'
await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`)

await writeFile(
  '.output/server/entry.mjs',
  `import worker from './index.mjs'

const BASE = '/connect/nuxtjs-example'
const STATIC_PATHS = ['/__nuxt/', '/_nuxt/', '/favicon', '/qrati-', '/robots.txt', '/sitemap.xml']

function isStaticPath(pathname) {
  const path = pathname.slice(BASE.length)
  return STATIC_PATHS.some((prefix) => path === prefix || path.startsWith(prefix))
}

export default {
  fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (url.pathname.startsWith(BASE + '/') && isStaticPath(url.pathname)) {
      url.pathname = url.pathname.slice(BASE.length)
      return worker.fetch(new Request(url, request), env, ctx)
    }

    return worker.fetch(request, env, ctx)
  },
}
\n`,
)
