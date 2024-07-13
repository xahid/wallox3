import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  
 build: {
  sourcemap: false
}
});
