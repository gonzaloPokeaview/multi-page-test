// import { defineConfig } from 'vite'

// export default defineConfig({
//   // Keep the forward slashes / / around your repo name
//   build: {
//     outDir: "..",
//     rollupOptions: {
//       input: {
//         main: "index.html",
//         page1: "./src/other.html",
//       },
//     },
//   },
//   base: '/multi-page-test/', 
// });
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/multi-page-test/', // Replace <REPOSITORY_NAME> with your GitHub repo name
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, './src/other.html'),
      },
    },
  },
})
