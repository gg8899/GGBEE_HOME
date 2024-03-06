import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GGBEE HOME PAGE",
  description: "个人主页",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '个人详情', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '个人详情',
        items: [
          { text: '项目详情', link: '/markdown-examples' },
          { text: '学习进阶', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gg8899' }
    ]
  }
})
