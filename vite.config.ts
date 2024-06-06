import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      outDir: "dist/types",
      staticImport: true,
    }),
    vue(),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "@lewebsimple/ui",
      fileName: "ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
