import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/lodash-ts/',
  publicPath: '/lodash-ts/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lodash-ts',
    footer: false,
  },
  styles: [
    `.dumi-default-sidebar > dl > dt  { 
      text-transform: initial !important; }`,
  ],
});
