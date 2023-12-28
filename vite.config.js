import { defineConfig } from "vite";
import viteJsconfigPaths from "vite-jsconfig-paths";
import { resolve } from "path";
import NixixHMR, { esbuildOptions } from "nixix/vite-plugin";

export default defineConfig({
  plugins: [viteJsconfigPaths(), NixixHMR('src/default.tsx')],
  resolve: {
    alias: {
      "@": resolve(__dirname),
    },
  },
  esbuild: esbuildOptions,
  optimizeDeps: {
    force: true
  }
});
