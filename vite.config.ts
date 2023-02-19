import px2rem from 'postcss-plugin-px2rem';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        px2rem({
          rootValue: 16,
          propBlackList: ['font-size', 'border', 'border-width'],
          exclude: /(node_module)/,
        }),
      ],
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: [
        'Android >= 39',
        'Chrome >= 50',
        'Safari >= 10.1',
        'iOS >= 10.3',
        '> 1%',
      ],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      toplevel: true,
      safari10: true,
    },
  },
});
