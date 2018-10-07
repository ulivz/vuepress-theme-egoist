module.exports = {
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
