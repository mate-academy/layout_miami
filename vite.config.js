import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/images/photos/*',
          dest: 'images/BOSH-photo',
        },
      ],
    }),
  ],
});
