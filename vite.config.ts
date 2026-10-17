import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, searchForWorkspaceRoot } from 'vite'

// @sonnyhuynh/ui is linked from ../sonnyhuynh-ui while developing both repos side by side.
const uiRoot = fileURLToPath(new URL('../sonnyhuynh-ui', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The linked package has its own React for typechecking; share the app's.
  resolve: { dedupe: ['react', 'react-dom'] },
  // Let the dev server serve the linked package's files (fonts).
  server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), uiRoot] } },
})
