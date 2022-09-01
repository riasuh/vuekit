import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
})
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  alias: {
    '@images': path.resolve(__dirname, './docs/.assets/images'),
  },
}
