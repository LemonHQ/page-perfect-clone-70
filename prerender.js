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
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Generate file path that matches the route structure
      const filePath = url === '/' ? 'dist/index.html' : `dist${url}.html`
      const fullPath = toAbsolute(filePath)
      
      // Ensure all necessary directories exist (including nested ones)
      const dir = path.dirname(fullPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        console.log('created directory:', dir)
      }
      
      // Write the HTML file
      fs.writeFileSync(fullPath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Failed to prerender ${url}:`, error)
    }
  }
  console.log(`Successfully pre-rendered ${routesToPrerender.length} routes`)
})()