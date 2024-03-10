import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ggbee",
  description: "知识体系，个人总结",
  base: '/ggbee/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端基础',
        items: [
          { text: 'HTML/CSS', link: '/1-fe-foundation/html-css' },
          { text: 'JavaScript', link: '/1-fe-foundation/javascript' },
          { text: 'ESMAScript', link: '/1-fe-foundation/ESMAScript' },
          { text: 'TypeScript', link: '/1-fe-foundation/typescript' },
          { text: 'Vue', link: '/1-fe-foundation/vue' },
          { text: 'React', link: '/1-fe-foundation/react' },
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'Babel', link: '/2-fe-engineering/babel' },
          { text: 'Webpack', link: '/2-fe-engineering/webpack' },
          { text: 'Vite', link: '/2-fe-engineering/vite' },
          { text: '自动化构建', link: '/2-fe-engineering/auto-build' },
        ]
      },
      {
        text: '性能优化',
        items: [
          { text: 'Http及本地缓存', link: '/3-optimize/cache' },
          { text: '性能优化', link: '/3-optimize/performance' },
          { text: '低代码', link: '/3-optimize/low-code' },
        ]
      },
      {
        text: '源码解析',
        items: [
          { text: 'react-router', link: '/4-source-code/react-router' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '设计模式', link: '/5-others/design-mode' },
          { text: '数据结构及算法', link: '/5-others/algorithm' },
          { text: '书单', link: '/5-others/books' },
        ]
      },
    ],

    sidebar: [
      {
        text: '前端基础',
        items: [
          { text: 'HTML/CSS', link: '/1-fe-foundation/html-css' },
          { text: 'JavaScript', link: '/1-fe-foundation/javascript' },
          { text: 'ESMAScript', link: '/1-fe-foundation/ESMAScript' },
          { text: 'TypeScript', link: '/1-fe-foundation/typescript' },
          { text: 'Vue', link: '/1-fe-foundation/vue' },
          { text: 'React', link: '/1-fe-foundation/react' },
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'Babel', link: '/2-fe-engineering/babel' },
          { text: 'Webpack', link: '/2-fe-engineering/webpack' },
          { text: 'Vite', link: '/2-fe-engineering/vite' },
          { text: '自动化构建', link: '/2-fe-engineering/auto-build' },
        ]
      },
      {
        text: '性能优化',
        items: [
          { text: 'Http及本地缓存', link: '/3-optimize/cache' },
          { text: '性能优化', link: '/3-optimize/performance' },
          { text: '低代码', link: '/3-optimize/low-code' },
        ]
      },
      {
        text: '源码解析',
        items: [
          { text: 'react-router', link: '/4-source-code/react-router' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '设计模式', link: '/5-others/design-mode' },
          { text: '数据结构及算法', link: '/5-others/algorithm' },
          { text: '书单', link: '/5-others/books' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gg8899' }
    ]
  }
})
