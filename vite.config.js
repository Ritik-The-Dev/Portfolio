import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React - loaded first
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          // Three.js ecosystem - loaded only when 3D page is visited
          if (id.includes('node_modules/three/') || 
              id.includes('node_modules/@react-three/')) {
            return 'three-vendor';
          }
          // Spring animation - with three
          if (id.includes('node_modules/@react-spring/')) {
            return 'spring-vendor';
          }
          // Email service - only on contact page
          if (id.includes('node_modules/@emailjs/')) {
            return 'emailjs-vendor';
          }
          // Timeline component - only on about page
          if (id.includes('node_modules/react-vertical-timeline')) {
            return 'timeline-vendor';
          }
        },
      },
    },
    sourcemap: false,
    target: 'es2015',
    chunkSizeWarningLimit: 1000,
    // Minification - esbuild is built-in and fast
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
