module.exports = {
  title: '庶民样本',
  description: 'EGOIST 在这里写作',
  theme: require.resolve('../..'),
  googleAnalytics: 'UA-54857209-6',
  url: 'https://egoist.moe',
  feed: true,
  author: 'EGOIST',
  email: '0x142857@gmail.com',
  themeConfig: {
    headerTitle: 'e.z.',
    website: 'https://github.com/egoist',
    repo: 'egoist/blog',
    twitter: '_egoistlily',
    nav: [
      { text: 'about', link: '/about.html' },
      { text: 'girls', link: '/girls.html' },
      { text: 'donate', link: '/donate.html' },
      { text: 'tag', link: '/tag/' },
      { text: 'category', link: '/category/' },
    ]
  },
  markdown: {
    // slugify: 'limax',
    highlightedLineBackground: '#ffe9ad',
    hideLanguage: true,
    plugins: [
      'markdown-it-footnote'
    ]
  }
}
