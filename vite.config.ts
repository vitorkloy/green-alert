import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso externo (pelo IP do PC)
    port: 5173,      // Porta padrão (opcional)
  }
})