import { defineConfig } from 'vitepress'
import { meun } from '../constants'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ggbee",
  description: "知识体系，个人总结",
  base: '/ggbee/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: meun,

    sidebar: meun,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gg8899' }
    ]
  }
})
