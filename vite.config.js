import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const root = path.resolve(__dirname, "src/client/pages");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  root,
  appType: "mpa",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, "index.html"),
        clients: path.resolve(root, "clients/index.html"),
        products: path.resolve(root, "products/index.html"),
      },
    },
  },
});
