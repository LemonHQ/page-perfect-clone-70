import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes defined in App.tsx
const routesToPrerender = [
  '/',
  '/our-model',
  '/dedicated-team',
  '/team-extension',
  '/offshore-centre',
  '/about',
  '/leadership',
  '/martech',
  '/financial-software',
  '/retail-ecommerce',
  '/case-studies',
  '/blog',
  '/contact',
  '/news',
  '/faq',
  '/portfolio-development',
  '/portfolio-operations',
  '/agile-coaching',
  '/product-recovery',
  '/our-approach'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fullPath = toAbsolute(filePath)
    
    // Ensure directory exists
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(fullPath, html)
    console.log('pre-rendered:', filePath)
  }
})()