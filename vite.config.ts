import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', {target: '19'}]]
    }
  }),
  tailwindss(),
],
})
