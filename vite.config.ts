import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'lucide-react@0.487.0': 'lucide-react',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});