import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/shoping-cart/', // اسم الريبو بتاعك هنا
});


