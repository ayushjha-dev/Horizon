import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'unstung-ivelisse-uncheery.ngrok-free.dev',
      '.ngrok-free.dev'
    ]
  }
});
