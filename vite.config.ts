
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

 
    export default defineConfig({
  base: "/sustainable-living-website/",
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // ...your aliases
      'vaul@1.1.2': 'vaul',
    }
  }
  // ...rest of the config
});

   
