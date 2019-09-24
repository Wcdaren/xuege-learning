module.exports = {
  title: '技匠',
  dest: 'dist',
  base: '/xuege-learning/dist/',
  repo: 'https://github.com/luoxue-victor/xuege-learning',
  description: '前端知识深入学习',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      { text: 'Github', link: 'https://github.com/luoxue-victor/xuege-learning' },
    ],
    sidebar: 'auto'
  }
}
