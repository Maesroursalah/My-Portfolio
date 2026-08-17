import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// GitHub Pages serves this project from a sub-path, not from the domain root:
//   https://maesroursalah.github.io/My-Portfolio/
// Vite must know that sub-path at BUILD time so the emitted asset URLs become
// /My-Portfolio/assets/... instead of /assets/... (the latter 404s -> white page).
// Override it for any other host with the VITE_BASE_PATH env var, or with `vite build --base=/`.
const BASE_PATH = process.env.VITE_BASE_PATH || '/My-Portfolio/';

export default defineConfig(({command}) => {
  return {
    // The dev server (command === 'serve') stays at '/' so `npm run dev` is unchanged.
    base: command === 'build' ? BASE_PATH : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
