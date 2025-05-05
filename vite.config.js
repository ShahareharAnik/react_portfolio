import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Shaharehar Rahaman Anik Portfolio',
        short_name: 'Anik Portfolio',
        description: 'Professional portfolio of Shaharehar Rahaman Anik - Software Engineer, Developer, Designer',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/logo-white.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/assets/logo-white.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ],
});
