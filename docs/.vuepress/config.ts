import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  alias: {
    '@images': path.resolve(__dirname, './docs/.assets/images'),
  },
})
