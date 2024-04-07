import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Change to your backend server URL
        secure: false, // Add this option for better compatibility
      },
    },
  },
  plugins: [react()],
});
