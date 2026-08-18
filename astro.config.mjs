// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

export default defineConfig({
  integrations: [
    react({
      include: ['**/add-to-cart.tsx'],
    }),
    solidJs({
      include: ['**/cart.tsx'],
    }),
  ],
});
