import { defineConfig } from 'dumi'

export default defineConfig({
  base: '/lodash-ts/',
  publicPath: '/lodash-ts/',
  outputPath: 'docs-dist',
  themeConfig: {
    footer: 'Powered by Huauauaa',
    logo: '/lodash-ts/logo.svg',
  },
  styles: [
    `.dumi-default-sidebar > dl > dt  { 
      text-transform: initial !important; }`,
  ],
})
