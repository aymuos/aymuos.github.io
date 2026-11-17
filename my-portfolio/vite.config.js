import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('/@heroui/') || id.includes('/@react-aria/') || id.includes('/tailwind-variants/')) return 'heroui';
          if (id.includes('/framer-motion/') || id.includes('/motion-dom/') || id.includes('/motion-utils/')) return 'motion';
          if (id.includes('/react-dom/') || id.includes('/react/')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
})
