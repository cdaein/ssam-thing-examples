import { defineConfig, loadEnv } from "vite";
import { ssamExport } from "vite-plugin-ssam-export";
import { ssamFfmpeg } from "vite-plugin-ssam-ffmpeg";
import { ssamGit } from "vite-plugin-ssam-git";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "./",
    plugins: [ssamExport(), ssamGit(), ssamFfmpeg()],
    build: {
      target: "ESNEXT",
      outDir: "./dist",
      assetsDir: ".",
      rollupOptions: {
        //
      },
    },
    define: {
      SKETCH: JSON.stringify(env.SKETCH),
    },
  };
});
