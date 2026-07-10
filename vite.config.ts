import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set DEPLOY_TARGET=gh-pages when building for the GitHub Pages mirror
// (served at /JHC/). The default build targets the Netlify site at
// jimhang.com and must use a root-relative base.
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/JHC/' : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
