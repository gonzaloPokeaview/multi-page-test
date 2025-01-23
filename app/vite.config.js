import { defineConfig } from 'vite'

export default defineConfig({
  // Keep the forward slashes / / around your repo name
  build: {
    outDir: "..",
    rollupOptions: {
      input: {
        main: "index.html",
        page1: "./src/other.html",
      },
    },
  },
  base: '/multi-page-test/', 
});