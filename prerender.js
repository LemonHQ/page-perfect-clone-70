import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes exactly as they appear in App.tsx
const routesToPrerender = [
  '/',
  '/about',
  '/contact',
  '/portfolio-development',
  '/portfolio-operations',
  '/agile-coaching',
  '/product-recovery',
  '/our-approach',
  '/insights',
  '/insights/agile-transformation',
  '/insights/digital-transformation-signs',
  '/insights/building-high-performance-teams',
  '/insights/portfolio-management-rapid-change',
  '/insights/agile-coaching-roi',
  '/insights/devops-integration-strategies'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fullPath = toAbsolute(filePath)
    
    // Ensure directory exists before writing file
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(fullPath, html)
    console.log('pre-rendered:', filePath)
  }
})()