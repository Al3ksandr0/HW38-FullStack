import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/HW39-1-FullStack/", //тут менять имя реп
  plugins: [react()],
});
