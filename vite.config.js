import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // корень фронтенда
  build: {
    outDir: "../public", // куда складывать билд
    emptyOutDir: true,
  },
});
