import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
      '@componants': path.resolve(__dirname, './src/components'), 
       '@store': path.resolve(__dirname, './src/redux-store'), 
       '@admin': path.resolve(__dirname, './src/pages/Admin'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      // '@Dashboard': path.resolve(__dirname, './src/componants/Dashboard'),
    },
  },
});
