import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, searchForWorkspaceRoot } from 'vite'

// @sonnyhuynh/ui installs from GitHub. While developing both repos side by side it can be
// `npm link`ed to ../sonnyhuynh-ui; only then does the dev server need access to that folder.
const uiRoot = fileURLToPath(new URL('../sonnyhuynh-ui', import.meta.url))
const allow = [searchForWorkspaceRoot(process.cwd()), ...(existsSync(uiRoot) ? [uiRoot] : [])]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // A linked package has its own React for typechecking; share the app's.
  resolve: { dedupe: ['react', 'react-dom'] },
  // Let the dev server serve a linked package's files (fonts).
  server: { fs: { allow } },
})
